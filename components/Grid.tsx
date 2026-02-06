import React from 'react';
import { Cell } from './Cell';
import { CharStatus, WordList } from '../types';
import { MAX_CHALLENGES, WORD_LENGTH } from '../constants';

interface GridProps {
  solution: string;
  guesses: string[];
  currentGuess: string;
  isInvalidShake: boolean;
}

export const Grid: React.FC<GridProps> = ({ solution, guesses, currentGuess, isInvalidShake }) => {
  const empties = guesses.length < MAX_CHALLENGES - 1 
    ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length)) 
    : [];

  const getGuessStatuses = (guess: string): CharStatus[] => {
    const splitSolution = solution.split('');
    const splitGuess = guess.split('');
    const statuses = Array(WORD_LENGTH).fill(CharStatus.Absent);
    const solutionCharsTaken = splitSolution.map(() => false);

    // First pass: Correct
    splitGuess.forEach((letter, i) => {
      if (letter === splitSolution[i]) {
        statuses[i] = CharStatus.Correct;
        solutionCharsTaken[i] = true;
      }
    });

    // Second pass: Present
    splitGuess.forEach((letter, i) => {
      if (statuses[i] !== CharStatus.Correct) {
        const indexOfPresentChar = splitSolution.findIndex((x, index) => x === letter && !solutionCharsTaken[index]);
        if (indexOfPresentChar > -1) {
          statuses[i] = CharStatus.Present;
          solutionCharsTaken[indexOfPresentChar] = true;
        }
      }
    });

    return statuses;
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow py-2">
      {/* Completed Guesses */}
      {guesses.map((guess, i) => {
        const statuses = getGuessStatuses(guess);
        return (
          <div key={i} className="flex mb-1.5">
            {guess.split('').map((letter, j) => (
              <Cell key={j} value={letter} status={statuses[j]} isCompleted position={j} />
            ))}
          </div>
        );
      })}

      {/* Current Guess */}
      {guesses.length < MAX_CHALLENGES && (
        <div className="flex mb-1.5">
          {Array.from(Array(WORD_LENGTH)).map((_, j) => (
            <Cell 
                key={j} 
                value={currentGuess[j]} 
                isInvalid={isInvalidShake}
            />
          ))}
        </div>
      )}

      {/* Empty Rows */}
      {empties.map((_, i) => (
        <div key={i} className="flex mb-1.5">
          {Array.from(Array(WORD_LENGTH)).map((_, j) => (
            <Cell key={j} />
          ))}
        </div>
      ))}
    </div>
  );
};
