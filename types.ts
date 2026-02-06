export enum CharStatus {
  Absent = 'absent',
  Present = 'present',
  Correct = 'correct',
}

export type WordList = string[];

export interface GameStats {
  winCount: number;
  gamesPlayed: number;
  currentStreak: number;
  maxStreak: number;
}

export interface StoredGameState {
  guesses: string[];
  solution: string;
  lastPlayedTs: number;
}
