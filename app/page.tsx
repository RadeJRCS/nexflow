'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { icon: '⚡', title: 'Instant setup', desc: 'From signup to first project in 90 seconds. No credit card. No onboarding call.' },
  { icon: '🧠', title: 'AI task breakdown', desc: 'Paste a goal, get a full task list with estimates. Works for any type of project.' },
  { icon: '🔗', title: 'Works with your stack', desc: 'Native integrations with GitHub, Slack, Figma, Linear, Notion, and 40+ more.' },
  { icon: '📊', title: 'Real-time progress', desc: 'Every team member sees live status. No more "where are we on this?" Slack messages.' },
  { icon: '🎯', title: 'Smart deadlines', desc: 'AI analyzes your team velocity and warns you before you miss a deadline, not after.' },
  { icon: '🔒', title: 'Enterprise-grade security', desc: 'SOC 2 Type II, GDPR compliant, SSO, audit logs. Security your CTO will approve.' },
]

const testimonials = [
  { q: 'We cut our weekly standup from 45 minutes to 8. Nexflow just shows everyone what to do next.', name: 'Sara K.', role: 'Engineering Lead, Deepstack', init: 'SK' },
  { q: 'Every project tool I tried felt like filing taxes. Nexflow feels like texting a smart colleague.', name: 'Marco T.', role: 'Founder, Orbit Studio', init: 'MT' },
  { q: "Our remote team spans 4 time zones. Nexflow is the only reason we don't constantly miss each other.", name: 'Anika R.', role: 'Head of Product, Waveline', init: 'AR' },
]

const logos = ['Deepstack', 'Orbit Studio', 'Waveline', 'Crestfield', 'Luminary', 'Northbay Labs']

