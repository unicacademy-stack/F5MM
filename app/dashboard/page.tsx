import { PageShell } from '@/components/page-shell';
import { BadgeStrip, Card, ProgressBar } from '@/components/ui';
import { student } from '@/data/mock';

export default function Page(){return <PageShell title="Welcome back, continue your Variation mastery journey.">
<div className="grid md:grid-cols-4 gap-4 mb-4"><Card title="Chapter Progress"><ProgressBar value={student.progress}/></Card><Card title="Current Streak">{student.streak} days</Card><Card title="XP Points">{student.xp}</Card><Card title="Completion %">{student.completionRate}%</Card></div>
<div className="grid md:grid-cols-3 gap-4"><Card title="Upcoming Quiz Reminder">Checkpoint test tomorrow</Card><Card title="Last Viewed Lesson">Inverse Variation</Card><Card title="Weak Topic Analysis">Combined variation graph questions</Card></div>
<div className="mt-4"><BadgeStrip /></div>
</PageShell>}
