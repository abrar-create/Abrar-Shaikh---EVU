import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: "How many tasks can I add to my board?",
      a: "As many as you want! We work through your queue one task at a time (or more depending on your plan). Once a task is finished, we move straight to the next one. You can prioritize and re-order your queue at any time via your dedicated dashboard."
    },
    {
      q: "What counts as a 'GTM Task'?",
      a: "Anything related to your paid acquisition engine. This includes: setting up new campaigns, writing ad copy, designing ad creative, optimizing landing pages, setting up tracking (GTM/GA4/Pixels), running A/B tests, and technical reporting. If it helps you scale, we do it."
    },
    {
      q: "Can I really pause anytime?",
      a: "Yes. We understand that startups have cycles. If you need to pause your GTM efforts for a month while you focus on a product launch or fundraising, just hit pause. We'll save your board and you can resume whenever you're ready. No questions asked."
    },
    {
      q: "Do you handle the ad spend?",
      a: "No. You pay the ad platforms (Google, Meta, LinkedIn, etc.) directly. This ensures you have total transparency and control over your budget. We only charge for our expertise and execution. We can help you set up and manage these billing accounts if needed."
    },
    {
      q: "What if I'm not happy with the results?",
      a: "We earn your business every single month. If you're not seeing the value, you can cancel at any time. No long-term commitments, no hard feelings. We'll even help you transition your accounts to a new team if you decide to move on."
    },
    {
      q: "Do you provide the creative assets?",
      a: "Yes! Our Full Scale plan includes creative testing and iteration. We design the static ads and write the copy. For video/UGC, we'll provide the briefs, strategy, and scripts, and can help you source and manage creators."
    },
    {
      q: "How quickly can we get started?",
      a: "Once you subscribe, you'll receive an onboarding link immediately. After you complete the onboarding (usually takes 15 mins), we'll have your first campaigns live within 48 hours. We move fast."
    }
  ];

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent mb-8 tracking-[0.3em] uppercase">
            Support Center
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-[-0.05em] leading-[0.9]">
            Frequently Asked <br />
            <span className="text-gray-600">Questions.</span>
          </h1>
        </motion.div>

        <div className="space-y-4 mb-32">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="bg-white/[0.02] border border-white/10 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white mb-6 tracking-tight">Still have questions?</h3>
            <p className="text-gray-500 mb-12 text-xl font-medium tracking-tight max-w-2xl mx-auto">
              We're happy to chat. Book a 15-minute intro call with our founder to see if we're a fit for your growth stage.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-accent transition-all hover:shadow-[0_0_50px_rgba(0,255,153,0.3)] active:scale-95">
              Book a Call
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-accent/5 blur-[100px] -z-10" />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-black text-white tracking-tight group-hover:text-accent transition-colors">{question}</span>
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-accent text-black rotate-180" : "bg-white/5 text-gray-500"
        )}>
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
            <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed tracking-tight text-lg border-t border-white/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
