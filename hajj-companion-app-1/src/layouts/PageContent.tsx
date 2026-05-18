import React from 'react';

export const PageContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex-1 w-full max-w-3xl mx-auto overflow-y-auto pb-[100px] pt-safe px-4 pt-4">
      {children}
    </main>
  );
};
