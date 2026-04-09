import { motion } from 'motion/react';
import { Zap, Shield, Users, LineChart, Target, BarChart } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      icon: Zap,
      title: 'High-Velocity Execution',
      description: 'Ads live in 48 hours. We iterate daily. Speed is our primary competitive advantage.',
    },
    {
      icon: Shield,
      title: 'Zero Contracts',
      description: 'We earn your business every month. No long-term commitments. Pause or cancel anytime.',
    },
    {
      icon: Users,
      title: 'Senior-Only Talent',
      description: 'No junior account managers. You work directly with senior GTM leads with 7+ years of experience.',
    },
    {
      icon: LineChart,
      title: 'Daily Iteration',
      description: 'We don\'t wait for monthly meetings. We optimize your campaigns every single day based on real-time data.',
    },
  ];

  return (
    <section id="edge" className="py-32 perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              The GTM Edge. <br />
              <span className="text-gradient">Engineered for speed.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-medium text-balance">
              Traditional agencies are slow, expensive, and rely on junior talent. We've flipped the script with a productized model that prioritizes results over billable hours.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {props.map((prop, i) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <prop.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">{prop.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{prop.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card p-10 rounded-[3rem] border-white/10 depth-shadow"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">GTM_DASHBOARD_V2.EXE</div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 rounded-2xl border border-white/5 p-6 flex flex-col justify-between h-40">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total ROAS</span>
                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">+24% WoW</span>
                  </div>
                  <div className="text-6xl font-black text-white tracking-tighter">3.4x</div>
                  <div className="flex gap-1.5 items-end h-12">
                    {[40, 60, 45, 70, 55, 85, 75, 95].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="flex-1 bg-accent/20 rounded-t-lg" 
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl border border-white/5 p-6">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">CPA</div>
                    <div className="text-3xl font-black text-white tracking-tighter">$42.50</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl border border-white/5 p-6">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">CTR</div>
                    <div className="text-3xl font-black text-white tracking-tighter">2.8%</div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-black text-accent uppercase tracking-widest">Executing: Google Search Ads Optimization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
