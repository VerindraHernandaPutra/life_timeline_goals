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
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
         <div>
            <Title order={2} className="text-gray-800">Journal & Minutes</Title>
            <Text c="dimmed">Capture your thoughts, ideas, and meeting notes.</Text>
         </div>
         <Button leftSection={<Plus size={16}/>} color="grape" radius="md">New Entry</Button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {entries.map((entry) => (
            <div key={entry.id} className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs font-medium uppercase tracking-wider">
                    <Calendar size={12} />
                    {entry.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{entry.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {entry.content}
                </p>
                <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                        <Badge key={tag} variant="dot" color="gray" size="sm" className="bg-gray-50 normal-case font-normal text-gray-600">
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