import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: "How many tasks can I add to my board?",
      a: "As many as you want! We work through your queue one task at a time (or more depending on your plan). Once a task is finished, we move straight to the next one."
    },
    {
      q: "What counts as a 'GTM Task'?",
      a: "Anything related to your paid acquisition engine. This includes: setting up new campaigns, writing ad copy, designing ad creative, optimizing landing pages, setting up tracking (GTM/GA4), running A/B tests, and weekly reporting."
    },
    {
      q: "Can I really pause anytime?",
      a: "Yes. We understand that startups have cycles. If you need to pause your GTM efforts for a month while you focus on a product launch, just hit pause. We'll save your board and you can resume whenever you're ready."
    },
    {
      q: "Do you handle the ad spend?",
      a: "No. You pay the ad platforms (Google, Meta, etc.) directly. This ensures you have total transparency and control over your budget. We only charge for our expertise and execution."
    },
    {
      q: "What if I'm not happy with the results?",
      a: "We earn your business every single month. If you're not seeing the value, you can cancel at any time. No long-term commitments, no hard feelings."
    },
    {
      q: "Do you provide the creative assets?",
      a: "Yes! Our Full Scale plan includes creative testing and iteration. We design the static ads and write the copy. For video/UGC, we'll provide the briefs and strategy, and can help you source creators."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-white mb-12 tracking-tight text-center"
        >
          Frequently Asked <br />
          <span className="text-accent">Questions.</span>
        </motion.h1>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-20 glass-card p-10 rounded-3xl text-center border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8">We're happy to chat. Book a 15-minute intro call to see if we're a fit.</p>
          <button className="bg-accent text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-accent text-black' : 'bg-white/5 text-gray-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
