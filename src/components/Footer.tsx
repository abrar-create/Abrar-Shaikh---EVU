import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(0,255,153,0.3)] group-hover:scale-110 transition-transform">
                g
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">g2m.xyz</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-10 text-lg">
              We're a productized GTM engine for founders who value speed over bureaucracy. Elite execution, senior talent, flat monthly fee.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Platform</h4>
            <ul className="space-y-4 p-0 list-none">
              {[
                { name: 'How it Works', href: '/how-it-works' },
                { name: 'The Edge', href: '/the-edge' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'FAQ', href: '/faq' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-500 hover:text-white transition-colors text-base font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Legal</h4>
            <ul className="space-y-4 p-0 list-none">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-500 hover:text-white transition-colors text-base font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-600 font-medium">
            © 2026 g2m.xyz. Built for founders, by founders.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,255,153,0.5)]" />
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
