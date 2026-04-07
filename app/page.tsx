"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentType, MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { Layers, Rocket, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import Background3D from "@/components/Background3D";

type Card = {
  title: string;
  detail: string;
  className: string;
};

const featureCards: Card[] = [
  {
    title: "Autonomous Paid Ops",
    detail: "Always-on campaign management and weekly testing loops that ship continuously.",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Signal-Driven Creative",
    detail: "Creative decisions informed by real-time CAC, CTR, CVR, and ROAS trajectories.",
    className: "md:col-span-2",
  },
  {
    title: "Dedicated Growth Squad",
    detail: "Media buyer, strategist, and analyst execution without internal hiring complexity.",
    className: "md:col-span-2",
  },
  {
    title: "48hr Launch Velocity",
    detail: "From request to deployment in 48 hours through a Trello-first workflow.",
    className: "md:col-span-4",
  },
];

const pricingCards: Card[] = [
  {
    title: "Launch — $2,500/mo",
    detail: "For teams building predictable paid demand with a lean growth engine.",
    className: "md:col-span-3",
  },
  {
    title: "Scale — $5,000/mo",
    detail: "For teams maximizing channel throughput and compounding acquisition economics.",
    className: "md:col-span-3",
  },
];

function TiltGlassCard({
  title,
  detail,
  className,
  icon: Icon,
}: Card & { icon: ComponentType<{ className?: string }> }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl ${className} pointer-events-auto`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl border border-[#0070f3]/45 shadow-[0_0_45px_rgba(0,112,243,0.22)]" />
      </div>
      <div className="mb-5 inline-flex rounded-xl border border-white/15 bg-white/10 p-3">
        <Icon className="h-5 w-5 text-[#4ea0ff]" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-neutral-400">{detail}</p>
    </motion.article>
  );
}

function MagneticButton({ children }: { children: ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 240, damping: 16 });
  const y = useSpring(my, { stiffness: 240, damping: 16 });

  const handleMove = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left - rect.width / 2;
    const py = event.clientY - rect.top - rect.height / 2;
    mx.set(px * 0.2);
    my.set(py * 0.2);
  };

  return (
    <motion.button
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ x, y }}
      whileTap={{ scale: 0.98 }}
      className="pointer-events-auto min-h-11 rounded-xl bg-white px-7 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.3)] transition hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
    >
      {children}
    </motion.button>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Background3D />
      <div className="pointer-events-none relative z-10">
        <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="text-sm font-semibold tracking-[0.2em] text-white">g2m.xyz</div>
          <MagneticButton>Start Scaling</MagneticButton>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-20 pt-8 md:gap-16 md:pt-12">
          <section className="space-y-8">
            <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Productized GTM + Paid Media
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-8xl">
              Go-To-Market, Weaponized.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-neutral-400 md:text-xl">
              A dedicated growth squad to scale your Paid Media. Zero headcount. Infinite ROI.
            </p>
            <MagneticButton>Start Scaling</MagneticButton>
          </section>

          <section className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6">
            <TiltGlassCard {...featureCards[0]} icon={Target} />
            <TiltGlassCard {...featureCards[1]} icon={Sparkles} />
            <TiltGlassCard {...featureCards[2]} icon={Layers} />
            <TiltGlassCard {...featureCards[3]} icon={Zap} />
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Pricing</h2>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-300">
                Pause or Cancel Anytime
              </span>
            </div>
            <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-6">
              <TiltGlassCard {...pricingCards[0]} icon={Rocket} />
              <TiltGlassCard {...pricingCards[1]} icon={TrendingUp} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
