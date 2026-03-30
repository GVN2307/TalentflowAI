'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Star, Clock, Trophy, ArrowRight, Zap, Sparkles } from 'lucide-react';

const RECOMMENDATIONS = [
  {
    id: '1',
    title: 'Advanced Kubernetes Orchestration',
    provider: 'Internal Workshop',
    duration: '4h 30m',
    level: 'Advanced',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1667372333374-0d3c6758880d?auto=format&fit=crop&w=800&q=80',
    tags: ['DevOps', 'Infrastructure'],
    roi: 'Closes 3 priority gaps',
  },
  {
    id: '2',
    title: 'Distributed Systems Patterns in Go',
    provider: 'Coursera',
    duration: '12h 15m',
    level: 'Expert',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    tags: ['Go', 'Architecture'],
    roi: 'Alignment: +15%',
  },
  {
    id: '3',
    title: 'MLOps Pipeline with PyTorch',
    provider: 'Udemy Business',
    duration: '8h 20m',
    level: 'Intermediate',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Python'],
    roi: 'Critical for Q4 goal',
  }
];

export default function LearningPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-outfit mb-2 flex items-center gap-3">
            Learning Pathways <Sparkles className="w-6 h-6 text-emerald-500 fill-emerald-500/20" />
          </h1>
          <p className="text-muted-foreground">AI-curated resources specifically chosen to close your highest priority skill gaps.</p>
        </div>
        <div className="flex gap-4">
           <div className="glass-card flex px-1 py-1 rounded-xl">
             <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'all' ? 'bg-emerald-500 text-white' : 'text-muted-foreground hover:text-foreground'}`}>All</button>
             <button onClick={() => setFilter('internal')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'internal' ? 'bg-emerald-500 text-white' : 'text-muted-foreground hover:text-foreground'}`}>Internal</button>
             <button onClick={() => setFilter('external')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === 'external' ? 'bg-emerald-500 text-white' : 'text-muted-foreground hover:text-foreground'}`}>External</button>
           </div>
        </div>
      </div>

      {/* Main Path Progress */}
      <div className="glass-card p-1">
        <div className="bg-gradient-to-r from-purple-600/20 to-emerald-500/20 p-8 rounded-[0.7rem] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full text-xs font-bold text-purple-400 border border-purple-500/30">
              <Trophy className="w-3 h-3" /> Current Focus: Staff Engineer Track
            </div>
            <h2 className="text-3xl font-bold font-outfit">Your Path To Staff Level</h2>
            <p className="text-muted-foreground">You have closed 65% of the competency requirements. Focus on System Design and Leadership to unlock the next milestone.</p>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full w-2/3 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
            </div>
          </div>
          <button className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-white/10 flex items-center gap-2 shrink-0">
            Continue Learning <Play className="w-4 h-4 fill-black" />
          </button>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RECOMMENDATIONS.map((course, index) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden group hover:border-emerald-500/30 transition-all duration-500"
          >
            <div className="relative h-48">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              <div className="absolute top-4 left-4 flex gap-2">
                {course.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-bold text-white border border-white/10">{tag}</span>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                 <div className="flex items-center gap-2 text-xs font-bold text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded-md">
                   <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {course.rating}
                 </div>
                 <div className="text-[10px] font-black text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-1 rounded-md uppercase">
                   {course.roi}
                 </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold font-outfit group-hover:text-emerald-400 transition-colors line-clamp-1">{course.title}</h3>
                <p className="text-xs text-muted-foreground font-medium">{course.provider}</p>
              </div>

              <div className="flex justify-between items-center text-xs text-muted-foreground pt-2 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {course.duration}
                </div>
                <div className="flex items-center gap-1 font-bold text-foreground">
                  <Zap className="w-3 h-3 text-emerald-500" /> {course.level}
                </div>
              </div>

              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 font-bold text-sm transition-all flex items-center justify-center gap-2">
                Start Course <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
