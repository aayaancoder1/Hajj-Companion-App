import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ title, subtitle, children }) => {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
};
