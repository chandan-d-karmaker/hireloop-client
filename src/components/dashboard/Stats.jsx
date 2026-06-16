// components/dashboard/StatsSection.jsx
import React from 'react';
import { File, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';
import { StatCard } from './StatsCard';

/**
 * StatsSection Component
 * Renders a responsive grid of StatCard components.
 */
export const StatsSection = ({ statsData, sectionTitle }) => {
  
  // Icon mapper function to convert key to icon component
  const getIcon = (iconKey) => {
    switch (iconKey) {
      case 'jobs':
        return <File />; 
      case 'applicants':
        return <Persons />; 
      case 'active':
        return <Thunderbolt />; 
      case 'closed':
        return <CircleCheck />; 
      default:
        return <File />; 
    }
  };

  return (
    <div className="py-16">
      {sectionTitle && (
        <h2 className="text-2xl font-semibold text-white mb-6">{sectionTitle}</h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard 
            key={index} 
            title={stat.title}
            value={stat.value}
            icon={getIcon(stat.iconKey)}
          />
        ))}
      </div>
    </div>
  );
};