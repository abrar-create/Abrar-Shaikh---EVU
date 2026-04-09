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
        alert(session.error);
        return;
      }

      window.location.href = `/success?session_id=mock_session_${plan.id}`;
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
            initial={{ opacity: 0, scale: 0.9, rotateX: -10, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: 10, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] depth-shadow"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="p-10 md:p-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tight">Start your engine.</h2>
                  <p className="text-gray-500 font-medium">Select a plan to begin your onboarding.</p>
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
                        ? 'bg-accent/5 border-accent/30 hover:border-accent' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-accent text-black text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-500 mb-4 font-bold uppercase tracking-widest">{plan.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-xs font-bold">/mo</span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-accent text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Select Plan <ArrowRight className="w-3 h-3" />
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
