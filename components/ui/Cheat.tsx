"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { Shield, AlertTriangle, Trophy, Timer, Crosshair, Target, Zap, Bug } from 'lucide-react';

interface Target {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}
interface CheatDetection {
  impossibleSpeed: boolean;
  automatedClicking: boolean;
  suspiciousPattern: boolean;
}


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState<Target[]>([]);
  const [gameTime, setGameTime] = useState(30);
  const [accuracy, setAccuracy] = useState(100);
  const [totalShots, setTotalShots] = useState(0);
  const [cheatDetected, setCheatDetected] = useState<CheatDetection>({
    impossibleSpeed: false,
    automatedClicking: false,
    suspiciousPattern: false,
  });
  const [isBanned, setIsBanned] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [averageReactionTime, setAverageReactionTime] = useState(0);
  const [isCheatEnabled, setIsCheatEnabled] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const clickTimestamps = useRef<number[]>([]);
  const clickPositions = useRef<{x: number, y: number}[]>([]);
  const reactionTimes = useRef<number[]>([]);
  const autoClickInterval = useRef<number | null>(null);

  const showCheatAlert = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const startGame = () => {
    if (isBanned) return;
    setIsPlaying(true);
    setScore(0);
    setGameTime(30);
    setAccuracy(100);
    setTotalShots(0);
    setTargets([createTarget()]);
    clickTimestamps.current = [];
    clickPositions.current = [];
    reactionTimes.current = [];
  };

  const createTarget = (): Target => {
    const gameArea = gameAreaRef.current?.getBoundingClientRect();
    if (!gameArea) return { id: Date.now(), x: 50, y: 50, timestamp: Date.now() };

    const padding = 40;
    const x = Math.random() * (gameArea.width - padding * 2) + padding;
    const y = Math.random() * (gameArea.height - padding * 2) + padding;

    return {
      id: Date.now(),
      x,
      y,
      timestamp: Date.now(),
    };
  };

  const checkForCheating = (clickX: number, clickY: number, targetX: number, targetY: number) => {
    const currentTime = Date.now();
    clickTimestamps.current.push(currentTime);
    clickPositions.current.push({x: clickX, y: clickY});

    // Check for impossible reaction times (< 100ms)
    const reactionTime = currentTime - targets[0].timestamp;
    reactionTimes.current.push(reactionTime);
    if (reactionTime < 100) {
      setCheatDetected(prev => ({ ...prev, impossibleSpeed: true }));
      showCheatAlert('Impossible reaction time detected!');
    }

    // Check for automated clicking patterns
    if (clickTimestamps.current.length >= 5) {
      const recentIntervals = clickTimestamps.current.slice(-5).map((time, i, arr) => 
        i > 0 ? time - arr[i - 1] : 0
      ).slice(1);

      const isConsistent = recentIntervals.every((interval, i, arr) => 
        i > 0 ? Math.abs(interval - arr[i - 1]) < 10 : true
      );

      if (isConsistent) {
        setCheatDetected(prev => ({ ...prev, automatedClicking: true }));
        showCheatAlert('Automated clicking detected!');
      }
    }

    // Check for suspicious movement patterns (too precise)
    if (clickPositions.current.length >= 5) {
      const recentPositions = clickPositions.current.slice(-5);
      const distances = recentPositions.map((pos, i, arr) => 
        i > 0 ? Math.hypot(pos.x - arr[i - 1].x, pos.y - arr[i - 1].y) : 0
      ).slice(1);

      const isTooPrecise = distances.every((dist, i, arr) => 
        i > 0 ? Math.abs(dist - arr[i - 1]) < 2 : true
      );

      if (isTooPrecise) {
        setCheatDetected(prev => ({ ...prev, suspiciousPattern: true }));
        showCheatAlert('Suspicious aiming pattern detected!');
      }
    }
  };

  const simulateClick = () => {
    if (!isPlaying || targets.length === 0 || !gameAreaRef.current) return;
    
    const target = targets[0];
    const gameArea = gameAreaRef.current.getBoundingClientRect();
    
    // Create a synthetic mouse event
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: gameArea.left + target.x,
      clientY: gameArea.top + target.y
    });
    
    // Directly call handleClick with the target coordinates
    handleClick({
      clientX: gameArea.left + target.x,
      clientY: gameArea.top + target.y,
      preventDefault: () => {},
      stopPropagation: () => {},
    } as React.MouseEvent<HTMLDivElement>);
  };

  const toggleCheat = () => {
    setIsCheatEnabled(prev => {
      if (!prev) {
        // Start auto-clicking when enabled
        autoClickInterval.current = window.setInterval(simulateClick, 200) as unknown as number;
      } else {
        // Stop auto-clicking when disabled
        if (autoClickInterval.current) {
          clearInterval(autoClickInterval.current);
          autoClickInterval.current = null;
        }
      }
      return !prev;
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPlaying || isBanned) return;

    const gameArea = gameAreaRef.current?.getBoundingClientRect();
    if (!gameArea || targets.length === 0) return;

    const clickX = e.clientX - gameArea.left;
    const clickY = e.clientY - gameArea.top;
    const target = targets[0];
    const distance = Math.hypot(clickX - target.x, clickY - target.y);
    
    setTotalShots(prev => prev + 1);

    if (distance < 20) { // Hit radius
      checkForCheating(clickX, clickY, target.x, target.y);
      setScore(prev => prev + 1);
      setTargets([createTarget()]);
      
      const reactionTime = Date.now() - target.timestamp;
      const avgTime = Math.round(
        (averageReactionTime * (score) + reactionTime) / (score + 1)
      );
      setAverageReactionTime(avgTime);
    }

    setAccuracy(Math.round((score / (totalShots + 1)) * 100));
  };

  useEffect(() => {
    if (!isPlaying) {
      if (autoClickInterval.current) {
        clearInterval(autoClickInterval.current);
        autoClickInterval.current = null;
      }
      setIsCheatEnabled(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setGameTime(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const cheatsDetected = Object.values(cheatDetected).filter(Boolean).length;
    if (cheatsDetected >= 2) {
      setIsBanned(true);
      showCheatAlert('Multiple violations detected - Account banned!');
      setIsPlaying(false);
    }
  }, [cheatDetected]);


  return (
    <div className="min-h-screen bg-black text-green-400 p-8">
      <div className="max-w-4xl mx-auto">
        {showAlert && (
          <div className="fixed top-4 right-4 bg-black border-2 border-red-500 text-red-500 p-4 rounded-lg shadow-lg shadow-red-500/20 animate-fade-in">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">{alertMessage}</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Crosshair className="w-8 h-8" />
            FPS Aim Trainer
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCheat}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isCheatEnabled 
                  ? 'bg-red-500 text-black hover:bg-red-600' 
                  : 'bg-green-500/20 hover:bg-green-500/30'
              }`}
            >
              <Bug className="w-5 h-5" />
              {isCheatEnabled ? 'Disable Auto-Aim' : 'Enable Auto-Aim'}
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Anti-Cheat Active</span>
            </div>
          </div>
        </div>

        {isBanned ? (
          <div className="bg-black p-8 rounded-lg border-2 border-red-500 shadow-lg shadow-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">Account Banned</h2>
            </div>
            <p className="text-red-400">
              Suspicious activity detected. Multiple anti-cheat violations have resulted in a ban.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-black p-4 rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5" />
                  <span>Time</span>
                </div>
                <span className="text-2xl font-bold">{gameTime}s</span>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5" />
                  <span>Score</span>
                </div>
                <span className="text-2xl font-bold">{score}</span>
              </div>

              <div className="bg-black p-4 rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5" />
                  <span>Accuracy</span>
                </div>
                <span className="text-2xl font-bold">{accuracy}%</span>
              </div>

              <div className="bg-black p-4 rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5" />
                  <span>Avg. Reaction</span>
                </div>
                <span className="text-2xl font-bold">{averageReactionTime}ms</span>
              </div>
            </div>

            <div 
              ref={gameAreaRef}
              onClick={handleClick}
              className="relative w-full h-[600px] bg-black rounded-lg border border-green-500/30 shadow-lg shadow-green-500/20 mb-6 cursor-crosshair overflow-hidden"
            >
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={startGame}
                    className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Start Game
                  </button>
                </div>
              )}
              {targets.map(target => (
                <div
                  key={target.id}
                  className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500 flex items-center justify-center"
                  style={{ left: target.x, top: target.y }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              ))}
            </div>

            <div className="text-center text-green-500/70">
              <p>Click the targets as quickly and accurately as possible.</p>
              <p>Anti-cheat system monitors for suspicious patterns and automated inputs.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
