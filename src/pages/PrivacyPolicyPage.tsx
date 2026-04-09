export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 prose prose-invert">
        <h1 className="text-white">Privacy Policy</h1>
        <p className="text-gray-400">Last Updated: April 7, 2026</p>
        
        <h2 className="text-white">1. Information We Collect</h2>
        <p className="text-gray-400">
          We collect information you provide directly to us when you subscribe to our services, communicate with us on your GTM board, or otherwise interact with us. This may include your name, email address, company name, and payment information (processed securely via Stripe).
        </p>

        <h2 className="text-white">2. How We Use Your Information</h2>
        <p className="text-gray-400">
          We use the information we collect to:
        </p>
        <ul className="text-gray-400">
          <li>Provide, maintain, and improve our GTM services;</li>
          <li>Process transactions and send related information, including confirmations and receipts;</li>
          <li>Communicate with you about tasks, reports, and strategy;</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
        </ul>

        <h2 className="text-white">3. Data Sharing and Disclosure</h2>
        <p className="text-gray-400">
          We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf (e.g., Stripe for payment processing, Trello for task management).
        </p>

        <h2 className="text-white">4. Your Data, Your Ownership</h2>
        <p className="text-gray-400">
          You maintain full ownership of all data, accounts, and assets created or managed by g2m.xyz. We act as a service provider and do not claim any ownership over your intellectual property or marketing data.
        </p>

        <h2 className="text-white">5. Contact Us</h2>
        <p className="text-gray-400">
          If you have any questions about this Privacy Policy, please contact us at privacy@g2m.xyz.
        </p>
      </div>
    </div>
  );
}
