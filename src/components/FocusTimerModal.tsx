import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Check, Sparkles, Flame } from 'lucide-react';

interface FocusTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinishSession: (elapsedMinutes: number) => void;
}

export const FocusTimerModal: React.FC<FocusTimerModalProps> = ({
  isOpen,
  onClose,
  onFinishSession,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerMode, setTimerMode] = useState<'stopwatch' | 'pomodoro'>('stopwatch');
  const [pomoRemaining, setPomoRemaining] = useState(25 * 60);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        if (timerMode === 'stopwatch') {
          setSeconds(prev => prev + 1);
        } else {
          setPomoRemaining(prev => {
            if (prev <= 1) {
              setIsActive(false);
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timerMode]);

  if (!isOpen) return null;

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsActive(false);
    if (timerMode === 'stopwatch') {
      setSeconds(0);
    } else {
      setPomoRemaining(25 * 60);
    }
  };

  const handleFinish = () => {
    setIsActive(false);
    const elapsedMinutes = timerMode === 'stopwatch'
      ? Math.max(1, Math.round(seconds / 60))
      : Math.max(1, Math.round((25 * 60 - pomoRemaining) / 60));
    
    onFinishSession(elapsedMinutes);
  };

  const displayTime = timerMode === 'stopwatch' ? formatTime(seconds) : formatTime(pomoRemaining);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div 
        id="focus-timer-modal-card"
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-center"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <h3 className="text-sm font-bold text-slate-900">Study Focus Timer</h3>
          </div>
          <button
            id="close-timer-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Timer Body */}
        <div className="p-6">
          {/* Mode Switcher */}
          <div className="inline-flex bg-slate-100 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => {
                setIsActive(false);
                setTimerMode('stopwatch');
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                timerMode === 'stopwatch' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Stopwatch
            </button>
            <button
              type="button"
              onClick={() => {
                setIsActive(false);
                setTimerMode('pomodoro');
                setPomoRemaining(25 * 60);
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                timerMode === 'pomodoro' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Pomodoro (25m)
            </button>
          </div>

          {/* Big Time Display */}
          <div className="my-3 font-mono text-5xl font-bold tracking-tight text-slate-900">
            {displayTime}
          </div>

          <p className="text-xs text-slate-400 mb-6">
            {isActive ? 'Deep study session in progress...' : 'Ready to start focusing?'}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <button
              type="button"
              onClick={handleReset}
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              title="Reset timer"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            <button
              id="toggle-timer-active-btn"
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`px-6 py-3 rounded-full text-white font-bold text-sm flex items-center gap-2 transition-all shadow-sm ${
                isActive 
                  ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-200' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
              }`}
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Focus</span>
                </>
              )}
            </button>
          </div>

          {/* Finish & Record Button */}
          <button
            id="finish-timer-session-btn"
            type="button"
            onClick={handleFinish}
            disabled={timerMode === 'stopwatch' ? seconds < 10 : pomoRemaining === 25 * 60}
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors disabled:opacity-40 disabled:hover:bg-blue-50"
          >
            <Check className="w-4 h-4 text-blue-600" />
            <span>Finish & Record Study Log</span>
          </button>
        </div>

      </div>
    </div>
  );
};
