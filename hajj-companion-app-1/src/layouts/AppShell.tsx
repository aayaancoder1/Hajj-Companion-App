import React from 'react';
import { BottomNavigation } from './BottomNavigation';
import { FloatingAIButton } from './FloatingAIButton';
import { PageContent } from './PageContent';
import { Outlet } from 'react-router-dom';

export const AppShell: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-background overflow-hidden relative">
      <PageContent>
        <Outlet />
      </PageContent>
      <FloatingAIButton />
      <BottomNavigation />
    </div>
  );
};
