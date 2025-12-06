import { Title, Text, SimpleGrid, Paper, Checkbox, RingProgress, Group } from '@mantine/core';
import { Flame } from 'lucide-react';

const habits = [
  { id: 1, name: 'Drink 2L Water', streak: 12, color: 'blue' },
  { id: 2, name: 'Read 30 Mins', streak: 5, color: 'orange' },
  { id: 3, name: 'Meditation', streak: 3, color: 'teal' },
  { id: 4, name: 'No Sugar', streak: 15, color: 'pink' },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function Habits() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <Title order={2} className="text-gray-800">Weekly Habits</Title>
        <Text c="dimmed">Consistency is key. You're doing great!</Text>
      </div>

      {/* Stats Overview */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        {habits.map((habit) => (
          <Paper key={habit.id} p="md" radius="lg" withBorder className="bg-white flex items-center justify-between">
            <div>
              <Text size="xs" c="dimmed" fw={700} tt="uppercase">Streak</Text>
              <Group gap={4} align="center">
                <Flame size={20} className={`text-${habit.color}-500 fill-${habit.color}-500`} />
                <Text fw={700} size="xl">{habit.streak}</Text>
              </Group>
              <Text size="sm" fw={500} mt={4}>{habit.name}</Text>
            </div>
            <RingProgress
              size={60}
              thickness={6}
              roundCaps
              sections={[{ value: (habit.streak / 30) * 100, color: habit.color }]}
              label={<Text size="xs" ta="center" fw={700}>{Math.round((habit.streak / 30) * 100)}%</Text>}
            />
          </Paper>
        ))}
      </SimpleGrid>

      {/* Tracker Grid */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm overflow-x-auto">
        <table className="w-full min-w-[600px]">
            <thead>
                <tr>
                    <th className="text-left pb-4 text-gray-400 font-medium text-sm">Habit</th>
                    {days.map(d => (
                        <th key={d} className="pb-4 text-center text-gray-400 font-medium text-sm">{d}</th>
                    ))}
                    <th className="pb-4 text-center text-gray-400 font-medium text-sm">Goal</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
                {habits.map(habit => (
                    <tr key={habit.id} className="group hover:bg-gray-50 transition-colors">
                        <td className="py-4 font-medium text-gray-700">{habit.name}</td>
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
                        <td className="py-4 text-center text-sm text-gray-400">7/7</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}