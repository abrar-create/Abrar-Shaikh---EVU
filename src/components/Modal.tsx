import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const handleSubscribe = async (plan: { id: string, name: string, price: number }) => {
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
        if (session.error === "Stripe is not configured.") {
          window.location.href = `/success?session_id=mock_session_${plan.id}&plan=${plan.name}`;
        } else {
          alert(session.error);
        }
        return;
      }

      if (session.id) {
        window.location.href = `/success?session_id=${session.id}&plan=${plan.name}`;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 perspective-1000">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl bg-[#050505] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="p-10 md:p-16">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-white tracking-tight leading-none mb-2">Start your engine.</h2>
                  <p className="text-gray-500 font-medium tracking-tight">Select a plan to begin your onboarding.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { id: 'gtm-lite', name: 'GTM Lite', price: 2500, desc: 'Single channel' },
                  { id: 'full-scale', name: 'Full Scale', price: 5000, desc: 'Multi-channel + Creative', popular: true }
                ].map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handleSubscribe(plan)}
                    className={`text-left p-8 rounded-[2rem] border transition-all group relative overflow-hidden ${
                      plan.popular 
                        ? 'bg-accent/[0.03] border-accent/30 hover:border-accent' 
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-accent text-black text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                        Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{plan.name}</h3>
                    <p className="text-[10px] text-gray-500 mb-6 font-black uppercase tracking-[0.2em]">{plan.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white tracking-tighter">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">/mo</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-4 mb-10">
                {[
                  'No long-term contracts. Pause anytime.',
                  'Senior-only talent. No juniors.',
                  'Ads live in 48 hours. Guaranteed.',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-sm font-bold text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-center text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
                Secure checkout powered by Stripe
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
