import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const sections = [
  {
    tag: 'AI Intelligence',
    title: 'AI that actually understands your projects.',
    desc: 'Not just autocomplete. Nexflow AI reads your project context and makes decisions your team would make.',
    items: [
      { t: 'Smart task breakdown', d: 'Paste a project brief or goal. AI generates tasks, assigns estimates, and flags dependencies automatically.' },
      { t: 'Deadline prediction', d: 'Analyzes team velocity and warns you 7 days before a missed deadline. Not after.' },
      { t: 'Blocker detection', d: 'Spots tasks with no recent activity and surfaces them in your daily digest before they become fires.' },
      { t: 'Natural language commands', d: 'Type "move all design tasks to next sprint" or "who is most overloaded this week" and get instant results.' },
    ],
    color: 'bg-brand-light border-brand/20',
    accent: 'text-brand',
  },
  {
    tag: 'Collaboration',
    title: 'Everyone knows exactly what to do next.',
    desc: 'No more "which Slack message was the final decision" moments. Context lives with the work.',
    items: [
      { t: 'Threaded task comments', d: 'Every discussion lives on the task. No scattered Slack threads. No lost context.' },
      { t: 'Async video updates', d: 'Record a 2-minute Loom-style update on any task. Perfect for remote and async teams.' },
      { t: 'Guest access', d: 'Invite clients or stakeholders to specific projects. They see only what you want them to see.' },
      { t: 'Activity feed', d: 'Real-time feed of everything that changed. Filter by person, project, or type.' },
    ],
    color: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-600',
  },
  {
    tag: 'Integrations',
    title: 'Works where your team already works.',
    desc: '40+ integrations that sync both ways. When code ships, the task updates. When Figma is done, the task updates.',
    items: [
      { t: 'GitHub / GitLab sync', d: 'PRs and commits automatically close tasks. Branch names link to tasks. No manual updates.' },
      { t: 'Slack notifications', d: 'Get notified where you already work. Daily digest, blocker alerts, mention notifications.' },
      { t: 'Figma, Notion, Linear', d: 'Embed Figma files, pull Notion docs, sync Linear issues. Your tools, connected.' },
      { t: 'Zapier + API', d: '4,000+ apps via Zapier. Full REST API for custom integrations. Webhooks for real-time events.' },
    ],
    color: 'bg-emerald-50 border-emerald-200',
    accent: 'text-emerald-700',
  },
  {
    tag: 'Analytics',
    title: 'Know where time goes. Fix what slows you down.',
    desc: 'Reports that answer real questions, not just vanity metrics.',
    items: [
      { t: 'Velocity tracking', d: 'See how fast your team actually moves, by person, project, and task type. Spot patterns.' },
      { t: 'Workload view', d: 'Visual breakdown of who has too much, who has bandwidth, across the whole team.' },
      { t: 'Project health score', d: 'Combined metric of deadline adherence, blocker rate, and velocity. One number to watch.' },
      { t: 'Custom reports', d: 'Build any report. Export to CSV, PDF, or share a live link with stakeholders.' },
    ],
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-700',
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="bg-white py-16 px-6 text-center border-b border-surface-3">
        <div className="text-[11px] font-semibold text-brand tracking-widest uppercase mb-3">Features</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight mb-3">
          Built for teams that<br />ship without drama.
        </h1>
        <p className="text-[16px] text-ink-2 font-light max-w-md mx-auto mb-8">
          Every feature exists because a real team had a real problem. Nothing bloated. Nothing missing.
        </p>
        <Link href="/signup"
          data-vb-event="conversion" data-vb-type="features_hero_cta"
          className="inline-block bg-brand text-white px-7 py-3 rounded-lg text-[14px] font-semibold hover:bg-brand-dark transition-colors">
          Try all features free
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 flex-1 space-y-16">
        {sections.map((sec, idx) => (
          <div key={sec.tag} className={`grid md:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div>
              <span className={`text-[11px] font-semibold tracking-widest uppercase ${sec.accent}`}>{sec.tag}</span>
              <h2 className="font-display text-2xl font-bold text-ink mt-2 mb-3 tracking-tight">{sec.title}</h2>
              <p className="text-[15px] text-ink-2 font-light leading-relaxed mb-6">{sec.desc}</p>
              <Link href="/signup"
                data-vb-event="conversion" data-vb-type={`features_${sec.tag.toLowerCase().replace(' ', '_')}_cta`}
                className="inline-block text-[13px] font-semibold text-brand hover:underline">
                Start free trial →
              </Link>
            </div>
            <div className={`border rounded-2xl p-6 ${sec.color} space-y-4`}>
              {sec.items.map(item => (
                <div key={item.t}>
                  <div className="font-semibold text-[14px] text-ink mb-1">{item.t}</div>
                  <div className="text-[13px] text-ink-2 font-light leading-relaxed">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-brand py-16 px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-3">Ready to try everything?</h2>
        <p className="text-white/70 mb-7 font-light">Free for teams up to 10. No credit card required.</p>
        <Link href="/signup"
          data-vb-event="conversion" data-vb-type="features_bottom_cta"
          className="inline-block bg-white text-brand px-8 py-3.5 rounded-lg text-[14px] font-bold hover:bg-white/90 transition-colors">
          Get started free
        </Link>
      </div>

      <Footer />
    </div>
  )
}
