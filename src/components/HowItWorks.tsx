import { motion } from 'motion/react';
import { CreditCard, Layout, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: CreditCard,
      title: 'Subscribe in seconds',
      description: 'Pick a plan that fits your current growth stage. No sales calls, no contracts, no bullshit. Pause or cancel anytime.',
    },
    {
      icon: Layout,
      title: 'Queue up your tasks',
      description: 'Get access to your dedicated GTM board. Dump all your acquisition tasks there. We prioritize and execute daily.',
    },
    {
      icon: Zap,
      title: 'Watch us execute',
      description: 'Our senior squad gets to work. Ads live in 48 hours. We iterate based on real data, not agency guesswork.',
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-black/50 perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            The "Board" Model.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            We've stripped away everything that makes agencies slow. No account managers, no useless meetings. Just a direct line to elite execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group perspective-1000"
            >
              <div className="w-24 h-24 bg-[#0a0a0a] border border-white/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:border-accent group-hover:shadow-[0_0_40px_rgba(0,255,153,0.2)] transition-all duration-500 depth-shadow group-hover:-translate-z-4">
                <step.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 uppercase tracking-widest">Step 0{i + 1}</span>
                <h3 className="text-2xl font-black text-white tracking-tight">{step.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xs text-lg font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 glass-card p-12 rounded-[3rem] border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 depth-shadow">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center font-black text-black text-3xl shadow-[0_0_20px_rgba(0,255,153,0.4)]">
              !
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-2">Ready to move fast?</h4>
              <p className="text-gray-400 text-lg font-medium">Join 20+ founders scaling with g2m.xyz</p>
            </div>
          </div>
          <Link 
            to="/pricing"
            className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-accent hover:shadow-[0_0_30px_rgba(0,255,153,0.4)] transition-all flex items-center gap-3 group"
          >
            Get Started
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
