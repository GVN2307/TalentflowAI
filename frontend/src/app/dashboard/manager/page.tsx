'use client';

import { motion } from 'framer-motion';
import { Users, TrendingDown, TrendingUp, AlertCircle, ArrowRight, UserPlus, Filter, Download } from 'lucide-react';

const TEAM_STATS = [
  { label: 'Total Members', value: '18', trend: '+2', color: 'blue' },
  { label: 'Avg Skill Coverage', value: '72%', trend: '-4%', color: 'amber' },
  { label: 'Active Mentorships', value: '12', trend: '+5', color: 'emerald' },
  { label: 'Churn Risk', value: 'Low', trend: 'Stable', color: 'purple' },
];

export default function ManagerDashboard() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-outfit mb-2">Team Analytics</h1>
          <p className="text-muted-foreground">Strategic overview of your department's skill liquidity and succession health.</p>
        </div>
        <div className="flex gap-3">
           <button className="glass-card px-4 py-2 flex items-center gap-2 text-sm font-bold hover:bg-white/5 transition-all">
             <Filter className="w-4 h-4" /> Filter
           </button>
           <button className="bg-white text-black px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold hover:bg-white/90 transition-all">
             <Download className="w-4 h-4" /> Export Report
           </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TEAM_STATS.map((stat, i) => (
          <div key={i} className="glass-card p-6">
            <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold font-outfit">{stat.value}</h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Team Skill Heatmap */}
        <div className="lg:col-span-2 glass-card p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold font-outfit">Skill Coverage Heatmap</h3>
            <div className="flex gap-2">
               <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-muted-foreground">
                 <div className="w-2 h-2 bg-rose-500/40 rounded-sm" /> Critical
               </div>
               <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-muted-foreground">
                 <div className="w-2 h-2 bg-emerald-500/40 rounded-sm" /> Optimal
               </div>
            </div>
          </div>
          <div className="space-y-4">
             <HeatmapRow label="Frontend Eng." optimal={85} current={42} />
             <HeatmapRow label="Backend Eng." optimal={90} current={78} />
             <HeatmapRow label="DevOps / Cloud" optimal={75} current={25} />
             <HeatmapRow label="Data Science" optimal={60} current={55} />
             <HeatmapRow label="Product Mgt." optimal={80} current={70} />
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold font-outfit mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-500" /> Strategic Alerts
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl space-y-2">
               <p className="text-sm font-bold text-rose-400">Kubernetes Talent Gap</p>
               <p className="text-xs text-muted-foreground">Team X lacks K8s expertise, blocking the Q3 release. 12 employees need immediate upskilling.</p>
               <button className="text-xs font-bold text-rose-400 flex items-center gap-1 hover:underline">
                 Create Skill Bounty <ArrowRight className="w-3 h-3" />
               </button>
            </div>
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-2">
               <p className="text-sm font-bold text-amber-400">Succession Risk</p>
               <p className="text-xs text-muted-foreground">No clear successor for "Lead Backend" role if current lead departs. Recommended: Sarah Chen.</p>
               <button className="text-xs font-bold text-amber-400 flex items-center gap-1 hover:underline">
                 Start Succession Plan <ArrowRight className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Internal Movements & Risk Scouting */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold font-outfit mb-6">Top Internal Candidates for Open Roles</h3>
          <div className="space-y-6">
             <CandidateCard 
               name="Sarah Chen"
               role="Staff Engineer"
               match="94%"
               target="Architecture Lead"
             />
             <CandidateCard 
               name="Marcus Thorne"
               role="Principal Architect"
               match="88%"
               target="Director of Engineering"
             />
          </div>
        </div>

        <div className="glass-card p-8 border-rose-500/10">
          <h3 className="text-xl font-bold font-outfit mb-6 flex items-center gap-2 text-rose-400">
             <TrendingDown className="w-5 h-5" /> Talent Retention Risk (AI Scouting)
          </h3>
          <div className="space-y-4">
             <RiskRow name="James Wilson" score={72} risk="High" trend="rising" />
             <RiskRow name="Marcus Thorne" score={45} risk="Medium" trend="stable" />
             <RiskRow name="Elena Rodriguez" score={28} risk="Low" trend="falling" />
          </div>
          <div className="mt-6 p-4 bg-rose-500/5 rounded-xl border border-rose-500/10">
             <p className="text-xs text-muted-foreground">
               <span className="font-bold text-rose-400">AI Note:</span> High risk scores correlate with 90+ days of skill stagnation and low internal mentoring engagement.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskRow({ name, score, risk, trend }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all">
       <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[10px] text-muted-foreground">{name[0]}</div>
          <span className="text-sm font-medium">{name}</span>
       </div>
       <div className="flex items-center gap-6">
          <div className="text-right">
             <p className={`text-xs font-bold ${risk === 'High' ? 'text-rose-400' : risk === 'Medium' ? 'text-amber-400' : 'text-emerald-400'}`}>{risk} Risk</p>
             <p className="text-[10px] text-muted-foreground">Score: {score}</p>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${trend === 'rising' ? 'text-rose-400 bg-rose-400/10' : trend === 'falling' ? 'text-emerald-400 bg-emerald-400/10' : 'text-muted-foreground bg-white/5'}`}>
             {trend === 'rising' ? <TrendingUp className="w-4 h-4" /> : trend === 'falling' ? <TrendingDown className="w-4 h-4" /> : <div className="w-2 h-0.5 bg-current" />}
          </div>
       </div>
    </div>
  );
}

function HeatmapRow({ label, optimal, current }: { label: string, optimal: number, current: number }) {
  const isCritical = current < (optimal * 0.5);
  return (
    <div className="space-y-1.5">
       <div className="flex justify-between items-center text-xs">
          <span className="font-bold">{label}</span>
          <span className={`${isCritical ? 'text-rose-400' : 'text-emerald-400'} font-bold`}>{current}% / {optimal}%</span>
       </div>
       <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-white/5" />
          <div className={`h-full ${isCritical ? 'bg-rose-500/40 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'} rounded-full transition-all duration-1000`} style={{ width: `${current}%` }} />
          <div className="absolute top-0 bottom-0 border-l border-white/20 border-dashed" style={{ left: `${optimal}%` }} />
       </div>
    </div>
  );
}

function CandidateCard({ name, role, match, target }: { name: string, role: string, match: string, target: string }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all border border-transparent hover:border-emerald-500/20">
       <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 shrink-0" />
          <div>
             <h4 className="font-bold font-outfit">{name}</h4>
             <p className="text-xs text-muted-foreground">{role}</p>
          </div>
       </div>
       <div className="text-right">
          <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Target: {target}</p>
          <div className="flex items-center justify-end gap-2">
             <div className="text-emerald-400 font-bold">{match}</div>
             <button className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">
                <UserPlus className="w-4 h-4" />
             </button>
          </div>
       </div>
    </div>
  );
}
