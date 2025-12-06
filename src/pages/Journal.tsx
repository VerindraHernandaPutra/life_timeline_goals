import { Title, Text, Button, Badge } from '@mantine/core';
import { Plus, Calendar } from 'lucide-react';

const entries = [
  { id: 1, title: 'Ideas for Q2 Marketing', date: 'Oct 24, 2023', tags: ['Work', 'Ideas'], content: 'Focus on social media growth...' },
  { id: 2, title: 'Weekly Reflection', date: 'Oct 22, 2023', tags: ['Personal'], content: 'Felt really productive this week. Managed to hit the gym 3 times.' },
  { id: 3, title: 'Books to Read', date: 'Oct 20, 2023', tags: ['Hobby'], content: 'Atomic Habits, The Psychology of Money...' },
  { id: 4, title: 'Meeting Notes: Team A', date: 'Oct 18, 2023', tags: ['Work'], content: 'Discussed the timeline for the new launch.' },
];

export function Journal() {
  return (
    <div className="space-y-8 animate-fade-in p-4">
      <div className="flex items-center justify-between">
         <div>
            <Title order={2} className="text-stone-800 font-serif">Journal & Minutes</Title>
            <Text c="dimmed">Capture your thoughts, ideas, and meeting notes.</Text>
         </div>
         <Button leftSection={<Plus size={16}/>} color="teal" radius="md">New Entry</Button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {entries.map((entry) => (
            <div key={entry.id} className="break-inside-avoid bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-center gap-2 mb-3 text-stone-400 text-xs font-medium uppercase tracking-wider">
                    <Calendar size={12} />
                    {entry.date}
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-teal-700 transition-colors font-serif">{entry.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {entry.content}
                </p>
                <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                        <Badge key={tag} variant="outline" color="gray" size="sm" className="bg-white/50 border-stone-200 normal-case font-normal text-stone-600">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
