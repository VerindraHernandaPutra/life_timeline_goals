import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Title, Text, Badge, Card, Group, Image, Container, TextInput, Textarea, Checkbox, ActionIcon, Menu } from '@mantine/core';
import { ArrowLeft, Calendar, Clock, Tag, Plus, MoreHorizontal, Trash } from 'lucide-react';
import { projects } from '../data/projects';

// Mock Tasks Interface
interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find initial project
  const initialProject = projects.find(p => p.id === Number(projectId));

  // Local State for "Immediate Editing"
  const [title, setTitle] = useState(initialProject?.title || '');
  const [description, setDescription] = useState(initialProject?.description || '');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Define project scope', completed: true },
    { id: '2', text: 'Create initial draft', completed: false },
    { id: '3', text: 'Review with team', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  // Update state if project loads/changes (handling potential direct navigation issues)
  useEffect(() => {
    if (initialProject) {
      setTitle(initialProject.title);
      setDescription(initialProject.description);
    }
  }, [initialProject]);

  if (!initialProject) {
    return (
      <Container className="py-20 text-center">
        <Title order={2} className="text-stone-700 dark:text-stone-200">Project not found</Title>
        <Button variant="subtle" color="gray" mt="md" onClick={() => navigate('/')}>Back to Dashboard</Button>
      </Container>
    );
  }

  // Handlers
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const updateTaskText = (id: string, newText: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-in p-4 max-w-4xl mx-auto pb-20">
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

      {/* Hero Section with Editable Title */}
      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-sm group">
        <Image src={initialProject.image} h="100%" w="100%" fit="cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
           <Badge color="white" c="dark" size="lg" className="self-start mb-2">{initialProject.tag}</Badge>

           {/* Editable Title: Looks like text, acts like input */}
           <TextInput
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             variant="unstyled"
             size="xl"
             classNames={{
               input: "text-white font-serif text-3xl md:text-5xl font-bold bg-transparent border-0 p-0 focus:ring-0 placeholder-white/50 w-full"
             }}
             placeholder="Project Title"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
            {/* Editable Description */}
            <Card padding="xl" radius="lg" className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm">
                <Title order={3} className="text-stone-800 dark:text-stone-100 mb-2 font-serif">About Project</Title>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  autosize
                  minRows={2}
                  variant="unstyled"
                  placeholder="Add a description..."
                  classNames={{
                    input: "text-stone-600 dark:text-stone-300 leading-relaxed text-base p-0 focus:ring-0 border-0"
                  }}
                />
            </Card>

            {/* Tasks / Todo List Section */}
            <Card padding="xl" radius="lg" className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm min-h-[300px]">
                 <Group justify="space-between" mb="md" className="group/header">
                    <Title order={3} className="text-stone-800 dark:text-stone-100 font-serif">Tasks</Title>
                    <Text size="sm" c="dimmed">{tasks.filter(t => t.completed).length}/{tasks.length} Completed</Text>
                 </Group>

                 <div className="space-y-1">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="group flex items-start gap-3 p-2 -mx-2 rounded hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
                        >
                            <Checkbox
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                color="teal"
                                radius="sm"
                                size="sm"
                                className="mt-1.5 cursor-pointer"
                            />
                            <TextInput
                                value={task.text}
                                onChange={(e) => updateTaskText(task.id, e.target.value)}
                                variant="unstyled"
                                className="flex-1"
                                classNames={{
                                    input: `p-0 h-auto min-h-[24px] text-stone-700 dark:text-stone-200 ${task.completed ? 'line-through text-stone-400 dark:text-stone-500' : ''}`
                                }}
                            />
                            <Menu shadow="md" width={150} position="bottom-end">
                                <Menu.Target>
                                    <ActionIcon
                                        variant="transparent"
                                        color="gray"
                                        size="sm"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <MoreHorizontal size={14} />
                                    </ActionIcon>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item
                                        color="red"
                                        leftSection={<Trash size={14} />}
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Delete
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    ))}

                    {/* New Task Input */}
                    <form onSubmit={addTask} className="flex items-center gap-3 p-2 -mx-2 mt-2">
                        <div className="w-5 flex justify-center text-stone-400">
                            <Plus size={16} />
                        </div>
                        <TextInput
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            variant="unstyled"
                            placeholder="Add a new task..."
                            className="flex-1"
                            classNames={{
                                input: "p-0 h-auto text-stone-600 dark:text-stone-400 placeholder:text-stone-400"
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addTask(e);
                                }
                            }}
                        />
                    </form>
                 </div>
            </Card>
        </div>

        <div className="space-y-6">
            <Card padding="lg" radius="lg" className="bg-teal-5 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/30">
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

            <Card padding="xl" radius="lg" className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm">
                 <Title order={4} className="text-stone-800 dark:text-stone-100 mb-4">Activity</Title>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <div>
                            <Text size="sm" className="text-stone-600 dark:text-stone-300">Updated milestones</Text>
                            <Text size="xs" c="dimmed">2h ago</Text>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div>
                            <Text size="sm" className="text-stone-600 dark:text-stone-300">Added new assets</Text>
                            <Text size="xs" c="dimmed">Yesterday</Text>
                        </div>
                    </div>
                 </div>
            </Card>
        </div>
      </div>
    </div>
  );
}
