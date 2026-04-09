export default function PrivacyPolicyPage() {
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
          <h1 className="text-6xl font-black text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 font-medium">Last updated: April 9, 2026</p>
        </motion.div>

        <div className="bg-white/[0.02] border border-white/10 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-xl prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">1. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              We collect information you provide directly to us when you subscribe to our services, communicate with us on your GTM board, or otherwise interact with us. This may include your name, email address, company name, and payment information (processed securely via Stripe).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 font-medium tracking-tight">
              <li>Provide, maintain, and improve our GTM services;</li>
              <li>Process transactions and send related information, including confirmations and receipts;</li>
              <li>Communicate with you about tasks, reports, and strategy;</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">3. Data Sharing and Disclosure</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf (e.g., Stripe for payment processing, Trello for task management).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">4. Your Data, Your Ownership</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              You maintain full ownership of all data, accounts, and assets created or managed by g2m.xyz. We act as a service provider and do not claim any ownership over your intellectual property or marketing data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">5. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed font-medium tracking-tight">
              If you have any questions about this Privacy Policy, please contact us at privacy@g2m.xyz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
