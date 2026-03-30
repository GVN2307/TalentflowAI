'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Target, Crown, Flame, ArrowUp, ArrowDown } from 'lucide-react';

const LEADERBOARD = [
  { id: '1', name: 'Sarah Chen', score: 1450, badges: 8, rank: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', trend: 'up' },
  { id: '2', name: 'Marcus Thorne', score: 1280, badges: 5, rank: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', trend: 'stable' },
  { id: '3', name: 'Elena Rodriguez', score: 950, badges: 4, rank: 3, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', trend: 'up' },
  { id: '4', name: 'Devraj Singh', score: 1100, badges: 6, rank: 4, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Devraj', trend: 'down' },
  { id: '5', name: 'James Wilson', score: 820, badges: 3, rank: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', trend: 'up' },
].sort((a, b) => b.score - a.score);

export default function LeaderboardPage() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-outfit tracking-tight">Hall of Excellence</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Celebrating the top contributors driving organizational growth through skill mastery and mentorship.</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 items-end pt-10">
        <PodiumSpot player={LEADERBOARD[1]!} rank={2} color="slate-400" icon={<Medal className="w-6 h-6" />} height="h-64" />
        <PodiumSpot player={LEADERBOARD[0]!} rank={1} color="amber-400" icon={<Crown className="w-10 h-10" />} height="h-80" highlight />
        <PodiumSpot player={LEADERBOARD[2]!} rank={3} color="orange-600" icon={<Star className="w-6 h-6" />} height="h-56" />
      </div>

      {/* Full List */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
           <h3 className="font-bold font-outfit flex items-center gap-2">
             <Target className="w-5 h-5 text-emerald-500" /> Organizational Standings
           </h3>
           <div className="flex gap-4 text-xs font-bold text-muted-foreground">
             <span>BADGES</span>
             <span className="w-20 text-right">XP SCORE</span>
           </div>
        </div>
        <div className="divide-y divide-white/5">
          {LEADERBOARD.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 flex items-center hover:bg-white/5 transition-all group"
            >
              <div className="w-8 font-black text-muted-foreground group-hover:text-foreground transition-colors">#{i + 1}</div>
              <div className="flex items-center gap-4 flex-1">
                 <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10" />
                 <div>
                    <div className="font-bold flex items-center gap-2">
                      {p.name} 
                      {p.trend === 'up' && <ArrowUp className="w-3 h-3 text-emerald-500" />}
                      {p.trend === 'down' && <ArrowDown className="w-3 h-3 text-rose-500" />}
                    </div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Level {Math.floor(p.score / 200)} Associate</div>
                 </div>
              </div>
              <div className="flex gap-1 mr-8">
                 {[...Array(p.badges)].slice(0, 4).map((_, b) => (
                   <div key={b} className="w-2 h-2 rounded-full bg-emerald-500/40 border border-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                 ))}
                 {p.badges > 4 && <span className="text-[8px] font-bold text-emerald-500 ml-1">+{p.badges - 4}</span>}
              </div>
              <div className="w-20 text-right font-black font-outfit text-xl group-hover:text-emerald-400 transition-colors">
                {p.score.toLocaleString()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal Milestones */}
      <div className="grid md:grid-cols-2 gap-8">
         <div className="glass-card p-8 space-y-6">
            <h3 className="font-bold font-outfit text-xl flex items-center gap-2">
               <Flame className="w-5 h-5 text-orange-500" /> Your Streaks
            </h3>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Learning Days</p>
                  <p className="text-2xl font-black font-outfit">12</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Peer Endorsements</p>
                  <p className="text-2xl font-black font-outfit">48</p>
               </div>
            </div>
         </div>
         <div className="glass-card p-8 bg-gradient-to-tr from-purple-500/10 to-blue-500/10">
            <h3 className="font-bold font-outfit text-xl mb-4">Mastery Progression</h3>
            <p className="text-sm text-muted-foreground mb-6">You're in the top 15% of the organization. Close 2 more skill gaps to reach Level 10.</p>
            <button className="w-full py-4 bg-white text-black rounded-2xl font-bold shadow-xl hover:bg-white/90 transition-all">
               View My Badges
            </button>
         </div>
      </div>
    </div>
  );
}

function PodiumSpot({ player, rank, color, icon, height, highlight }: any) {
  return (
    <div className={`flex flex-col items-center gap-4 ${highlight ? 'z-10' : ''}`}>
       <motion.div 
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         className="relative"
       >
         <img src={player.avatar} alt={player.name} className={`rounded-3xl border-4 bg-white/5 p-1 ${highlight ? 'w-24 h-24 border-amber-400/50 shadow-[0_0_40px_rgba(251,191,36,0.3)]' : 'w-16 h-16 border-white/10'}`} />
         <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-background flex items-center justify-center font-black text-xs ${highlight ? 'bg-amber-400 text-black' : 'bg-slate-700 text-white'}`}>
           {rank}
         </div>
       </motion.div>
       <div className="text-center">
          <p className={`font-bold font-outfit ${highlight ? 'text-lg' : 'text-sm'}`}>{player.name}</p>
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{player.score} XP</p>
       </div>
       <motion.div 
         initial={{ height: 0 }}
         animate={{ height: height === 'h-80' ? 320 : height === 'h-64' ? 256 : 224 }}
         className={`w-full max-w-[120px] glass-card rounded-t-3xl flex flex-col items-center justify-center gap-4 border-b-0 ${highlight ? 'bg-white/10' : 'bg-white/5'}`}
       >
          <div className={`text-${color} drop-shadow-[0_0_10px_currentColor]`}>
            {icon}
          </div>
       </motion.div>
    </div>
  );
}
