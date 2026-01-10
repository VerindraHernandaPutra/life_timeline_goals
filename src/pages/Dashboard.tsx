import { 
  Title, Text, SimpleGrid, Card, Image, Group, 
  ThemeIcon, Button, ActionIcon, Badge, Avatar,
  SegmentedControl
} from '@mantine/core';
import { 
  Plus, Search, Filter, Clock, 
  Sun, Calendar, LayoutGrid, List
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export function Dashboard() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-10 animate-fade-in p-4">
      
      {/* 1. Header / Greeting Section */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-stone-900 p-8 shadow-sm border border-stone-100 dark:border-stone-800 transition-colors">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-medium mb-2">
              <Sun size={20} />
              <span>Good Afternoon</span>
            </div>
            <Title order={1} className="text-stone-800 dark:text-stone-100 text-3xl md:text-5xl font-serif tracking-tight">
              Life Timeline
            </Title>
            <Text c="dimmed" mt="xs">You have 4 tasks due today. Let's make it a productive day.</Text>
          </div>
          <div className="flex items-center gap-3">
             <Avatar.Group spacing="sm">
                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" radius="xl" />
                <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100" radius="xl" />
             </Avatar.Group>
             <Button variant="light" color="gray" radius="xl" size="xs" className="dark:text-stone-200">Share</Button>
          </div>
        </div>
        
        {/* Decorative Background Blur */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 dark:bg-teal-900/40 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-stone-200 dark:bg-stone-800 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      </div>

      {/* 2. Current Focus / Projects */}
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <Group gap="xs">
                <ThemeIcon variant="light" color="teal" size="md" radius="md"><Calendar size={18}/></ThemeIcon>
                <Text fw={700} c="teal" tt="uppercase" size="sm" style={{ letterSpacing: 1 }}>Active Projects</Text>
            </Group>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <SegmentedControl
                    value={viewMode}
                    onChange={(val) => setViewMode(val as 'grid' | 'list')}
                    data={[
                        { label: <LayoutGrid size={16} />, value: 'grid' },
                        { label: <List size={16} />, value: 'list' },
                    ]}
                    size="xs"
                    radius="md"
                    className="bg-stone-100 dark:bg-stone-800"
                />

                <Group gap="xs">
                    <ActionIcon variant="transparent" color="gray" className="dark:text-stone-400"><Search size={18} /></ActionIcon>
                    <ActionIcon variant="transparent" color="gray" className="dark:text-stone-400"><Filter size={18} /></ActionIcon>
                    <Button size="xs" variant="default" radius="md" leftSection={<Plus size={14} />} className="dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700">New</Button>
                </Group>
            </div>
        </div>

        {viewMode === 'grid' ? (
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
              {projects.map(proj => (
                <Card
                    key={proj.id}
                    padding="0"
                    radius="lg"
                    onClick={() => navigate(`/projects/${proj.id}`)}
                    className="group cursor-pointer border border-transparent hover:border-teal-100 dark:hover:border-teal-900/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-stone-900"
                >
                  <Card.Section className="h-32 overflow-hidden relative">
                    <Image src={proj.image} height={128} className="group-hover:scale-110 transition-transform duration-500" />
                    <Badge color="white" c="dark" className="absolute top-2 right-2 shadow-sm dark:bg-stone-800 dark:text-stone-200">{proj.tag}</Badge>
                  </Card.Section>
                  <div className="p-4">
                    <Text fw={600} size="lg" className="text-stone-800 dark:text-stone-100 mb-1">{proj.title}</Text>
                    <Group justify="space-between" mt="md">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 border-2 border-white dark:border-stone-800"></div>
                        <div className="w-6 h-6 rounded-full bg-stone-100 dark:bg-stone-700 border-2 border-white dark:border-stone-800"></div>
                      </div>
                      <Text size="xs" c="dimmed">Updated 2h ago</Text>
                    </Group>
                  </div>
                </Card>
              ))}

              <div className="h-full min-h-[180px] border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-2xl flex flex-col items-center justify-center text-stone-400 dark:text-stone-600 hover:bg-white dark:hover:bg-stone-900 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-all gap-2 group">
                 <div className="w-10 h-10 rounded-full bg-stone-50 dark:bg-stone-800 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30 flex items-center justify-center transition-colors">
                    <Plus size={20} />
                 </div>
                 <Text size="sm" fw={500}>Create Project</Text>
              </div>
            </SimpleGrid>
        ) : (
            <div className="space-y-3">
                {projects.map(proj => (
                    <div
                        key={proj.id}
                        onClick={() => navigate(`/projects/${proj.id}`)}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-stone-900 border border-transparent hover:border-teal-100 dark:hover:border-teal-900/50 hover:shadow-md transition-all cursor-pointer group"
                    >
                        <Image src={proj.image} w={64} h={64} radius="md" className="group-hover:scale-105 transition-transform duration-300" />
                        <div className="flex-1 min-w-0">
                             <div className="flex items-center gap-2 mb-1">
                                <Text fw={600} size="md" className="text-stone-800 dark:text-stone-100">{proj.title}</Text>
                                <Badge size="sm" color="gray" variant="light" className="dark:bg-stone-800 dark:text-stone-300">{proj.tag}</Badge>
                             </div>
                             <Text size="sm" c="dimmed" lineClamp={1}>{proj.description}</Text>
                        </div>
                        <div className="hidden sm:flex items-center gap-6 text-stone-400">
                             <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 border-2 border-white dark:border-stone-800"></div>
                                <div className="w-6 h-6 rounded-full bg-stone-100 dark:bg-stone-700 border-2 border-white dark:border-stone-800"></div>
                             </div>
                             <Text size="xs">Updated 2h ago</Text>
                             <ThemeIcon variant="light" color="gray" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Plus size={14}/>
                             </ThemeIcon>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </section>

      {/* 3. Tasks & Quote Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Quick Tasks */}
        <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
                <Text fw={700} c="gray" size="sm" tt="uppercase">Priority Tasks</Text>
                <Button variant="subtle" size="xs" color="gray" className="dark:text-stone-400">View All</Button>
            </div>
            
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm overflow-hidden transition-colors">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-stone-50 dark:hover:bg-stone-800/50 border-b border-stone-50 dark:border-stone-800 last:border-0 transition-colors cursor-pointer group">
                        <div className="w-5 h-5 rounded-full border-2 border-stone-300 dark:border-stone-600 group-hover:border-teal-500 transition-colors"></div>
                        <div className="flex-1">
                            <Text size="sm" fw={500} className="text-stone-700 dark:text-stone-200">Prepare monthly report presentation</Text>
                            <Text size="xs" c="dimmed">Today, 5:00 PM</Text>
                        </div>
                        <Badge variant="dot" color={i === 1 ? 'red' : 'teal'}>{i === 1 ? 'Urgent' : 'Routine'}</Badge>
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Quote / Motivation */}
        <div className="bg-gradient-to-br from-teal-600 to-stone-700 dark:from-teal-800 dark:to-stone-900 rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-teal-100/50 dark:shadow-none transition-colors">
            <div className="relative z-10">
                <ThemeIcon variant="white" color="dark" size="lg" radius="xl" mb="md" className="dark:bg-stone-800 dark:text-white">
                    <Clock size={20} />
                </ThemeIcon>
                <Text size="xl" fw={300} style={{ fontFamily: 'serif' }} lh={1.4}>
                    "Work harder than you think you did yesterday."
                </Text>
                <Text size="sm" mt="md" className="text-teal-100">— Alex Elle</Text>
            </div>
            {/* Decoration Circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-x-5 translate-y-5"></div>
        </div>
      </div>

    </div>
  );
}
