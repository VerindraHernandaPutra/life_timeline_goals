import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Components
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Habits } from './pages/Habits';
import { Journal } from './pages/Journal';

// Placeholder for Tasks
function TasksPlaceholder() {
    return <div className="p-10 text-center text-gray-500">Task Page (Re-use previous table code here)</div>;
}

export default function App() {
  return (
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
  );
}
