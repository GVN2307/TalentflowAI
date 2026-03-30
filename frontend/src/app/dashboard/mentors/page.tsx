'use client';

import { useState } from 'react';
import { UserPlus, MessageCircle, Star, ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_MENTORS = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Staff Engineer @ CloudStrike',
    expertise: ['Kubernetes', 'Go', 'Distributed Systems'],
    matchScore: 98,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    isVerified: true,
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Principal Architect @ AI-Core',
    expertise: ['PyTorch', 'System Design', 'MLOps'],
    matchScore: 92,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    isVerified: true,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'FinTech CTO',
    expertise: ['Next.js', 'PostgreSQL', 'Security'],
    matchScore: 84,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    isVerified: false,
  },
];

export default function MentorsPage() {
  const [activeTab, setActiveTab] = useState<'matches' | 'requests'>('matches');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-outfit mb-2">Mentor Hub</h1>
          <p className="text-muted-foreground">AI-driven matching based on your skill gaps and career trajectory.</p>
        </div>
        <div className="flex bg-white/5 rounded-xl p-1 gap-1">
          <button 
            onClick={() => setActiveTab('matches')}
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === 'matches' ? 'bg-emerald-500 text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Top Matches
          </button>
          <button 
            onClick={() => setActiveTab('requests')}
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === 'requests' ? 'bg-emerald-500 text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Pending Requests
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_MENTORS.map((mentor, index) => (
          <motion.div 
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="h-24 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 relative">
               <div className="absolute -bottom-6 left-6">
                  <div className="relative">
                    <img src={mentor.avatar} alt={mentor.name} className="w-16 h-16 rounded-2xl bg-background border-4 border-card p-1 shadow-xl" />
                    {mentor.isVerified && (
                      <div className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 border-2 border-background">
                        <ShieldCheck className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
               </div>
            </div>
            
            <div className="p-6 pt-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold font-outfit">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.role}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold mb-1">
                    <Zap className="w-4 h-4 fill-emerald-400" />
                    <span>{mentor.matchScore}%</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Match Score</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.expertise.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/5">{skill}</span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/10">
                  <UserPlus className="w-4 h-4" /> Connect
                </button>
                <button className="flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-foreground py-2.5 rounded-xl text-sm font-bold transition-all">
                  <MessageCircle className="w-4 h-4" /> Message
                </button>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold">4.9</span>
                  <span className="text-xs text-muted-foreground">(24 reviews)</span>
               </div>
               <div className="flex items-center gap-1 text-xs font-medium text-purple-400">
                  <Award className="w-3 h-3" /> Expert certified
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
