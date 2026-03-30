import { pgTable, uuid, text, integer, jsonb, timestamp, vector } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  role: text('role', { enum: ['admin', 'employee', 'mentor'] }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const skillProfiles = pgTable('skill_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  skills: jsonb('skills').$type<Array<{
    name: string;
    category: 'technical' | 'soft' | 'domain';
    proficiency: 1 | 2 | 3 | 4 | 5;
    verifiedBy: 'assessment' | 'peer' | 'project' | 'certification';
    lastUpdated: string;
    evidence: string[];
  }>>(),
  vectorEmbedding: vector('vector_embedding', { dimensions: 768 }),
  lastAnalyzed: timestamp('last_analyzed'),
  nextReviewDate: timestamp('next_review_date'),
});

export const gapAnalyses = pgTable('gap_analyses', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  targetRoleId: uuid('target_role_id'),
  gapScore: integer('gap_score'),
  criticalGaps: jsonb('critical_gaps'),
  recommendedActions: jsonb('recommended_actions'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const mentorships = pgTable('mentorships', {
  id: uuid('id').primaryKey().defaultRandom(),
  mentorId: uuid('mentor_id').references(() => users.id).notNull(),
  menteeId: uuid('mentee_id').references(() => users.id).notNull(),
  matchingScore: integer('matching_score'),
  status: text('status', { enum: ['pending', 'active', 'completed'] }).notNull().default('pending'),
  skillFocus: text('skill_focus').array(),
  sessionHistory: jsonb('session_history'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const posts = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  skillTags: text('skill_tags').array(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id').references(() => posts.id).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const reactions = pgTable('reactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id').references(() => posts.id).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  type: text('type').notNull(), // e.g., 'like', 'endorse'
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
