import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Mail } from 'lucide-react';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (sessionId) {
      // In a real app, we would verify the session on the backend
      // and then trigger the confirmation email.
      // For this demo, we'll just simulate it.
      setStatus('success');
      
      // Simulate sending confirmation email
      fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: 'customer@example.com', // In real app, get from session
          planName: 'Full Scale' 
        }),
      }).catch(console.error);
    }
  }, [sessionId]);

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-accent" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">You're in.</h1>
        <p className="text-xl text-gray-400 mb-12">
          Your GTM engine is warming up. We've sent a confirmation email and receipt to your inbox.
        </p>

        <div className="glass-card p-8 rounded-3xl border-white/10 mb-12 text-left">
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            <Mail className="w-5 h-5 text-accent" />
            Next Steps
          </h3>
          <ul className="space-y-4 m-0 p-0 list-none">
            {[
              'Check your email for the onboarding link',
              'Connect your ad accounts (Google/Meta)',
              'Access your dedicated GTM board',
              'Add your first task to the queue'
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-accent">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
        >
          Back to Dashboard
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
