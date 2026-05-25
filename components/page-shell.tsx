import Link from 'next/link';

export function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  const nav = ['dashboard','roadmap','lesson/intro-variation','quiz-center','mistake-bank','spm-practice','progress','leaderboard','referral','rewards','teacher'];
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b"><div className="max-w-6xl mx-auto p-4 flex justify-between"><Link href="/" className="font-bold text-brand-navy">Variation Mastery</Link><div className="flex gap-3 text-sm">{nav.slice(0,4).map(n=><Link key={n} href={`/${n}`} className="text-brand-blue">{n}</Link>)}</div></div></header>
      <main className="max-w-6xl mx-auto p-4 md:p-8"><h1 className="text-2xl font-bold text-brand-navy mb-4">{title}</h1>{children}</main>
    </div>
  );
}
