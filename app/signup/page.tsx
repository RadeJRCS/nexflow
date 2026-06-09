'use client'
import Nav from '@/components/Nav'
import Link from 'next/link'
import { useState } from 'react'

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [plan] = useState('Team')

  return (
    <div className="min-h-screen flex flex-col bg-surface-2">
      <Nav />
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="bg-white border border-surface-3 rounded-2xl p-8 w-full max-w-md shadow-sm">

          {step === 1 && (
            <>
              <div className="text-center mb-7">
                <div className="font-display text-[22px] font-bold text-ink mb-1">Create your account</div>
                <div className="text-[13px] text-ink-3">Start your free 14-day {plan} trial. No credit card needed.</div>
              </div>
              <div className="space-y-3 mb-5">
                <button className="w-full border border-surface-3 text-ink py-2.5 rounded-lg text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-surface-2 transition-colors">
                  <span>G</span> Continue with Google
                </button>
                <button className="w-full border border-surface-3 text-ink py-2.5 rounded-lg text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-surface-2 transition-colors">
                  <span>⊞</span> Continue with Microsoft
                </button>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-surface-3" />
                <span className="text-[12px] text-ink-3">or</span>
                <div className="flex-1 h-px bg-surface-3" />
              </div>
              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-[12px] text-ink-2 block mb-1">Work email</label>
                  <input type="email" placeholder="you@company.com" className="w-full border border-surface-3 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="text-[12px] text-ink-2 block mb-1">Full name</label>
                  <input type="text" placeholder="Jane Smith" className="w-full border border-surface-3 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="text-[12px] text-ink-2 block mb-1">Password</label>
                  <input type="password" placeholder="At least 8 characters" className="w-full border border-surface-3 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand transition-colors" />
                </div>
              </div>
              <button
                data-vb-event="conversion" data-vb-type="signup_step1_submit"
                onClick={() => setStep(2)}
                className="w-full bg-brand text-white py-3 rounded-lg text-[14px] font-semibold hover:bg-brand-dark transition-colors">
                Create account
              </button>
              <p className="text-[11px] text-ink-3 text-center mt-4 leading-relaxed">
                By creating an account you agree to our <Link href="/" className="underline">Terms</Link> and <Link href="/" className="underline">Privacy Policy</Link>.
              </p>
              <p className="text-[13px] text-center text-ink-2 mt-4">
                Already have an account? <Link href="/" className="text-brand font-medium">Log in</Link>
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center mb-7">
                <div className="font-display text-[22px] font-bold text-ink mb-1">Set up your workspace</div>
                <div className="text-[13px] text-ink-3">This is where your team will collaborate.</div>
              </div>
              <div className="space-y-3 mb-6">
                <div>
                  <label className="text-[12px] text-ink-2 block mb-1">Workspace name</label>
                  <input type="text" placeholder="e.g. Acme Inc" className="w-full border border-surface-3 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand transition-colors" />
                </div>
                <div>
                  <label className="text-[12px] text-ink-2 block mb-1">Your role</label>
                  <select className="w-full border border-surface-3 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand transition-colors bg-white text-ink-2">
                    <option>Select a role</option>
                    <option>Engineering / Product</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                    <option>Founder / CEO</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] text-ink-2 block mb-1">Team size</label>
                  <select className="w-full border border-surface-3 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand transition-colors bg-white text-ink-2">
                    <option>1 - just me</option>
                    <option>2 - 5</option>
                    <option>6 - 15</option>
                    <option>16 - 50</option>
                    <option>50+</option>
                  </select>
                </div>
              </div>
              <button
                data-vb-event="conversion" data-vb-type="signup_step2_workspace"
                onClick={() => setStep(3)}
                className="w-full bg-brand text-white py-3 rounded-lg text-[14px] font-semibold hover:bg-brand-dark transition-colors">
                Continue
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-center mb-7">
                <div className="text-5xl mb-4">✅</div>
                <div className="font-display text-[22px] font-bold text-ink mb-2">You are all set!</div>
                <div className="text-[14px] text-ink-2 leading-relaxed">
                  Your workspace is ready. Your 14-day Team trial starts now. No credit card needed until you decide to continue.
                </div>
              </div>
              <div className="bg-brand-light border border-brand/20 rounded-xl p-4 mb-6 text-[13px] text-brand space-y-1">
                <div className="font-semibold mb-1">What happens next:</div>
                <div>✓ Create your first project (takes 2 minutes)</div>
                <div>✓ Invite your team</div>
                <div>✓ Connect GitHub or Slack</div>
              </div>
              <Link href="/dashboard-preview"
                data-vb-event="conversion" data-vb-type="signup_completed"
                className="block w-full bg-brand text-white py-3 rounded-lg text-[14px] font-semibold text-center hover:bg-brand-dark transition-colors">
                Open my workspace
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
