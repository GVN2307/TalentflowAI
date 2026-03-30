'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight, Building2, Globe, Cpu } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isSimulating, setIsSimulating] = useState(false);
  const router = useRouter();

  const handleSSO = () => {
    setIsSimulating(true);
    // Simulate Auth0/Clerk redirect and callback
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full glass-card p-10 space-y-8 relative z-10"
      >
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight">Enterprise Access</h1>
          <p className="text-muted-foreground">Sign in with your corporate SSO to access the Talent Management Platform.</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleSSO}
            disabled={isSimulating}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-xl shadow-white/10 group"
          >
            {isSimulating ? (
              <div className="flex items-center gap-2">
                 <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                 Authenticating...
              </div>
            ) : (
              <>
                <Building2 className="w-5 h-5" /> Sign in with SSO
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Trusted By</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-3 gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
             <div className="flex justify-center"><Globe className="w-6 h-6" /></div>
             <div className="flex justify-center"><Cpu className="w-6 h-6" /></div>
             <div className="flex justify-center"><Shield className="w-6 h-6" /></div>
          </div>
        </div>

        <p className="text-[10px] text-center text-muted-foreground uppercase font-medium">
          Protected by <span className="font-bold text-foreground">RyzenShield</span> AI Identity Core
        </p>
      </motion.div>
    </div>
  );
}
