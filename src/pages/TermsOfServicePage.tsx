export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl font-black text-white mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 font-medium">Last updated: April 9, 2026</p>
        </motion.div>

        <div className="bg-white/[0.02] border border-white/10 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-xl prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              By subscribing to g2m.xyz, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">2. Description of Service</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              g2m.xyz provides productized Go-To-Market and paid media management services. Services are provided on a subscription basis as described on our pricing page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">3. Subscriptions and Payments</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              Subscriptions are billed monthly in advance. You may pause or cancel your subscription at any time through your billing portal. No refunds are provided for partial months of service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">4. Client Responsibilities</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              Clients are responsible for providing access to necessary ad accounts and platforms. Clients are responsible for all ad spend paid directly to third-party platforms (e.g., Google, Meta).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">5. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              g2m.xyz is not liable for any indirect, incidental, or consequential damages arising out of the use of our services. While we strive for excellence, we do not guarantee specific financial results or ROI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">6. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              These terms are governed by the laws of the jurisdiction in which g2m.xyz operates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
