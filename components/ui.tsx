"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Flame, Trophy } from 'lucide-react';

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white p-5 shadow-card border border-slate-100"><h3 className="font-semibold text-brand-navy mb-2">{title}</h3>{children}</div>;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-brand-blue" style={{ width: `${value}%` }} /></div>;
}

export function Hero() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 items-center py-16">
      <div>
        <p className="text-sm text-brand-blue font-semibold">Premium KSSM Tuition Platform</p>
        <h1 className="text-4xl font-bold text-brand-navy mt-3">Master Form 5 Mathematics Chapter 1: Variation</h1>
        <p className="text-slate-600 mt-4">Step-by-step lessons, quizzes, exam techniques and guided practice designed for Malaysian KSSM students.</p>
        <div className="mt-6 flex gap-3"><Link className="px-5 py-3 rounded-xl bg-brand-blue text-white" href="/dashboard">Start Learning</Link><Link className="px-5 py-3 rounded-xl border" href="/diagnostic-quiz">Try Free Diagnostic Quiz</Link></div>
        <div className="mt-6 text-sm text-slate-600">Experienced Mathematics Educator • KSSM Specialist • Strength-Based Learning Coach</div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-brand-light p-6 shadow-card">
        <div className="grid gap-3">
          <Card title="Dashboard Preview"><ProgressBar value={64} /></Card>
          <Card title="Notes Preview">Direct variation: y = kx</Card>
          <Card title="Progress Chart"><div className="text-brand-blue">Week-on-week growth ↑</div></Card>
        </div>
      </motion.div>
    </section>
  );
}

export function BadgeStrip() {
  return <div className="flex gap-3 text-sm"><span className="rounded-full bg-orange-100 px-3 py-1 flex items-center gap-1"><Flame size={14}/> 12-day streak</span><span className="rounded-full bg-blue-100 px-3 py-1 flex items-center gap-1"><Trophy size={14}/> Quiz Master</span></div>;
}
