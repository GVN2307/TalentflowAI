'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, ChevronRight, Sparkles, BrainCircuit, ShieldCheck } from 'lucide-react';
import { useUserStore } from '@/store/useStore';
import Link from 'next/link';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedSkills, setParsedSkills] = useState<string[]>([]);
  
  const handleFileUpload = () => {
    setIsParsing(true);
    // Simulate AI parsing
    setTimeout(() => {
      setParsedSkills(['React.js', 'TypeScript', 'Node.js', 'System Architecture', 'Agile']);
      setIsParsing(false);
      setStep(2);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-emerald-500 w-12' : 'bg-white/10 w-8'}`}
              />
            ))}
          </div>
          <h1 className="text-3xl font-bold font-outfit mb-2">
            {step === 1 && "Import Your Evolution"}
            {step === 2 && "Refine Your Soul"}
            {step === 3 && "Profile Complete"}
          </h1>
          <p className="text-muted-foreground">{step === 1 ? "Upload your resume and let our AI extract your digital footprint." : step === 2 ? "We've extracted these skills. Verify them to build your ontology." : "Your profile is now live on our talent network."}</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-12 text-center"
            >
              <div className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-2xl p-12 hover:border-emerald-500/50 transition-colors" onClick={handleFileUpload}>
                {isParsing ? (
                  <div className="space-y-4">
                    <BrainCircuit className="w-16 h-16 text-emerald-500 mx-auto animate-pulse" />
                    <p className="text-lg font-medium animate-pulse">AI Agent is parsing your experience...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Drop your resume here</p>
                      <p className="text-sm text-muted-foreground">PDF, DOCX, or JSON supported</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="glass-card p-8"
            >
              <h3 className="text-lg font-bold font-outfit mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-500" /> Detected competencies
              </h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {parsedSkills.map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 font-medium flex items-center gap-2">
                    {skill}
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                ))}
                <button className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5">+ Add more</button>
              </div>
              <button 
                onClick={() => setStep(3)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                Confirm Ontology <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              className="glass-card p-12 text-center"
            >
              <ShieldCheck className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-outfit mb-2">Profile Secured</h2>
              <p className="text-muted-foreground mb-10">Your skills have been indexed across the global talent ontology. Ready to see your gap analysis?</p>
              <Link href="/dashboard" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20">
                Go to Dashboard
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