export default function HomePage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* HERO */}
      <section className="bg-white py-20 px-6 border-b border-surface-3">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-light border border-brand/20 rounded-full px-4 py-1.5 text-[12px] font-medium text-brand mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Now in public beta — free for all teams under 10
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-5">
            Project management<br />
            <span className="text-brand">that thinks with you.</span>
          </h1>
          <p className="text-[17px] text-ink-2 max-w-lg mx-auto mb-10 leading-relaxed font-light">
            Nexflow combines AI task intelligence with dead-simple collaboration. Your team ships faster, your projects stay on track.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-5">
            <Link href="/signup"
              data-vb-event="conversion" data-vb-type="hero_trial_cta"
              className="bg-brand text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-brand-dark transition-colors">
              Start free — no card needed
            </Link>
            <Link href="/dashboard-preview"
              className="bg-white text-ink border border-surface-3 px-7 py-3.5 rounded-lg text-[15px] hover:border-ink-3 transition-colors">
              See dashboard
            </Link>
          </div>
          <p className="text-[13px] text-ink-3">Free for teams up to 10 · 14-day trial on paid · Cancel anytime</p>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="py-8 px-6 border-b border-surface-3 bg-surface-2">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] text-ink-3 mb-5 tracking-widest uppercase">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {logos.map(l => (
              <span key={l} className="text-[13px] font-semibold text-ink-3">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3">
              Everything your team needs.<br />Nothing you don't.
            </h2>
            <p className="text-[16px] text-ink-2 font-light">Built for speed, designed for humans.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title} className="bg-white border border-surface-3 rounded-xl p-6 hover:-translate-y-0.5 transition-transform">
                <div className="text-2xl mb-3">{f.icon}</div>
                <div className="font-semibold text-[15px] text-ink mb-2">{f.title}</div>
                <div className="text-[13px] text-ink-2 leading-relaxed font-light">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-surface-2 border-y border-surface-3">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight mb-3">Up and running in 3 steps.</h2>
          <p className="text-[16px] text-ink-2 font-light">No setup calls. No implementation fees. No excuses.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { n: '01', t: 'Create your workspace', d: 'Sign up, name your workspace, invite your team. Takes 90 seconds. Seriously.' },
            { n: '02', t: 'Add your first project', d: 'Type a goal or paste a brief. Our AI breaks it into tasks with estimates automatically.' },
            { n: '03', t: 'Ship together', d: 'Assign, comment, track. Everyone knows what to do next. Deadlines stop sneaking up on you.' },
          ].map(s => (
            <div key={s.n} className="bg-white border border-surface-3 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand" />
              <div className="text-[10px] font-semibold text-ink-3 tracking-widest mb-3 uppercase">{s.n}</div>
              <div className="font-semibold text-[15px] text-ink mb-2">{s.t}</div>
              <div className="text-[13px] text-ink-2 leading-relaxed font-light">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight text-center mb-12">
            Teams that switched, stayed.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white border border-surface-3 rounded-xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-brand text-sm">★</span>)}
                </div>
                <p className="text-[14px] text-ink leading-relaxed mb-5 italic">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center text-[12px] font-semibold text-brand flex-shrink-0">
                    {t.init}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-ink">{t.name}</div>
                    <div className="text-[11px] text-ink-3">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 px-6 bg-surface-2 border-t border-surface-3">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight mb-3">Simple pricing.</h2>
          <p className="text-[16px] text-ink-2 font-light mb-10">Start free. Upgrade when your team grows.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { n: 'Free', p: '$0', s: '/forever', f: ['Up to 10 members', '5 active projects', 'AI task breakdown', 'Basic integrations'] },
              { n: 'Team', p: '$12', s: '/user/mo', f: ['Unlimited members', 'Unlimited projects', 'Advanced AI', 'All integrations', 'Priority support'], pop: true },
              { n: 'Enterprise', p: 'Custom', s: '', f: ['Everything in Team', 'SSO + SAML', 'Audit logs', 'SLA + dedicated CSM'] },
            ].map(plan => (
              <div key={plan.n} className={`bg-white border rounded-xl p-6 text-left ${plan.pop ? 'border-2 border-brand' : 'border-surface-3'}`}>
                {plan.pop && <div className="text-[9px] font-semibold text-brand tracking-widest uppercase mb-3">Most popular</div>}
                <div className="font-semibold text-[16px] text-ink mb-1">{plan.n}</div>
                <div className="text-[28px] font-display font-bold text-brand leading-none mb-0.5">{plan.p}</div>
                <div className="text-[12px] text-ink-3 mb-4">{plan.s}</div>
                {plan.f.map(f => <div key={f} className="text-[12px] text-ink-2 mb-1.5 flex gap-1.5"><span className="text-brand">✓</span>{f}</div>)}
                <Link href="/signup"
                  data-vb-event="conversion" data-vb-type={`pricing_preview_${plan.n.toLowerCase()}`}
                  className={`mt-4 block w-full py-2 rounded-lg text-[13px] font-semibold text-center transition-colors ${plan.pop ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-surface-2 text-ink hover:bg-surface-3'}`}>
                  {plan.n === 'Enterprise' ? 'Talk to us' : 'Get started'}
                </Link>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="text-[13px] text-brand font-medium hover:underline">
            See full pricing details →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-brand">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Your team ships faster starting today.
          </h2>
          <p className="text-white/70 text-[16px] mb-8 font-light">
            Free for teams up to 10. No credit card. No setup call.
          </p>
          <div className="flex gap-2 max-w-md mx-auto flex-wrap justify-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="work@email.com"
              className="flex-1 min-w-[200px] bg-white/15 border border-white/25 rounded-lg px-4 py-2.5 text-white text-[14px] outline-none placeholder:text-white/40"
            />
            <Link href="/signup"
              data-vb-event="conversion" data-vb-type="footer_cta_email"
              className="bg-white text-brand px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-white/90 transition-colors whitespace-nowrap">
              Start free
            </Link>
          </div>
          <p className="text-white/40 text-[12px] mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
