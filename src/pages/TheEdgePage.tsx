import { motion } from 'motion/react';
import { Shield, Users, FastForward, LineChart, CheckCircle2 } from 'lucide-react';

export default function TheEdgePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
        >
          The GTM Edge: <br />
          <span className="text-accent">Why we're different.</span>
        </motion.h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            We built g2m.xyz because we were tired of the traditional agency model. It's slow, it's opaque, and it's often staffed by juniors learning on your dime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: 'Senior-Only Squads',
                desc: 'You won\'t find any "Account Coordinators" here. Every person touching your account has at least 7 years of experience scaling 8-figure brands.'
              },
              {
                icon: FastForward,
                title: 'Speed as a Feature',
                desc: 'In the startup world, speed is the only advantage. We launch in 48 hours, not 4 weeks. We iterate daily, not monthly.'
              },
              {
                icon: Shield,
                title: 'Total Transparency',
                desc: 'No hidden markups. No "proprietary" tech that locks you in. You own all your data, all your accounts, and all your assets. Forever.'
              },
              {
                icon: LineChart,
                title: 'Data-Driven, Not Opinion-Led',
                desc: 'We don\'t "feel" like an ad is working. We track every dollar from click to conversion. If the data doesn\'t support it, we don\'t do it.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border-white/10"
              >
                <item.icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 m-0 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <section className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe that GTM is an engineering problem, not a creative one. It's about building a system that predictably turns capital into growth. Our job is to build, maintain, and optimize that system so you can focus on building your product.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'We prioritize profit over vanity metrics',
                'We believe in aggressive testing',
                'We treat your budget like our own',
                'We value direct, honest feedback'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
