import { motion } from 'motion/react';
import { Shield, Users, FastForward, LineChart, CheckCircle2 } from 'lucide-react';

export default function TheEdgePage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent mb-8 tracking-[0.3em] uppercase">
            The Competitive Advantage
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-[-0.05em] leading-[0.9]">
            The GTM Edge. <br />
            <span className="text-gray-600">Why we win.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl font-medium tracking-tight leading-relaxed">
            We built g2m.xyz because we were tired of the traditional agency model. It's slow, it's opaque, and it's often staffed by juniors learning on your dime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            {
              icon: Users,
              title: 'Senior-Only Squads',
              desc: 'You won\'t find any "Account Coordinators" here. Every person touching your account has at least 7 years of experience scaling 8-figure brands. We hire for technical depth, not client-handling fluff.'
            },
            {
              icon: FastForward,
              title: 'Speed as a Feature',
              desc: 'In the startup world, speed is the only advantage. We launch in 48 hours, not 4 weeks. We iterate daily, not monthly. Our internal systems are built for high-velocity experimentation.'
            },
            {
              icon: Shield,
              title: 'Total Transparency',
              desc: 'No hidden markups. No "proprietary" tech that locks you in. You own all your data, all your accounts, and all your assets. We provide raw data exports, not just polished slide decks.'
            },
            {
              icon: LineChart,
              title: 'Data-Driven, Not Opinion-Led',
              desc: 'We don\'t "feel" like an ad is working. We track every dollar from click to conversion using custom attribution models. If the data doesn\'t support it, we kill it. No ego, just ROI.'
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] hover:border-accent/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-accent/20 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed tracking-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-white/[0.02] border border-white/10 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Our Philosophy</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl font-medium tracking-tight mb-12">
              We believe that GTM is an engineering problem, not a creative one. It's about building a system that predictably turns capital into growth. Our job is to build, maintain, and optimize that system so you can focus on building your product.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'We prioritize profit over vanity metrics',
                'We believe in aggressive testing',
                'We treat your budget like our own',
                'We value direct, honest feedback',
                'We build for scale, not just launch',
                'We are platform agnostic'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 text-gray-300 font-bold tracking-tight">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] -z-10" />
        </section>
      </div>
    </div>
  );
}
