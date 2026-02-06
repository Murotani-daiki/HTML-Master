import React from 'react';
import { CharStatus } from '../types';

interface CellProps {
  value?: string;
  status?: CharStatus;
  isCompleted?: boolean;
  position?: number; // 0-4 for delay
  isInvalid?: boolean;
}

export const Cell: React.FC<CellProps> = ({ value, status, isCompleted, position = 0, isInvalid }) => {
  const isFilled = value && !isCompleted;
  const shouldReveal = isCompleted && status;
  
  // Base classes
  let classes = "w-12 h-12 sm:w-14 sm:h-14 border-2 flex items-center justify-center mx-0.5 text-2xl sm:text-3xl font-bold rounded select-none uppercase";
  
  // Animation Logic
  let animationClass = "";
  if (isFilled && !shouldReveal) {
    animationClass = "scale-105 border-gray-400"; // Pop effect when typing
  }
  if (shouldReveal) {
    animationClass = "animate-flip";
  }
  if (isInvalid) {
    animationClass = "animate-shake border-red-500 text-red-500";
  }

  // Color logic
  let colorClasses = "bg-transparent border-gray-700 text-white";
  if (shouldReveal) {
     if (status === CharStatus.Correct) {
       colorClasses = "bg-green-500 border-green-500 text-white";
     } else if (status === CharStatus.Present) {
       colorClasses = "bg-yellow-500 border-yellow-500 text-white";
     } else if (status === CharStatus.Absent) {
       colorClasses = "bg-gray-700 border-gray-700 text-white";
     }
  } else if (value) {
      colorClasses = "border-gray-400 text-white";
  }

  // Delay for flip animation
  const delayClass = shouldReveal ? `animation-delay-${position * 100}` : '';

  return (
    <div className={`${classes} ${colorClasses} ${animationClass} ${delayClass}`} style={{transition: 'all 0.1s'}}>
      {value}
    </div>
  );
};
