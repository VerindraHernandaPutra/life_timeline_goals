import { TextInput, PasswordInput, Button, Paper, Text, Anchor, Container, Title, Group, Divider } from '@mantine/core';
import { Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 p-4 transition-colors duration-300">
      <Container size={420} my={40}>
        <Title ta="center" className="font-serif text-stone-800 dark:text-stone-100 mb-2">
          Create an account
        </Title>
        <Text c="dimmed" size="sm" ta="center" mb={30}>
          Already have an account?{' '}
          <Anchor size="sm" component="button" onClick={() => navigate('/login')} className="text-teal-600 dark:text-teal-400">
            Login
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md" className="bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800">
          <form onSubmit={handleRegister}>
            <TextInput
              label="Full Name"
              placeholder="Your Name"
              required
              leftSection={<User size={16} />}
              classNames={{
                label: "text-stone-700 dark:text-stone-300 mb-1",
                input: "dark:bg-stone-800 dark:text-white dark:border-stone-700 focus:border-teal-500"
              }}
            />
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              required
              mt="md"
              leftSection={<Mail size={16} />}
              classNames={{
                label: "text-stone-700 dark:text-stone-300 mb-1",
                input: "dark:bg-stone-800 dark:text-white dark:border-stone-700 focus:border-teal-500"
              }}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              leftSection={<Lock size={16} />}
              classNames={{
                label: "text-stone-700 dark:text-stone-300 mb-1",
                input: "dark:bg-stone-800 dark:text-white dark:border-stone-700 focus:border-teal-500"
              }}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              required
              mt="md"
              leftSection={<Lock size={16} />}
              classNames={{
                label: "text-stone-700 dark:text-stone-300 mb-1",
                input: "dark:bg-stone-800 dark:text-white dark:border-stone-700 focus:border-teal-500"
              }}
            />
            <Button fullWidth mt="xl" type="submit" color="teal">
              Register
            </Button>
          </form>

          <Divider label="Or register with" labelPosition="center" my="lg" color="gray.3" />

          <Group grow mb="md" mt="md">
            <Button variant="default" color="gray" className="dark:bg-stone-800 dark:text-white dark:border-stone-700 hover:dark:bg-stone-700">
               Google
            </Button>
            <Button variant="default" color="gray" className="dark:bg-stone-800 dark:text-white dark:border-stone-700 hover:dark:bg-stone-700">
               Twitter
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
