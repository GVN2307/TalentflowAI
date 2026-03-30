import { Brain, Target, TrendingUp, Zap, ArrowUpRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard 
          icon={<Brain className="w-5 h-5 text-purple-400" />}
          label="Verification Score"
          value="84%"
          trend="+5.2%"
          color="purple"
        />
        <StatCard 
          icon={<Target className="w-5 h-5 text-emerald-400" />}
          label="Closed Gaps"
          value="12/15"
          trend="80% Avg"
          color="emerald"
        />
        <StatCard 
          icon={<TrendingUp className="w-5 h-5 text-blue-400" />}
          label="Market Alignment"
          value="92"
          trend="Top 5%"
          color="blue"
        />
        <StatCard 
          icon={<Zap className="w-5 h-5 text-amber-400" />}
          label="Learning Streak"
          value="14 Days"
          trend="Keep it up!"
          color="amber"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Skill Tree Visualizer */}
        <div className="lg:col-span-2 glass-card p-8 h-96 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold font-outfit">Employee Skill Tree</h3>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Maximize <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             {/* Mock visualization background */}
             <div className="w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] blur-3xl opacity-10 animate-pulse" />
          </div>
          <div className="relative z-10 grid grid-cols-3 gap-8 h-full items-center">
             <SkillNode label="Next.js 14" level={5} color="emerald" />
             <SkillNode label="TypeScript" level={4} color="blue" />
             <SkillNode label="AI Prompting" level={3} color="purple" />
             <SkillNode label="System Design" level={4} color="amber" />
             <SkillNode label="PostgreSQL" level={4} color="cyan" />
             <SkillNode label="GraphQL" level={3} color="pink" />
          </div>
        </div>

        {/* Priority Gaps */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold font-outfit mb-6">Priority Gaps</h3>
          <div className="space-y-6">
            <GapItem 
              skill="Kubernetes"
              gap="High"
              progress={30}
              color="rose"
            />
            <GapItem 
              skill="PyTorch"
              gap="Medium"
              progress={65}
              color="amber"
            />
            <GapItem 
              skill="Cloud Security"
              gap="Critical"
              progress={12}
              color="rose"
            />
            <GapItem 
              skill="Rust"
              gap="Growth"
              progress={45}
              color="indigo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend, color }: { icon: React.ReactNode, label: string, value: string, trend: string, color: string }) {
  return (
    <div className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg bg-${color}-500/10`}>
          {icon}
        </div>
        <span className={`text-xs font-bold text-${color}-400 bg-${color}-500/10 px-2 py-1 rounded-full`}>
          {trend}
        </span>
      </div>
      <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
      <h3 className="text-2xl font-bold font-outfit">{value}</h3>
    </div>
  );
}

function SkillNode({ label, level, color }: { label: string, level: number, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group/node">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-white/5 bg-background/50 flex items-center justify-center group-hover/node:scale-110 group-hover/node:border-primary/50 transition-all duration-500 shadow-xl">
           <div className={`w-8 h-8 rounded-full bg-${color}-500 blur-sm opacity-20`} />
           <div className={`absolute inset-0 rounded-full border-2 border-${color}-500/30 group-hover/node:border-${color}-500 transition-colors duration-500`} />
           <span className="absolute text-xs font-bold">{level}/5</span>
        </div>
      </div>
      <span className="text-sm font-bold text-muted-foreground group-hover/node:text-foreground transition-colors">{label}</span>
    </div>
  );
}

function GapItem({ skill, gap, progress, color }: { skill: string, gap: string, progress: number, color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm tracking-tight">{skill}</span>
        <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-${color}-500/20 text-${color}-400 border border-${color}-500/30`}>
          {gap}
        </span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full bg-${color}-500 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
