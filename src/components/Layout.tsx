import { AppShell, Burger, Group, ScrollArea, Avatar, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  Folder, LayoutDashboard, CheckSquare, Coffee, BookHeart, 
  Settings 
} from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { label: 'My Tasks', icon: CheckSquare, path: '/tasks' },
    { label: 'Habit Tracker', icon: Coffee, path: '/habits' },
    { label: 'Journal & Minutes', icon: BookHeart, path: '/journal' },
  ];

  return (
    <AppShell
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      className="bg-gray-50 h-screen font-sans"
    >
      <AppShell.Header className="sm:hidden border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700} className="text-gray-700">Life OS</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" className="bg-white border-r border-gray-100 shadow-[2px_0_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col h-full">
          {/* User Profile Snippet */}
          <div className="mb-8 flex items-center gap-3 px-2 py-3 bg-purple-50 rounded-xl border border-purple-100">
            <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" radius="xl" color="grape" />
            <div>
              <Text size="sm" fw={600} className="text-gray-800">My Planner</Text>
              <Text size="xs" c="dimmed">Stay cozy & productive</Text>
            </div>
          </div>

          <ScrollArea className="flex-1 -mx-md px-md">
            <div className="space-y-1">
              <Text size="xs" fw={700} c="dimmed" className="px-3 mb-2 tracking-wider">WORKSPACE</Text>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink 
                    key={item.path} 
                    to={item.path} 
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive 
                        ? 'bg-purple-100 text-purple-900 shadow-sm' 
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                    `}
                  >
                    <item.icon size={18} className={isActive ? 'text-purple-600' : 'text-gray-400'} />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>

            <div className="mt-8">
              <Text size="xs" fw={700} c="dimmed" className="px-3 mb-2 tracking-wider">DATABASES</Text>
              {['Reading List', 'Movie Watchlist', 'Finance', 'Ideas'].map((item) => (
                <UnstyledButton key={item} className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg group transition-colors">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-blue-300 group-hover:text-blue-500 transition-colors" />
                    <span>{item}</span>
                  </div>
                </UnstyledButton>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t border-gray-100 pt-4 mt-4">
             <UnstyledButton className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-gray-700 transition-colors">
                <Settings size={16} />
                <span>Settings</span>
             </UnstyledButton>
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main className="bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto pt-4 sm:pt-6 pb-20">
            <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}