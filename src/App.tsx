import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';
import { Folder } from 'lucide-react';

// Import Components
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Habits } from './pages/Habits';
import { Journal } from './pages/Journal';
import { Login } from './pages/Login';

// Placeholder for Tasks with Cozy Styling
function TasksPlaceholder() {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm mx-auto max-w-2xl">
            <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-full mb-4">
                <Folder size={48} className="text-stone-300 dark:text-stone-600" />
            </div>
            <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-200 mb-2">My Tasks</h2>
            <p className="text-stone-500 dark:text-stone-400 text-center max-w-xs">
                This cozy corner is under construction. <br /> Check back soon for your task list!
            </p>
        </div>
    );
}

// Helper component to sync Mantine theme with Tailwind 'dark' class
function ColorSchemeSync() {
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ColorSchemeSync />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<TasksPlaceholder />} />
          <Route path="habits" element={<Habits />} />
          <Route path="journal" element={<Journal />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
