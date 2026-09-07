import React from 'react';
import { Calendar, Lock, Unlock, Timer, BookOpen, CheckSquare, Sparkles, Award } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  currentMonthId: number;
  totalHoursStudied: number;
  currentStreak: number;
  isLocked: boolean;
  onToggleLock: () => void;
  onOpenTimer: () => void;
  onOpenSyllabus: () => void;
  onOpenSources: () => void;
  onOpenLogModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMonthId,
  totalHoursStudied,
  currentStreak,
  isLocked,
  onToggleLock,
  onOpenTimer,
  onOpenSyllabus,
  onOpenSources,
  onOpenLogModal,
}) => {
  const currentYear = currentMonthId <= 12 ? 1 : currentMonthId <= 24 ? 2 : 3;
  const overallProgress = Math.min(100, Math.round((currentMonthId / 36) * 100));

  return (
    <header id="app-header" className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          
          {/* Logo & App Title matching Sleek theme */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 truncate">
                  SWE Roadmap <span className="text-slate-400 font-normal text-xs sm:text-sm">v3.0</span>
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-100">
                  Year 0{currentYear} • M{currentMonthId < 10 ? `0${currentMonthId}` : currentMonthId}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate hidden md:block">
                Mission Germany Masters & Big Tech SWE • 36-Month Path
              </p>
            </div>
          </div>

          {/* Center Progress & Stats matching Sleek Header */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-slate-500 font-medium">Streak:</span>
              <strong className="font-bold text-slate-900">{currentStreak} {currentStreak === 1 ? 'day' : 'days'}</strong>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-slate-500 font-medium">Study Log:</span>
              <strong className="font-bold text-slate-900">{totalHoursStudied.toFixed(1)} hrs</strong>
            </div>

            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total Progress</span>
                <span className="text-xs font-mono font-bold text-slate-700">{overallProgress}%</span>
              </div>
              <div className="w-28 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex items-center gap-2">
            <PWAInstallButton variant="navbar" />

            <button
              id="nav-log-session-btn"
              onClick={onOpenLogModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm shadow-blue-200"
              title="Log today's study session"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-100" />
              <span>+ Log Study</span>
            </button>

            <button
              id="nav-timer-btn"
              onClick={onOpenTimer}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              title="Focus Stopwatch & Timer"
            >
              <Timer className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Timer</span>
            </button>

            <button
              id="nav-syllabus-btn"
              onClick={onOpenSyllabus}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              title="Detailed Sub-topic Syllabus"
            >
              <CheckSquare className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Syllabus</span>
            </button>

            <button
              id="nav-sources-btn"
              onClick={onOpenSources}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              title="Source Cheat-Sheet & Academic Tips"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Sources</span>
            </button>

            {/* Privacy Lock Toggle */}
            <button
              id="nav-privacy-lock-btn"
              onClick={onToggleLock}
              className={`p-2 rounded-lg text-xs transition-colors border ${
                isLocked
                  ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title={isLocked ? "Private Access (Locked)" : "Lock Private Access"}
            >
              {isLocked ? (
                <Lock className="w-4 h-4 text-amber-700" />
              ) : (
                <Unlock className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
