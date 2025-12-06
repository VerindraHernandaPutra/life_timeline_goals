import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// Import Components
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Habits } from './pages/Habits';
import { Journal } from './pages/Journal';

// Use the Task list from the previous step as a page component
// For this example, I'll reuse the Task logic in a simple wrapper if you kept it, 
// or you can duplicate the Dashboard task table there. 
// I will create a placeholder for the Tasks route to keep the router working.
function TasksPlaceholder() {
    return <div className="p-10 text-center text-gray-500">Task Page (Re-use previous table code here)</div>;
}

export default function App() {
  return (
    <MantineProvider 
      theme={{
        fontFamily: 'Inter, sans-serif',
        primaryColor: 'grape',
        defaultRadius: 'md',
      }}
    >
      <BrowserRouter>
        <Routes>
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
    </MantineProvider>
  );
}