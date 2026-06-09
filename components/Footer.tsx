import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/40 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-display text-[18px] font-bold text-white/90 mb-2">
              nex<span className="text-brand-mid">flow</span>
            </div>
            <p className="text-[12px] leading-relaxed">Project management that thinks with you.</p>
          </div>
          {[
            { t: 'Product', links: [{ href: '/features', l: 'Features' }, { href: '/pricing', l: 'Pricing' }, { href: '/dashboard-preview', l: 'Dashboard' }, { href: '/signup', l: 'Changelog' }] },
            { t: 'Company', links: [{ href: '/', l: 'About' }, { href: '/', l: 'Blog' }, { href: '/', l: 'Careers' }, { href: '/', l: 'Contact' }] },
            { t: 'Legal', links: [{ href: '/', l: 'Privacy' }, { href: '/', l: 'Terms' }, { href: '/', l: 'Security' }, { href: '/', l: 'Status' }] },
          ].map(col => (
            <div key={col.t}>
              <div className="text-[11px] tracking-widest text-white/50 mb-3 uppercase">{col.t}</div>
              {col.links.map(lnk => (
                <Link key={lnk.l} href={lnk.href} className="block text-[12px] text-white/35 hover:text-white/60 mb-1.5 transition-colors">{lnk.l}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[11px]">2026 Nexflow Inc. All rights reserved.</div>
          <div className="text-[11px]">Demo site for VeroBehavior integration testing</div>
        </div>
      </div>
    </footer>
  )
}
