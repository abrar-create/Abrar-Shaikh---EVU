import { motion } from 'motion/react';

export default function Results() {
  const results = [
    {
      metric: '3.4x ROAS',
      client: 'Fintech SaaS',
      description: 'Scaled monthly spend from $10k to $150k while maintaining efficiency. We didn\'t just buy traffic; we engineered a conversion machine.',
      size: 'large',
    },
    {
      metric: '-42% CPA',
      client: 'AI Productivity Tool',
      description: 'Optimized landing pages and creative testing to slash acquisition costs in 30 days.',
      size: 'small',
    },
    {
      metric: '120% Growth',
      client: 'D2C Health Brand',
      description: 'Launched multi-channel GTM strategy across Meta and Google. Direct-to-consumer scaling done right.',
      size: 'small',
    },
    {
      metric: '$2M ARR',
      client: 'B2B DevTools',
      description: 'From zero to $2M ARR in 12 months using our LinkedIn Ads playbook.',
      size: 'medium',
    },
  ];

  return (
    <section className="py-32 overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Recent Results.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-medium text-balance">
            We don't just manage ads. We build growth engines that print ROI. These aren't just numbers; they're the lifeblood of the companies we scale.
          </p>
        </div>

        <div className="bento-grid">
          {results.map((result, i) => (
            <motion.div
              key={result.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`glass-card p-10 rounded-[2.5rem] border-white/10 relative group overflow-hidden ${
                result.size === 'large' ? 'col-span-12 md:col-span-8' : 
                result.size === 'medium' ? 'col-span-12 md:col-span-6' : 'col-span-12 md:col-span-4'
              }`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="text-9xl font-black text-white italic">0{i + 1}</div>
              </div>
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black text-accent mb-6 tracking-tighter">
                  {result.metric}
                </div>
                <div className="text-xs font-black text-white mb-4 uppercase tracking-[0.3em]">
                  {result.client}
                </div>
                <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-md">
                  {result.description}
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Logo Cloud Placeholder */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
          {['FINTECH', 'SAAS.CO', 'AI_LABS', 'HEALTH_TECH', 'ECOMM_PRO'].map((logo) => (
            <span key={logo} className="text-2xl font-black tracking-tighter text-white hover:text-accent transition-colors cursor-default">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
