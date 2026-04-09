import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Layout, Zap, Users, MessageSquare } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
        >
          The "Board" Model: <br />
          <span className="text-accent">How we actually work.</span>
        </motion.h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            Most agencies hide behind account managers and monthly reports. We don't. We've productized the entire GTM experience to focus on one thing: <strong>Execution.</strong>
          </p>

          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Layout className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">1. Your Dedicated GTM Board</h2>
              </div>
              <p className="text-gray-400 text-lg">
                The moment you subscribe, we spin up a dedicated Trello or Notion board (your choice). This is our shared brain. No more digging through email threads or Slack pings. Every task, every creative asset, and every campaign update lives here.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 list-none p-0">
                {[
                  'Add unlimited tasks to your queue',
                  'Real-time status tracking',
                  'Direct feedback on creative assets',
                  'Centralized asset library'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">2. Daily Execution & Iteration</h2>
              </div>
              <p className="text-gray-400 text-lg">
                We don't wait for "weekly syncs" to make changes. Our senior squad works on your board daily. If we see an ad underperforming, we kill it and launch a new variant immediately. We move at the speed of your startup.
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mt-8">
                <h4 className="text-white font-bold mb-4">Our 48-Hour Promise</h4>
                <p className="text-gray-400 m-0">
                  From the moment you move a task to "Active," we aim to have it executed within 48 hours. Whether it's a new campaign launch, a landing page tweak, or a fresh set of ad copy.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">3. Async Communication</h2>
              </div>
              <p className="text-gray-400 text-lg">
                We hate meetings as much as you do. Most of our communication happens directly on the task board. Need a change? Leave a comment. Want to review a report? It's linked in the task. We save the calls for high-level strategy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
