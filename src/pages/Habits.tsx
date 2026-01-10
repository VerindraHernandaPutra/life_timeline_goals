import { Title, Text, SimpleGrid, Paper, Checkbox, RingProgress, Group } from '@mantine/core';
import { Flame } from 'lucide-react';

const habits = [
  { id: 1, name: 'Drink 2L Water', streak: 12, color: 'cyan' },
  { id: 2, name: 'Read 30 Mins', streak: 5, color: 'orange' },
  { id: 3, name: 'Meditation', streak: 3, color: 'teal' },
  { id: 4, name: 'No Sugar', streak: 15, color: 'pink' },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function Habits() {
  return (
    <div className="space-y-8 animate-fade-in p-4">
      <div>
        <Title order={2} className="text-stone-800 dark:text-stone-100 font-serif">Weekly Habits</Title>
        <Text c="dimmed">Consistency is key. You're doing great!</Text>
      </div>

      {/* Stats Overview */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        {habits.map((habit) => (
          <Paper key={habit.id} p="md" radius="lg" className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 flex items-center justify-between shadow-sm transition-colors">
            <div>
              <Text size="xs" c="dimmed" fw={700} tt="uppercase">Streak</Text>
              <Group gap={4} align="center">
                {/* Note: Tailwind dynamic colors like text-${color}-500 don't always work if not safe-listed, but common colors might.
                    Better to map or use style attribute for dynamic values if unsure.
                */}
                <Flame size={20} className="fill-current" style={{ color: `var(--mantine-color-${habit.color}-5)` }} />
                <Text fw={700} size="xl" className="text-stone-700 dark:text-stone-200">{habit.streak}</Text>
              </Group>
              <Text size="sm" fw={500} mt={4} className="text-stone-600 dark:text-stone-300">{habit.name}</Text>
            </div>
            <RingProgress
              size={60}
              thickness={6}
              roundCaps
              sections={[{ value: (habit.streak / 30) * 100, color: habit.color }]}
              label={<Text size="xs" ta="center" fw={700} c="dimmed">{Math.round((habit.streak / 30) * 100)}%</Text>}
            />
          </Paper>
        ))}
      </SimpleGrid>

      {/* Tracker Grid */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 p-6 shadow-sm overflow-x-auto transition-colors">
        <table className="w-full min-w-[600px]">
            <thead>
                <tr>
                    <th className="text-left pb-4 text-stone-400 font-medium text-sm">Habit</th>
                    {days.map(d => (
                        <th key={d} className="pb-4 text-center text-stone-400 font-medium text-sm">{d}</th>
                    ))}
                    <th className="pb-4 text-center text-stone-400 font-medium text-sm">Goal</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 dark:divide-stone-800">
                {habits.map(habit => (
                    <tr key={habit.id} className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                        <td className="py-4 font-medium text-stone-700 dark:text-stone-300">{habit.name}</td>
                        {days.map((_, i) => (
                            <td key={i} className="py-4 text-center">
                                <div className="flex justify-center">
                                    <Checkbox 
                                        color={habit.color} 
                                        size="md" 
                                        radius="sm"
                                        defaultChecked={Math.random() > 0.5} // Mock data
                                        className="cursor-pointer"
                                    />
                                </div>
                            </td>
                        ))}
                        <td className="py-4 text-center text-sm text-stone-400">7/7</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
