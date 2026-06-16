// components/dashboard/StatCard.jsx
import React from 'react';
import { Card } from '@heroui/react';
import { twMerge } from 'tailwind-merge';

/**
 * StatCard Component
 * Renders a single statistical card based on Hero UI and Tailwind CSS.
 */
export const StatCard = ({ icon, title, value, className }) => {
  return (
    <Card 
      className={twMerge(
        "min-w-70 bg-[#1A1A1A] border-none shadow-none rounded-xl", 
        className
      )}
    >
      {/* Updated to use Card.Content per the new HeroUI API */}
      <Card.Content className="flex flex-col gap-4 p-5">
        {/* Icon Container with a slightly lighter background */}
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#262626]">
          <div className="w-6 h-6 flex items-center justify-center text-neutral-300">
            {icon}
          </div>
        </div>
        
        {/* Title and Value */}
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-neutral-400">{title}</p>
          <p className="text-4xl font-extrabold text-white tracking-tight">{value}</p>
        </div>
      </Card.Content>
    </Card>
  );
};