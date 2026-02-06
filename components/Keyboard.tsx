import React, { useEffect } from 'react';
import { Key } from './Key';
import { CharStatus } from '../types';

interface KeyboardProps {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  charStatuses: { [key: string]: CharStatus };
  disabled: boolean;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  onChar,
  onDelete,
  onEnter,
  charStatuses,
  disabled
}) => {
  const onClick = (value: string) => {
    if (disabled) return;
    if (value === 'ENTER') {
      onEnter();
    } else if (value === 'DELETE') {
      onDelete();
    } else {
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (disabled) return;

      // Enter key
      if (e.key === 'Enter') {
        e.preventDefault();
        onEnter();
        return;
      }

      // Backspace or Delete key
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        onDelete();
        return;
      }

      // Alphabet keys
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        onChar(key);
      }
    };

    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [onEnter, onDelete, onChar, disabled]);

  return (
    <div className="w-full max-w-lg mx-auto px-2 pb-6">
      <div className="flex justify-center mb-1">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <Key key={key} value={key} onClick={onClick} status={charStatuses[key]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        <div className="flex-[0.5]" />
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <Key key={key} value={key} onClick={onClick} status={charStatuses[key]} />
        ))}
        <div className="flex-[0.5]" />
      </div>
      <div className="flex justify-center">
        <Key value="ENTER" onClick={onClick} isSpecial />
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <Key key={key} value={key} onClick={onClick} status={charStatuses[key]} />
        ))}
        <Key value="DELETE" onClick={onClick} isSpecial />
      </div>
    </div>
  );
};