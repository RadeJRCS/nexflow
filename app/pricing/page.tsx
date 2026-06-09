'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const plans = [
  {
    n: 'Free', p: '$0', s: 'forever', badge: null,
    desc: 'Perfect for small teams and side projects.',
    features: ['Up to 10 team members', '5 active projects', 'AI task breakdown (5/month)', 'Basic integrations (GitHub, Slack)', '1GB file storage', 'Community support'],
    cta: 'Get started free', style: 'outline' as const,
  },
  {
    n: 'Team', p: '$12', s: 'per user / month', badge: 'POPULAR',
    desc: 'For growing teams that ship fast.',
    features: ['Unlimited team members', 'Unlimited projects', 'Unlimited AI task breakdown', 'All 40+ integrations', '50GB file storage', 'Advanced analytics', 'Priority support'],
    cta: 'Start 14-day trial', style: 'primary' as const,
  },
  {
    n: 'Business', p: '$28', s: 'per user / month', badge: null,
    desc: 'For teams that need more control.',
    features: ['Everything in Team', 'Custom workflows', 'Time tracking + invoicing', 'Client portals', '200GB file storage', 'Advanced permissions', 'Dedicated account manager'],
    cta: 'Start 14-day trial', style: 'outline' as const,
  },
  {
    n: 'Enterprise', p: 'Custom', s: '', badge: null,
    desc: 'For large organizations with complex needs.',
    features: ['Everything in Business', 'SSO / SAML', 'Audit logs', 'On-premise option', 'Custom SLA', 'Security review', 'Dedicated CSM + SRE'],
    cta: 'Talk to sales', style: 'outline' as const,
  },
]

const faqs = [
  { q: 'Can I change plans later?', a: 'Yes. Upgrade or downgrade at any time. Changes take effect immediately on upgrade, and at the next billing cycle on downgrade.' },
  { q: 'What counts as a user?', a: 'Anyone with an account in your workspace. Guests (clients, stakeholders) with view-only access are free and do not count toward your user count.' },
  { q: 'Is the 14-day trial really free?', a: 'Yes. No credit card required to start. You will only be asked for payment details at the end of the trial if you choose to continue.' },
  { q: 'What happens to my data if I cancel?', a: 'Your data stays available in read-only mode for 30 days after cancellation. You can export everything before that window closes.' },
  { q: 'Do you offer discounts for startups or nonprofits?', a: 'Yes. We offer 50% off for qualifying startups (under 2 years, under $2M raised) and nonprofits. Contact us to apply.' },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="bg-white pt-16 pb-6 px-6 text-center border-b border-surface-3">
        <div className="text-[11px] font-semibold text-brand tracking-widest uppercase mb-3">Pricing</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight mb-3">
          Simple pricing.<br />No surprises.
        </h1>
        <p className="text-[16px] text-ink-2 font-light max-w-md mx-auto mb-6">
          Start free. Scale as your team grows. Cancel any time.
        </p>
        <div className="inline-flex items-center gap-1 bg-surface-2 border border-surface-3 rounded-full p-1">
          <button onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-[13px] transition-all ${!annual ? 'bg-white text-ink font-medium shadow-sm' : 'text-ink-2'}`}>
            Monthly
          </button>
          <button onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-[13px] transition-all ${annual ? 'bg-white text-ink font-medium shadow-sm' : 'text-ink-2'}`}>
            Annual <span className="text-brand text-[11px] font-semibold">-20%</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 flex-1">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {plans.map(plan => {
            const price = annual && plan.p !== '$0' && plan.p !== 'Custom'
              ? '$' + Math.round(parseInt(plan.p.replace('$', '')) * 0.8)
              : plan.p
            return (
              <div key={plan.n} className={`bg-white border rounded-xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform ${plan.badge ? 'border-2 border-brand' : 'border-surface-3'}`}>
                {plan.badge && <span className="text-[9px] font-semibold text-brand tracking-widest uppercase bg-brand-light px-2 py-1 rounded mb-3 self-start">{plan.badge}</span>}
                <div className="font-semibold text-[18px] text-ink mb-1">{plan.n}</div>
                <div className="text-[30px] font-display font-bold text-brand leading-none mb-0.5">{price}</div>
                {plan.s && <div className="text-[11px] text-ink-3 mb-3">{plan.s}{annual && plan.p !== '$0' ? ', billed annually' : ''}</div>}
                <p className="text-[12px] text-ink-2 mb-4 font-light">{plan.desc}</p>
                <div className="flex-1 flex flex-col gap-2 mb-5">
                  {plan.features.map(f => (
                    <div key={f} className="flex gap-2 text-[12px] text-ink-2">
                      <span className="text-brand flex-shrink-0">✓</span>{f}
                    </div>
                  ))}
                </div>
                <Link href="/signup"
                  data-vb-event="conversion" data-vb-type={`pricing_${plan.n.toLowerCase()}`}
                  className={`block w-full py-2.5 rounded-lg text-[13px] font-semibold text-center transition-colors ${plan.style === 'primary' ? 'bg-brand text-white hover:bg-brand-dark' : 'border border-surface-3 text-ink-2 hover:border-ink-3'}`}>
                  {plan.cta}
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center text-[12px] text-ink-3 mb-12">
          All plans include: GDPR compliant, SOC 2 in progress, 99.9% uptime SLA, daily backups
        </div>

        <div className="bg-surface-2 border border-surface-3 rounded-2xl p-8 mb-8">
          <h2 className="font-display text-2xl font-bold text-ink mb-6 text-center">Frequently asked questions</h2>
          <div className="max-w-2xl mx-auto space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-surface-3 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center text-[14px] font-medium text-ink hover:bg-surface-2 transition-colors">
                  {faq.q}
                  <span className={`text-ink-3 text-[12px] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-[13px] text-ink-2 leading-relaxed border-t border-surface-2 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2">Not sure which plan?</h3>
          <p className="text-white/70 text-[14px] mb-6 font-light">Start free and we will help you find the right plan as you grow.</p>
          <Link href="/signup"
            data-vb-event="conversion" data-vb-type="pricing_bottom_cta"
            className="inline-block bg-white text-brand px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-white/90 transition-colors">
            Start free today
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
