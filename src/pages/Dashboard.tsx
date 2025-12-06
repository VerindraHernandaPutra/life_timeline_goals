import { 
  Title, Text, SimpleGrid, Card, Image, Group, 
  ThemeIcon, Button, ActionIcon, Badge, Avatar 
} from '@mantine/core';
import { 
  Plus, Search, Filter, Clock, 
  Sun, Calendar 
} from 'lucide-react';

const projects = [
  { id: 1, title: 'Life Goals 2024', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=400', tag: 'Personal' },
  { id: 2, title: 'Apartment Reno', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400', tag: 'Home' },
  { id: 3, title: 'Learn Japanese', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=400', tag: 'Study' },
  { id: 4, title: 'Side Business', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400', tag: 'Work' },
];

export function Dashboard() {
  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* 1. Header / Greeting Section */}
      <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-medium mb-2">
              <Sun size={20} />
              <span>Good Afternoon</span>
            </div>
            <Title order={1} className="text-gray-800 text-3xl md:text-5xl font-serif tracking-tight">
              Life Timeline
            </Title>
            <Text c="dimmed" mt="xs">You have 4 tasks due today. Let's make it a productive day.</Text>
          </div>
          <div className="flex items-center gap-3">
             <Avatar.Group spacing="sm">
                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" radius="xl" />
                <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100" radius="xl" />
             </Avatar.Group>
             <Button variant="light" color="gray" radius="xl" size="xs">Share</Button>
          </div>
        </div>
        
        {/* Decorative Background Blur */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      </div>

      {/* 2. Current Focus / Projects */}
      <section>
        <div className="flex items-center justify-between mb-6">
            <Group gap="xs">
                <ThemeIcon variant="light" color="grape" size="md" radius="md"><Calendar size={18}/></ThemeIcon>
                <Text fw={700} c="grape" tt="uppercase" size="sm" style={{ letterSpacing: 1 }}>Active Projects</Text>
            </Group>
            <Group gap="xs">
                <ActionIcon variant="transparent" color="gray"><Search size={18} /></ActionIcon>
                <ActionIcon variant="transparent" color="gray"><Filter size={18} /></ActionIcon>
                <Button size="xs" variant="default" radius="md" leftSection={<Plus size={14} />}>New</Button>
            </Group>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {projects.map(proj => (
            <Card key={proj.id} padding="0" radius="lg" className="group cursor-pointer border border-transparent hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
              <Card.Section className="h-32 overflow-hidden relative">
                <Image src={proj.image} height={128} className="group-hover:scale-110 transition-transform duration-500" />
                <Badge color="white" c="dark" className="absolute top-2 right-2 shadow-sm">{proj.tag}</Badge>
              </Card.Section>
              <div className="p-4">
                <Text fw={600} size="lg" className="text-gray-800 mb-1">{proj.title}</Text>
                <Group justify="space-between" mt="md">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white"></div>
                  </div>
                  <Text size="xs" c="dimmed">Updated 2h ago</Text>
                </Group>
              </div>
            </Card>
          ))}
          
          <div className="h-full min-h-[180px] border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:bg-white hover:border-purple-300 hover:text-purple-500 cursor-pointer transition-all gap-2 group">
             <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-purple-50 flex items-center justify-center transition-colors">
                <Plus size={20} />
             </div>
             <Text size="sm" fw={500}>Create Project</Text>
          </div>
        </SimpleGrid>
      </section>

      {/* 3. Tasks & Quote Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Quick Tasks */}
        <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
                <Text fw={700} c="gray" size="sm" tt="uppercase">Priority Tasks</Text>
                <Button variant="subtle" size="xs" color="gray">View All</Button>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors cursor-pointer group">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-purple-500 transition-colors"></div>
                        <div className="flex-1">
                            <Text size="sm" fw={500} className="text-gray-700">Prepare monthly report presentation</Text>
                            <Text size="xs" c="dimmed">Today, 5:00 PM</Text>
                        </div>
                        <Badge variant="dot" color={i === 1 ? 'red' : 'blue'}>{i === 1 ? 'Urgent' : 'Routine'}</Badge>
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Quote / Motivation */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-purple-200">
            <div className="relative z-10">
                <ThemeIcon variant="white" color="dark" size="lg" radius="xl" mb="md">
                    <Clock size={20} />
                </ThemeIcon>
                <Text size="xl" fw={300} style={{ fontFamily: 'serif' }} lh={1.4}>
                    "Work harder than you think you did yesterday."
                </Text>
                <Text size="sm" mt="md" className="text-purple-200">— Alex Elle</Text>
            </div>
            {/* Decoration Circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-x-5 translate-y-5"></div>
        </div>
      </div>

    </div>
  );
}