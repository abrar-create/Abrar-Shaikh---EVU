import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Can I pause or cancel my subscription?',
      answer: 'Yes. You can pause or cancel your subscription at any time. If you pause, we will save your GTM board and tasks so you can resume exactly where you left off. No questions asked, no awkward cancellation calls.',
    },
    {
      question: 'What is a productized service?',
      answer: 'Productized services turn complex agency work into a predictable, subscription-based product. You get a fixed scope, fixed price, and a streamlined workflow through a task board, eliminating the overhead of traditional agencies.',
    },
    {
      question: 'How fast will I see results?',
      answer: 'We guarantee your first campaigns will be live within 48 hours of onboarding. While significant scaling takes time for data collection and optimization, we typically see initial performance improvements within the first 14 days.',
    },
    {
      question: 'Who will be managing my account?',
      answer: 'You work directly with senior GTM experts. We don\'t have junior account managers or "sales reps" masquerading as strategists. Every person on your squad has at least 7 years of experience in paid acquisition.',
    },
    {
      question: 'What channels do you manage?',
      answer: 'We specialize in Google Ads (Search, Shopping, YouTube), Meta (Facebook, Instagram), and LinkedIn Ads. We also handle landing page optimization and creative strategy to ensure your traffic actually converts.',
    },
  ];

  return (
    <section id="faq" className="py-32 perspective-1000">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-accent mb-8 tracking-[0.3em] uppercase"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Everything you <br /> need to know.
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card rounded-[2rem] border-white/10 overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white/10' : 'bg-white/5'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-black text-white tracking-tight group-hover:text-accent transition-colors">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-accent text-black rotate-180' : 'bg-white/5 text-gray-500'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-8 pb-8">
              <div className="h-px bg-white/10 mb-8" />
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
