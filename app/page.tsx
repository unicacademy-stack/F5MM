import { Card, Hero } from '@/components/ui';
import { modules } from '@/data/mock';

export default function HomePage() {
  return <main className="max-w-6xl mx-auto px-4"><Hero />
    <section className="grid md:grid-cols-3 gap-4 pb-8">{['From 42% to 87%','Improved from Grade D to A','SPM confidence unlocked'].map(t=><Card key={t} title="Student Story">{t}</Card>)}</section>
    <section className="grid md:grid-cols-4 gap-4 pb-8">{['Short focused lessons','Instant quiz feedback','Exam-oriented methods','Progress tracking system'].map(t=><Card key={t} title={t}>Built for high completion.</Card>)}</section>
    <section className="grid md:grid-cols-2 gap-4 pb-8"><Card title="Course Roadmap">{modules.map(m=><div key={m}>• {m}</div>)}</Card><Card title="Invite Friends & Unlock Bonus Revision Packs">Referral rewards: bonus quiz packs, challenge questions, premium notes.</Card></section>
    <footer className="py-8 text-sm text-slate-500 flex gap-4">About Contact FAQ Terms Privacy policy</footer>
  </main>;
}
