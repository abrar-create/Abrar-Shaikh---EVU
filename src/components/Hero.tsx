import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

export default function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={containerRef} className="relative pt-48 pb-32 overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-accent mb-12 tracking-[0.4em] uppercase shadow-[0_0_30px_rgba(0,255,153,0.15)] backdrop-blur-xl"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Engineered for the 1%</span>
        </motion.div>

        <motion.div style={{ y: y1 }} className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-[-0.05em] text-white mb-12 leading-[0.8] text-balance"
          >
            Your GTM <br />
            <span className="text-accent relative inline-block">
              Engine.
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-4 left-0 h-2 bg-accent/20 rounded-full" 
              />
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-500 mb-16 leading-relaxed font-medium text-balance tracking-tight"
        >
          We don't do "marketing." We build high-velocity acquisition systems for founders who value speed over bureaucracy. Elite execution. senior talent. flat monthly fee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button 
            onClick={onGetStarted}
            className="w-full sm:w-auto bg-accent text-black px-12 py-6 rounded-2xl text-xl font-black hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,153,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            Get Started
            <ArrowRight className="w-6 h-6" />
          </button>
          <a 
            href="#pricing"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-12 py-6 rounded-2xl text-xl font-black transition-all text-center backdrop-blur-md"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Floating Metrics with Parallax */}
        <motion.div style={{ y: y2 }} className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: Target, label: 'Ads Live In', value: '48 Hours', detail: 'Guaranteed' },
            { icon: BarChart3, label: 'Avg. ROAS', value: '3.4x', detail: 'Across SaaS' },
            { icon: Zap, label: 'Talent Level', value: 'Senior Only', detail: '7+ Years Exp' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card p-12 rounded-[3rem] flex flex-col items-center gap-4 border-white/10 depth-shadow group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">{item.label}</span>
              <span className="text-4xl font-black text-white tracking-tight">{item.value}</span>
              <span className="text-[10px] font-bold text-accent/50 uppercase tracking-widest">{item.detail}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -z-10" />
    </section>
  );
}
