'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-surface-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-[20px] font-bold text-ink tracking-tight">
          nex<span className="text-brand">flow</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: '/', label: 'Home' },
            { href: '/features', label: 'Features' },
            { href: '/pricing', label: 'Pricing' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3 py-1.5 rounded-md text-[13px] transition-all ${path === l.href ? 'bg-brand-light text-brand font-medium' : 'text-ink-2 hover:text-ink hover:bg-surface-2'}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/signup" className="text-[13px] text-ink-2 hover:text-ink transition-colors px-3 py-1.5">
            Log in
          </Link>
          <Link href="/signup"
            data-vb-event="conversion" data-vb-type="trial_cta_nav"
            className="bg-brand text-white px-4 py-1.5 rounded-md text-[13px] font-semibold hover:bg-brand-dark transition-colors">
            Start free trial
          </Link>
        </div>
        <button className="md:hidden p-1 text-ink-2" onClick={() => setOpen(!open)}>
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-surface-3 px-6 py-4">
          {[{ href: '/', label: 'Home' }, { href: '/features', label: 'Features' }, { href: '/pricing', label: 'Pricing' }].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-[14px] text-ink-2 hover:text-ink border-b border-surface-2">{l.label}</Link>
          ))}
          <Link href="/signup" onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-brand text-white px-4 py-2.5 rounded-md text-[13px] font-semibold">
            Start free trial
          </Link>
        </div>
      )}
    </nav>
  )
}
