import React from 'react';
import { CharStatus } from '../types';

interface KeyProps {
  value: string;
  width?: number;
  status?: CharStatus;
  onClick: (value: string) => void;
  isSpecial?: boolean;
}

export const Key: React.FC<KeyProps> = ({
  value,
  status,
  onClick,
  isSpecial = false,
}) => {
  const baseClasses = "flex items-center justify-center rounded font-bold cursor-pointer select-none transition-colors duration-100 uppercase";
  
  let colorClasses = "bg-gray-700 hover:bg-gray-600 text-white";
  if (status === CharStatus.Correct) {
    colorClasses = "bg-green-500 hover:bg-green-600 text-white";
  } else if (status === CharStatus.Present) {
    colorClasses = "bg-yellow-500 hover:bg-yellow-600 text-white";
  } else if (status === CharStatus.Absent) {
    colorClasses = "bg-gray-800 text-gray-400"; // Darker for absent
  }

  const sizeClasses = isSpecial ? "px-2 sm:px-4 text-xs sm:text-sm" : "flex-1 text-sm sm:text-lg";
  const heightClass = "h-14";

  return (
    <div
      className={`${baseClasses} ${colorClasses} ${sizeClasses} ${heightClass} mx-0.5`}
      onClick={() => onClick(value)}
    >
      {value === 'DELETE' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12l-2.25 2.25m-2.25-2.25l-2.25 2.25m0 0l-2.25-2.25m2.25 2.25L9.75 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : value}
    </div>
  );
};
