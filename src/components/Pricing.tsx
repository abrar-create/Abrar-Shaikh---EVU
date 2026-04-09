import { motion } from 'motion/react';
import { Check, Zap, ArrowRight, MessageSquare } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      id: 'gtm-lite',
      name: 'GTM Lite',
      price: 2500,
      description: 'Perfect for early-stage startups testing product-market fit.',
      features: [
        'Single Ad Channel (Meta or Google)',
        'Daily Execution & Optimization',
        'Direct Slack Access',
        'Weekly Performance Reports',
        'Creative Strategy & Copywriting',
      ],
      cta: 'Start Scaling',
      popular: false,
    },
    {
      id: 'full-scale',
      name: 'Full Scale',
      price: 5000,
      description: 'The complete GTM engine for companies ready to dominate.',
      features: [
        'Multi-Channel Strategy',
        'Unlimited Ad Creative',
        'Landing Page Optimization',
        'CRM & Tracking Setup',
        'Dedicated Senior Lead',
        '24/7 Priority Support',
      ],
      cta: 'Go Full Scale',
      popular: true,
    },
  ];

  const handleSubscribe = async (plan: typeof plans[0]) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          planId: plan.id, 
          planName: plan.name, 
          price: plan.price 
        }),
      });
      
      const session = await response.json();
      
      if (session.error) {
        console.error('Stripe Error:', session.error);
        // Fallback for demo if Stripe is not configured
        if (session.error === "Stripe is not configured.") {
          window.location.href = `/success?session_id=mock_session_${plan.id}&plan=${plan.name}`;
        } else {
          alert(session.error);
        }
        return;
      }

      // If we have a real session ID, we should ideally use Stripe.js to redirect
      // But for simplicity in this environment, we can redirect to the session URL if returned
      // Or just use the success page for now if it's a mock environment
      if (session.id) {
        // In a real app, you'd use loadStripe and redirectToCheckout
        // For now, we'll simulate the success if we get a session ID
        window.location.href = `/success?session_id=${session.id}&plan=${plan.name}`;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="pricing" className="py-32 relative">
      {/* Technical Grid Background for this section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-[-0.05em] leading-[0.9]">
            Flat Monthly Fee.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium text-balance tracking-tight">
            No percentages of spend. No hidden fees. Just elite execution for a predictable price. Pause or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`p-12 rounded-[2rem] border relative flex flex-col transition-all duration-500 hover:scale-[1.02] ${
                plan.popular 
                  ? 'bg-accent/[0.03] border-accent/30 shadow-[0_0_50px_rgba(0,255,153,0.05)]' 
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,255,153,0.4)]">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-gray-500 font-medium">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black text-white tracking-tighter">${plan.price.toLocaleString()}</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">/month</span>
              </div>

              <div className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 text-gray-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSubscribe(plan)}
                className={`w-full py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 group ${
                  plan.popular 
                    ? 'bg-accent text-black hover:shadow-[0_0_40px_rgba(0,255,153,0.4)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Founder's Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card p-12 rounded-[3rem] border-white/10 relative overflow-hidden depth-shadow"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
              <MessageSquare className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight">A note from the founder.</h4>
              <p className="text-gray-400 text-lg leading-relaxed font-medium italic">
                "I started g2m.xyz because I was tired of seeing founders get burned by bloated agencies. We're not here to send you pretty reports; we're here to build your acquisition engine. If we don't deliver, you don't stay. It's that simple."
              </p>
              <div className="mt-6 font-black text-white uppercase tracking-widest text-xs">
                — Masoom, Founder @ g2m.xyz
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 blur-[60px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
