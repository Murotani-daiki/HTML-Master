import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from './components/Grid';
import { Keyboard } from './components/Keyboard';
import { Modal } from './components/Modal';
import { WORDS, WORD_LENGTH, MAX_CHALLENGES } from './constants';
import { CharStatus } from './types';
import { getHint, getWordDefinition, checkWordValidity } from './services/geminiService';

function App() {
  const [solution, setSolution] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [isInvalidShake, setIsInvalidShake] = useState(false);
  
  // AI Features State
  const [showHintModal, setShowHintModal] = useState(false);
  const [hintContent, setHintContent] = useState<string>("");
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [showDefinitionModal, setShowDefinitionModal] = useState(false);
  const [definitionContent, setDefinitionContent] = useState<string>("");
  
  // Validation State
  const [isChecking, setIsChecking] = useState(false);
  const [isRevealingResult, setIsRevealingResult] = useState(false);

  useEffect(() => {
    // Initial Load: Pick random word
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setSolution(randomWord);
  }, []);

  useEffect(() => {
    if (gameStatus !== 'playing') {
      const handleGameOver = async () => {
        // Wait a bit for the grid flip animations to finish
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        setIsRevealingResult(true);
        const def = await getWordDefinition(solution);
        setDefinitionContent(def);
        
        setIsRevealingResult(false);
        setShowDefinitionModal(true);
      };
      handleGameOver();
    }
  }, [gameStatus, solution]);

  const onChar = useCallback((char: string) => {
    setGameStatus((status) => {
      if (status !== 'playing') return status;
      setIsChecking((checking) => {
        if (checking) return checking;
        setCurrentGuess((prev) => {
          if (prev.length >= WORD_LENGTH) return prev;
          return prev + char;
        });
        return checking;
      });
      return status;
    });
  }, []);

  const onDelete = useCallback(() => {
    setGameStatus((status) => {
      if (status !== 'playing') return status;
      setIsChecking((checking) => {
        if (checking) return checking;
        setCurrentGuess((prev) => prev.slice(0, -1));
        return checking;
      });
      return status;
    });
  }, []);

  const triggerShake = useCallback(() => {
    setIsInvalidShake(true);
    setTimeout(() => setIsInvalidShake(false), 500);
  }, []);

  const submitGuess = useCallback((guess: string) => {
    setGuesses((prev) => {
      const newGuesses = [...prev, guess];
      if (guess === solution) {
        setGameStatus('won');
      } else if (newGuesses.length >= MAX_CHALLENGES) {
        setGameStatus('lost');
      }
      return newGuesses;
    });
    setCurrentGuess("");
  }, [solution]);

  const onEnter = useCallback(async () => {
    if (gameStatus !== 'playing' || isChecking || isRevealingResult) return;

    if (currentGuess.length !== WORD_LENGTH) {
      triggerShake();
      return;
    }

    if (WORDS.includes(currentGuess)) {
      submitGuess(currentGuess);
      return;
    }

    setIsChecking(true);
    const isValid = await checkWordValidity(currentGuess);
    setIsChecking(false);

    if (isValid) {
      submitGuess(currentGuess);
    } else {
      triggerShake();
    }
  }, [gameStatus, isChecking, currentGuess, solution, submitGuess, triggerShake, isRevealingResult]);

  const requestHint = async () => {
    if (gameStatus !== 'playing') return;
    setShowHintModal(true);
    if (!hintContent) {
      setIsLoadingHint(true);
      const hint = await getHint(solution, guesses);
      setHintContent(hint);
      setIsLoadingHint(false);
    }
  };

  const resetGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setSolution(randomWord);
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus('playing');
    setHintContent("");
    setDefinitionContent("");
    setShowDefinitionModal(false);
    setShowHintModal(false);
    setIsRevealingResult(false);
  };

  const getCharStatuses = () => {
    const statuses: { [key: string]: CharStatus } = {};

    guesses.forEach((guess) => {
      guess.split('').forEach((letter, i) => {
        if (!statuses[letter]) {
          statuses[letter] = CharStatus.Absent;
        }

        if (letter === solution[i]) {
          statuses[letter] = CharStatus.Correct;
        } else if (statuses[letter] !== CharStatus.Correct && solution.includes(letter)) {
          statuses[letter] = CharStatus.Present;
        }
      });
    });
    return statuses;
  };

  return (
    <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-900 text-white relative">
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wider">GEMINI WORDLE</h1>
        <div className="flex gap-2">
            {/* Show Result Button (Only if game is over and not loading) */}
            {gameStatus !== 'playing' && !isRevealingResult && (
              <button 
                onClick={() => setShowDefinitionModal(true)}
                className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors animate-pulse"
                title="結果を再表示"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            )}

            <button 
              onClick={requestHint}
              disabled={gameStatus !== 'playing' || isChecking}
              className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-colors"
              title="AI Hint"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </button>
            
            <button 
                onClick={resetGame}
                disabled={isChecking}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors disabled:opacity-50"
                title="Restart"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </button>
        </div>
      </header>

      <div className="relative flex-grow flex flex-col justify-center">
        <Grid 
          solution={solution} 
          guesses={guesses} 
          currentGuess={currentGuess}
          isInvalidShake={isInvalidShake}
        />
        
        {/* Loading Overlay for AI Analysis */}
        {(isChecking || isRevealingResult) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-20 backdrop-blur-sm">
                <div className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-2xl border border-gray-600">
                    <div className="relative h-12 w-12 mb-4">
                        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <span className="text-lg font-bold text-white tracking-wide">
                        {isRevealingResult ? "AIが解説を作成中..." : "単語を判定中..."}
                    </span>
                    <p className="text-xs text-gray-400 mt-2">Gemini 3 Flash を使用しています</p>
                </div>
            </div>
        )}
      </div>

      <Keyboard 
        onChar={onChar} 
        onDelete={onDelete} 
        onEnter={onEnter} 
        charStatuses={getCharStatuses()}
        disabled={gameStatus !== 'playing' || isChecking || isRevealingResult}
      />

      <Modal isOpen={showHintModal} onClose={() => setShowHintModal(false)} title="Gemini AI Hint">
        {isLoadingHint ? (
            <div className="flex flex-col items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mb-4"></div>
                <p>ヒントを生成中...</p>
            </div>
        ) : (
            <div className="whitespace-pre-wrap">
                <p className="mb-2 italic text-gray-400 text-sm">現在の盤面から、答えに近づくためのヒントです。</p>
                <p className="text-lg font-medium">{hintContent}</p>
            </div>
        )}
      </Modal>

      <Modal isOpen={showDefinitionModal} onClose={() => setShowDefinitionModal(false)} title={gameStatus === 'won' ? "🎉 正解！" : "残念..."}>
         <div className="text-center">
            <p className="text-3xl font-bold tracking-widest mb-4 bg-gray-900 py-3 rounded-lg border border-gray-700 text-indigo-400">{solution}</p>
            
            {gameStatus === 'won' ? (
                <p className="text-green-400 mb-6 font-bold text-lg">おめでとうございます！</p>
            ) : (
                <p className="text-red-400 mb-6 font-bold">正解は上記の単語でした。</p>
            )}

            <div className="border-t border-gray-700 pt-5 text-left">
                <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">AI Explanation</h3>
                {definitionContent ? (
                     <div className="text-sm whitespace-pre-wrap leading-relaxed text-gray-300">{definitionContent}</div>
                ) : (
                    <p className="text-sm text-gray-500 italic">解説を取得できませんでした。</p>
                )}
            </div>

            <button 
                onClick={resetGame}
                className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-indigo-500/40 active:scale-95"
            >
                もう一度遊ぶ
            </button>
         </div>
      </Modal>
    </div>
  );
}

export default App;