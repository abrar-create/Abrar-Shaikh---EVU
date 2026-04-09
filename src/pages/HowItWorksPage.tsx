import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Layout, Zap, Users, MessageSquare } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent mb-8 tracking-[0.3em] uppercase">
            The Workflow
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-[-0.05em] leading-[0.9]">
            The "Board" Model. <br />
            <span className="text-gray-600">How we actually work.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl font-medium tracking-tight leading-relaxed">
            Most agencies hide behind account managers and monthly reports. We don't. We've productized the entire GTM experience to focus on one thing: <span className="text-white font-bold">Execution.</span>
          </p>
        </motion.div>

        <div className="space-y-32">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                  <Layout className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tight">01. Your Dedicated GTM Board</h2>
              </div>
              <p className="text-gray-500 text-xl font-medium tracking-tight leading-relaxed mb-10">
                The moment you subscribe, we spin up a dedicated Trello or Notion board (your choice). This is our shared brain. No more digging through email threads or Slack pings. Every task, every creative asset, and every campaign update lives here.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Add unlimited tasks to your queue',
                  'Real-time status tracking',
                  'Direct feedback on creative assets',
                  'Centralized asset library'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 font-bold tracking-tight bg-white/[0.02] p-4 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-4 rounded-[2.5rem] relative aspect-video flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-accent/5 blur-[100px]" />
               <div className="relative z-10 text-center">
                 <div className="w-20 h-20 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center mx-auto mb-4">
                   <Layout className="w-10 h-10 text-gray-500" />
                 </div>
                 <p className="text-gray-600 font-black uppercase tracking-widest text-xs">Board Preview</p>
               </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-white/[0.02] border border-white/10 p-4 rounded-[2.5rem] relative aspect-video flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-accent/5 blur-[100px]" />
               <div className="relative z-10 text-center">
                 <div className="w-20 h-20 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center mx-auto mb-4">
                   <Zap className="w-10 h-10 text-gray-500" />
                 </div>
                 <p className="text-gray-600 font-black uppercase tracking-widest text-xs">Execution Engine</p>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tight">02. Daily Execution & Iteration</h2>
              </div>
              <p className="text-gray-500 text-xl font-medium tracking-tight leading-relaxed mb-10">
                We don't wait for "weekly syncs" to make changes. Our senior squad works on your board daily. If we see an ad underperforming, we kill it and launch a new variant immediately. We move at the speed of your startup.
              </p>
              <div className="bg-accent/5 border border-accent/20 p-8 rounded-3xl">
                <h4 className="text-accent font-black mb-4 tracking-tight uppercase text-sm">Our 48-Hour Promise</h4>
                <p className="text-gray-400 font-medium tracking-tight leading-relaxed m-0">
                  From the moment you move a task to "Active," we aim to have it executed within 48 hours. Whether it's a new campaign launch, a landing page tweak, or a fresh set of ad copy.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tight">03. Async Communication</h2>
            </div>
            <p className="text-gray-500 text-xl font-medium tracking-tight leading-relaxed">
              We hate meetings as much as you do. Most of our communication happens directly on the task board. Need a change? Leave a comment. Want to review a report? It's linked in the task. We save the calls for high-level strategy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
