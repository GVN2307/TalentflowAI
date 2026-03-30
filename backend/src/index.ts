import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { Server } from 'socket.io';

dotenv.config();

const typeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type Post {
    id: ID!
    userId: ID!
    content: String!
    skillTags: [String]
    createdAt: String!
  }

  type Query {
    me: User
    feed: [Post]
  }

  type Mutation {
    createPost(content: String!, skillTags: [String]): Post
  }
`;

const resolvers = {
  Query: {
    me: () => ({
      id: "1",
      email: "test@example.com",
      name: "Test User",
      role: "employee"
    }),
    feed: () => [],
  },
  Mutation: {
    createPost: (_: any, { content, skillTags }: any) => ({
      id: Math.random().toString(),
      userId: "1",
      content,
      skillTags,
      createdAt: new Date().toISOString()
    }),
  }
};

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startServer() {
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server) as any,
  );

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('new-post', (post) => {
      io.emit('feed-update', post);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  const PORT = process.env.PORT || 4000;
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startServer();
