import { TextInput, PasswordInput, Button, Paper, Text, Anchor, Container, Title, Group, Divider } from '@mantine/core';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 p-4 transition-colors duration-300">
      <Container size={420} my={40}>
        <Title ta="center" className="font-serif text-stone-800 dark:text-stone-100 mb-2">
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mb={30}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button" onClick={() => navigate('/register')} className="text-teal-600 dark:text-teal-400">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md" className="bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800">
          <form onSubmit={handleLogin}>
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              required
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
            <Group justify="space-between" mt="lg">
              <Anchor component="button" size="sm" className="text-teal-600 dark:text-teal-400">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" type="submit" color="teal">
              Sign in
            </Button>
          </form>

          <Divider label="Or continue with" labelPosition="center" my="lg" color="gray.3" />

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
