import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Mail } from 'lucide-react';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const planName = searchParams.get('plan') || 'Full Scale';
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (sessionId) {
      setStatus('success');
      
      // Simulate sending confirmation email
      fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: 'customer@example.com', 
          planName: planName 
        }),
      }).catch(console.error);
    }
  }, [sessionId, planName]);

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-24 h-24 bg-accent/10 rounded-[2rem] border border-accent/30 flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(0,255,153,0.2)]"
        >
          <CheckCircle2 className="w-12 h-12 text-accent" />
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-[-0.05em]">You're in.</h1>
        <p className="text-xl text-gray-500 mb-16 font-medium tracking-tight">
          Your GTM engine is warming up. We've sent a confirmation email and receipt for your <span className="text-white font-bold">{planName}</span> subscription.
        </p>

        <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] mb-12 text-left backdrop-blur-xl">
          <h3 className="text-white font-black mb-8 flex items-center gap-3 text-xl tracking-tight">
            <Mail className="w-6 h-6 text-accent" />
            Next Steps
          </h3>
          <ul className="space-y-6 m-0 p-0 list-none">
            {[
              'Check your email for the onboarding link',
              'Connect your ad accounts (Google/Meta)',
              'Access your dedicated GTM board',
              'Add your first task to the queue'
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-400 font-medium tracking-tight">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-black text-accent shrink-0">
                  0{i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <Link 
          to="/"
          className="inline-flex items-center gap-3 text-accent font-black uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all"
        >
          Back to Dashboard
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
