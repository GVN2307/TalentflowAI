'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Heart, Share2, Send, Hash, Sparkles, User, Globe } from 'lucide-react';

interface Post {
  id: string;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  time: string;
}

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      role: 'Staff Engineer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    content: "Just published a new guide on scaling Kubernetes clusters for high-traffic FinTech apps. Check it out in the learning hub! #Kubernetes #Scalability",
    tags: ['Kubernetes', 'Scalability'],
    likes: 24,
    comments: 5,
    time: '2h ago',
  },
  {
    id: '2',
    user: {
      name: 'Marcus Thorne',
      role: 'Principal Architect',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    },
    content: "Looking for a mentee interested in MLOps and PyTorch optimization. If you're working on LLM fine-tuning, let's connect. #AI #Mentorship",
    tags: ['AI', 'Mentorship', 'PyTorch'],
    likes: 42,
    comments: 12,
    time: '5h ago',
  },
];

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostSubmit = () => {
    if (!newPostContent.trim()) return;
    
    const newPost: Post = {
      id: Math.random().toString(),
      user: {
        name: 'Devraj Singh',
        role: 'Lead Architect',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Devraj',
      },
      content: newPostContent,
      tags: [],
      likes: 0,
      comments: 0,
      time: 'Just now',
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-outfit mb-1">Social Hub</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Globe className="w-4 h-4" /> Sharing knowledge across the organization
          </p>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-tr from-purple-500 to-blue-500 shadow-lg" />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-background bg-white/5 flex items-center justify-center text-[10px] font-bold">+12</div>
        </div>
      </div>

      {/* Post Composer */}
      <div className="glass-card p-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shrink-0" />
          <div className="flex-1 space-y-4">
            <textarea 
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Share a resource, ask a question, or post a win..."
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 min-h-[100px] focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground hover:text-emerald-500 transition-colors">
                  <Hash className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground hover:text-purple-500 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
              <button 
                onClick={handlePostSubmit}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                Post <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        <AnimatePresence initial={false}>
          {posts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 hover:border-white/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-xl bg-white/5 p-1" />
                  <div>
                    <h3 className="font-bold font-outfit">{post.user.name}</h3>
                    <p className="text-xs text-muted-foreground">{post.user.role} • {post.time}</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {post.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 border-t border-white/5 pt-4">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-400 transition-colors">
                  <Heart className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400 transition-colors">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </button>
                <div className="ml-auto flex -space-x-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-white/10" />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
