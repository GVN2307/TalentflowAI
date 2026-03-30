import Link from 'next/link';
import { Bot, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <header className="fixed top-0 w-full p-6 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight font-outfit">TalentFlow <span className="text-emerald-500">AI</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
        </nav>
        <Link href="/onboarding" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/20">
          Get Started
        </Link>
      </header>

      <main className="max-w-4xl mt-20">
        <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-tight">
          Unify Your Talent <br />
          <span className="text-emerald-400 glow-text">With Intelligence.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          The all-in-one AI platform to detect skill gaps, automate mentoring, and predict your future workforce needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <FeatureCard 
            icon={<Bot className="w-6 h-6 text-purple-400" />}
            title="Skill Ontology"
            description="Auto-tag 5,000+ skills with real-time market accuracy."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
            title="Gap Matching"
            description="Semantic career matching using deep learning."
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6 text-blue-400" />}
            title="Smart Mentoring"
            description="Pair employees based on skill complementarity."
          />
        </div>

        <div className="glass-card p-1 overflow-hidden">
          <div className="bg-background/80 p-8 rounded-[0.9rem]">
             <div className="flex items-center justify-between mb-8 text-left">
                <div>
                  <h3 className="text-xl font-bold font-outfit">Ready to scale?</h3>
                  <p className="text-muted-foreground">Join 10+ early adopters in the BETA program.</p>
                </div>
                <Link href="/dashboard" className="border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-6 py-3 rounded-xl font-semibold transition-all">
                  Launch Dashboard
                </Link>
             </div>
             <div className="grid grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="h-4 bg-white/10 rounded" />
                <div className="h-4 bg-white/10 rounded" />
                <div className="h-4 bg-white/10 rounded" />
                <div className="h-4 bg-white/10 rounded" />
             </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 pb-10 text-muted-foreground text-sm">
        © 2026 TalentFlow AI. Powered by Advanced Agentic Intelligence.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-6 text-left hover:scale-105 transition-transform duration-300 group">
      <div className="mb-4 p-2 w-fit rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold font-outfit mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed italic">
        {description}
      </p>
    </div>
  );
}
