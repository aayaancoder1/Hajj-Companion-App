import React from 'react';
import { BottomNavigation } from './BottomNavigation';
import { FloatingAIButton } from './FloatingAIButton';
import { PageContent } from './PageContent';
import { Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PageLoader = () => (
  <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] text-primary/50">
    <Loader2 className="animate-spin w-8 h-8 mb-4" />
    <p className="text-sm font-medium animate-pulse">Loading experience...</p>
  </div>
);

export const AppShell: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-background overflow-hidden relative">
      <PageContent>
        <React.Suspense fallback={<PageLoader />}>
          <Outlet />
        </React.Suspense>
      </PageContent>
      <FloatingAIButton />
      <BottomNavigation />
    </div>
  );
};
