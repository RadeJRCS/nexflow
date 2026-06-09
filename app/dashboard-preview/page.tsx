'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const tasks = [
  { id: 1, title: 'Design new onboarding flow', project: 'Product Q3', assignee: 'SK', status: 'in_progress', priority: 'high', due: 'Jun 12' },
  { id: 2, title: 'Fix authentication bug on mobile', project: 'Engineering', assignee: 'MT', status: 'in_progress', priority: 'urgent', due: 'Jun 10' },
  { id: 3, title: 'Write API documentation', project: 'Engineering', assignee: 'AR', status: 'todo', priority: 'medium', due: 'Jun 18' },
  { id: 4, title: 'Prepare Q3 investor update', project: 'Operations', assignee: 'SK', status: 'todo', priority: 'high', due: 'Jun 15' },
  { id: 5, title: 'Review landing page copy', project: 'Marketing', assignee: 'MT', status: 'done', priority: 'low', due: 'Jun 8' },
  { id: 6, title: 'Set up error monitoring', project: 'Engineering', assignee: 'AR', status: 'done', priority: 'medium', due: 'Jun 7' },
]

const statusStyle: Record<string, string> = {
  in_progress: 'bg-blue-50 text-blue-700',
  todo: 'bg-surface-2 text-ink-2',
  done: 'bg-green-50 text-green-700',
}

const priorityStyle: Record<string, string> = {
  urgent: 'bg-red-50 text-red-600',
  high: 'bg-orange-50 text-orange-600',
  medium: 'bg-yellow-50 text-yellow-700',
  low: 'bg-surface-2 text-ink-3',
}

export default function DashboardPreviewPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter)

  return (
    <div className="min-h-screen flex flex-col bg-surface-2">
      <Nav />

      <div className="border-b border-surface-3 bg-white px-6 py-8">
        <div className="max-w-5xl mx-auto flex justify-between items-end flex-wrap gap-4">
          <div>
            <div className="text-[11px] font-semibold text-ink-3 tracking-widest uppercase mb-2">Preview</div>
            <h1 className="font-display text-3xl font-bold text-ink tracking-tight">Acme Inc workspace</h1>
            <p className="text-[14px] text-ink-3 mt-1">This is a demo workspace. Sign up to create your own.</p>
          </div>
          <Link href="/signup"
            data-vb-event="conversion" data-vb-type="dashboard_preview_signup_cta"
            className="bg-brand text-white px-6 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-brand-dark transition-colors">
            Create my workspace
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 flex-1 w-full">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Active tasks', value: '24', sub: '3 overdue', color: 'text-ink' },
            { label: 'In progress', value: '8', sub: 'across 4 projects', color: 'text-blue-600' },
            { label: 'Completed this week', value: '12', sub: '+3 vs last week', color: 'text-green-600' },
            { label: 'Team velocity', value: '87%', sub: 'on-time rate', color: 'text-brand' },
          ].map(s => (
            <div key={s.label} className="bg-white border border-surface-3 rounded-xl p-5">
              <div className={`text-[28px] font-display font-bold leading-none mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-[13px] font-medium text-ink">{s.label}</div>
              <div className="text-[11px] text-ink-3 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* AI insight banner */}
        <div className="bg-brand-light border border-brand/20 rounded-xl p-4 mb-6 flex items-start gap-3">
          <div className="text-[20px]">🧠</div>
          <div>
            <div className="text-[13px] font-semibold text-brand mb-0.5">AI insight</div>
            <div className="text-[13px] text-brand/80 leading-relaxed">
              Marco has 6 tasks due this week — 2 more than average. Consider redistributing the "Write API documentation" task to balance workload. Anika has 40% bandwidth available.
            </div>
          </div>
        </div>

        {/* Task list */}
        <div className="bg-white border border-surface-3 rounded-xl overflow-hidden">
          <div className="border-b border-surface-3 px-5 py-4 flex items-center justify-between">
            <div className="font-semibold text-[15px] text-ink">All tasks</div>
            <div className="flex gap-1">
              {['all', 'in_progress', 'todo', 'done'].map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-md text-[12px] transition-all capitalize ${filter === f ? 'bg-brand text-white font-medium' : 'text-ink-2 hover:bg-surface-2'}`}>
                  {f.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>
          <div>
            {filtered.map((task, i) => (
              <div key={task.id} className={`px-5 py-3.5 flex items-center gap-4 flex-wrap border-b border-surface-2 last:border-b-0 hover:bg-surface-2 transition-colors cursor-pointer ${i % 2 === 0 ? '' : 'bg-surface-2/30'}`}>
                <div className="flex-1 min-w-0">
                  <div className={`text-[14px] font-medium ${task.status === 'done' ? 'line-through text-ink-3' : 'text-ink'}`}>{task.title}</div>
                  <div className="text-[12px] text-ink-3 mt-0.5">{task.project}</div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${statusStyle[task.status]}`}>{task.status.replace('_', ' ')}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${priorityStyle[task.priority]}`}>{task.priority}</span>
                  <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center text-[11px] font-semibold text-brand">{task.assignee}</div>
                  <span className="text-[11px] text-ink-3">{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signup CTA */}
        <div className="mt-8 bg-ink rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2">Ready for your own workspace?</h3>
          <p className="text-white/60 text-[14px] mb-6 font-light">Free for up to 10 people. No credit card required.</p>
          <Link href="/signup"
            data-vb-event="conversion" data-vb-type="dashboard_preview_bottom_cta"
            className="inline-block bg-brand text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-brand-dark transition-colors">
            Start free trial
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
