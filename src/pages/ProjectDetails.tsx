import { useParams, useNavigate } from 'react-router-dom';
import { Button, Title, Text, Badge, Card, Group, Image, Container } from '@mantine/core';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <Container className="py-20 text-center">
        <Title order={2} className="text-stone-700 dark:text-stone-200">Project not found</Title>
        <Button variant="subtle" color="gray" mt="md" onClick={() => navigate('/')}>Back to Dashboard</Button>
      </Container>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in p-4 max-w-4xl mx-auto">
      <Button
        variant="subtle"
        color="gray"
        size="sm"
        leftSection={<ArrowLeft size={16} />}
        onClick={() => navigate('/')}
        className="text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
      >
        Back to Dashboard
      </Button>

      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-sm">
        <Image src={project.image} h="100%" w="100%" fit="cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
           <Badge color="white" c="dark" size="lg" className="self-start mb-2">{project.tag}</Badge>
           <Title className="text-white font-serif text-3xl md:text-5xl">{project.title}</Title>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
            <Card padding="xl" radius="lg" className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm">
                <Title order={3} className="text-stone-800 dark:text-stone-100 mb-4 font-serif">About Project</Title>
                <Text className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.description}
                </Text>
                <Text className="text-stone-600 dark:text-stone-300 leading-relaxed mt-4">
                    This is a placeholder for more detailed project content, tasks, notes, and timelines.
                    The cozy aesthetic continues here with warm tones and readable typography.
                </Text>
            </Card>

            <Card padding="xl" radius="lg" className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm">
                 <Group justify="space-between" mb="md">
                    <Title order={4} className="text-stone-800 dark:text-stone-100">Recent Activity</Title>
                 </Group>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-50 dark:bg-stone-800/50">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <Text size="sm" className="text-stone-600 dark:text-stone-300">Updated project milestones</Text>
                        <Text size="xs" c="dimmed" className="ml-auto">2h ago</Text>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-50 dark:bg-stone-800/50">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <Text size="sm" className="text-stone-600 dark:text-stone-300">Uploaded new assets</Text>
                        <Text size="xs" c="dimmed" className="ml-auto">Yesterday</Text>
                    </div>
                 </div>
            </Card>
        </div>

        <div className="space-y-6">
            <Card padding="lg" radius="lg" className="bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/30">
                <Title order={4} className="text-teal-900 dark:text-teal-100 mb-4">Quick Stats</Title>
                <div className="space-y-3">
                    <Group>
                        <Clock size={18} className="text-teal-600 dark:text-teal-400" />
                        <Text size="sm" className="text-stone-700 dark:text-stone-300">Due Date: <strong>Dec 31, 2024</strong></Text>
                    </Group>
                    <Group>
                        <Tag size={18} className="text-teal-600 dark:text-teal-400" />
                        <Text size="sm" className="text-stone-700 dark:text-stone-300">Status: <strong>Active</strong></Text>
                    </Group>
                    <Group>
                         <Calendar size={18} className="text-teal-600 dark:text-teal-400" />
                         <Text size="sm" className="text-stone-700 dark:text-stone-300">Created: <strong>Jan 01, 2024</strong></Text>
                    </Group>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
}
