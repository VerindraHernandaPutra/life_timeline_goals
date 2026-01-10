import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      className="text-stone-600 dark:text-stone-300 bg-transparent border-none hover:bg-stone-100 dark:hover:bg-stone-800"
    >
      {computedColorScheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </ActionIcon>
  );
}
