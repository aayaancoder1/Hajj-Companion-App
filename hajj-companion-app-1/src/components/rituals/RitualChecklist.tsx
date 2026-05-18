import React from 'react';
import { ChecklistItem } from './ChecklistItem';
import { useAppStore } from '../../store';
import { ritualChecklist } from '../../data/ritualChecklist';

interface RitualChecklistProps {
  ids: string[];
}

export const RitualChecklist: React.FC<RitualChecklistProps> = ({ ids }) => {
  const { ritualProgress, toggleRitualTask } = useAppStore();
  
  const tasks = ids
    .map(id => ritualChecklist.find(item => item.id === id))
    .filter((task): task is NonNullable<typeof task> => Boolean(task));

  if (tasks.length === 0) return null;

  return (
    <div className="flex flex-col gap-1 mt-4 border-t border-surface-container pt-4">
      <h4 className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 px-1">
        Checklist
      </h4>
      {tasks.map(task => (
        <ChecklistItem 
          key={task.id} 
          label={task.label} 
          isCompleted={!!ritualProgress[task.id]} 
          onToggle={() => toggleRitualTask(task.id)} 
        />
      ))}
    </div>
  );
};
