import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { TuitionCalendar } from './components/TuitionCalendar';
import { MonthDetailView } from './components/MonthDetailView';
import { DailyProgressTracker } from './components/DailyProgressTracker';
import { AccessLockModal } from './components/AccessLockModal';
import { LogSessionModal } from './components/LogSessionModal';
import { FocusTimerModal } from './components/FocusTimerModal';
import { SyllabusModal } from './components/SyllabusModal';
import { SourcesModal } from './components/SourcesModal';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ROADMAP_MONTHS } from './data/roadmapData';
import { loadUserProgress, saveUserProgress, calculateStreak } from './utils/storage';
import { UserProgress, StudySession } from './types/roadmap';
import { Calendar, ShieldCheck, Flame, BookOpen, Clock, Target } from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [selectedMonthId, setSelectedMonthId] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>(() => new Date().toISOString().split('T')[0]);

  // Modals state
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
  const [logInitialCategory, setLogInitialCategory] = useState<string | undefined>(undefined);
  const [logInitialMinutes, setLogInitialMinutes] = useState<number | undefined>(undefined);

  // Sync to localStorage whenever progress changes
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Streaks calculation
  const { currentStreak, longestStreak } = useMemo(() => {
    return calculateStreak(progress.sessions);
  }, [progress.sessions]);

  // Total hours studied
  const totalHoursStudied = useMemo(() => {
    const totalMinutes = progress.sessions.reduce((sum, s) => sum + s.durationMinutes, 0);
    return totalMinutes / 60;
  }, [progress.sessions]);

  // Selected Month Data
  const currentMonthData = useMemo(() => {
    return ROADMAP_MONTHS.find(m => m.monthId === selectedMonthId) || ROADMAP_MONTHS[0];
  }, [selectedMonthId]);

  // Handlers
  const handleToggleLock = () => {
    setProgress(prev => ({
      ...prev,
      isLocked: !prev.isLocked
    }));
  };

  const handleUnlock = () => {
    setProgress(prev => ({
      ...prev,
      isLocked: false
    }));
  };

  const handleUpdatePin = (newPin: string) => {
    setProgress(prev => ({
      ...prev,
      personalPin: newPin
    }));
  };

  const handleToggleSubtopic = (id: string) => {
    setProgress(prev => {
      const exists = prev.completedSubtopics.includes(id);
      const updated = exists
        ? prev.completedSubtopics.filter(item => item !== id)
        : [...prev.completedSubtopics, id];
      return {
        ...prev,
        completedSubtopics: updated
      };
    });
  };

  const handleAddSession = (sessionData: Omit<StudySession, 'id' | 'timestamp'>) => {
    const newSession: StudySession = {
      ...sessionData,
      id: `session-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      timestamp: Date.now()
    };
    setProgress(prev => ({
      ...prev,
      sessions: [newSession, ...prev.sessions]
    }));
  };

  const handleDeleteSession = (id: string) => {
    setProgress(prev => ({
      ...prev,
      sessions: prev.sessions.filter(s => s.id !== id)
    }));
  };

  const handleOpenLogModal = (initialCategory?: string, initialMinutes?: number) => {
    setLogInitialCategory(initialCategory || currentMonthData.targetCategory);
    setLogInitialMinutes(initialMinutes || 60);
    setIsLogModalOpen(true);
  };

  const handleOpenLogForDate = (date: string) => {
    setSelectedDate(date);
    setLogInitialCategory(currentMonthData.targetCategory);
    setLogInitialMinutes(60);
    setIsLogModalOpen(true);
  };

  const handleFinishTimerSession = (elapsedMinutes: number) => {
    setIsTimerModalOpen(false);
    handleOpenLogModal(currentMonthData.targetCategory, elapsedMinutes);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        currentMonthId={selectedMonthId}
        totalHoursStudied={totalHoursStudied}
        currentStreak={currentStreak}
        isLocked={progress.isLocked}
        onToggleLock={handleToggleLock}
        onOpenTimer={() => setIsTimerModalOpen(true)}
        onOpenSyllabus={() => setIsSyllabusModalOpen(true)}
        onOpenSources={() => setIsSourcesModalOpen(true)}
        onOpenLogModal={() => handleOpenLogModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Banner with Target Summary matching Sleek Interface card layout */}
        <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                Personal Tuition Dashboard
              </span>
              <span className="text-xs text-slate-400">
                • Target: Microsoft / Google SWE + Germany Masters / Job
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
              সফটওয়্যার ইঞ্জিনিয়ারিং মাস্টার রোডম্যাপ (৩ বছরের নমনীয় টাইমলাইন)
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Touch any month or date on the calendar below to see exactly what to practice, learning sources, proof of work, and track your daily tuition sessions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <PWAInstallButton variant="primary" />
            <button
              id="hero-syllabus-btn"
              onClick={() => setIsSyllabusModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              Full 11-Page Syllabus
            </button>
            <button
              id="hero-quick-log-btn"
              onClick={() => handleOpenLogModal()}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors shadow-xs"
            >
              + Log Today's Study
            </button>
          </div>
        </div>

        {/* 1. Tuition Calendar & 36-Month Timeline */}
        <TuitionCalendar
          selectedMonthId={selectedMonthId}
          onSelectMonth={(mId) => setSelectedMonthId(mId)}
          selectedDate={selectedDate}
          onSelectDate={(date) => setSelectedDate(date)}
          sessions={progress.sessions}
          onOpenLogForDate={handleOpenLogForDate}
        />

        {/* 2. Month Detail View: What to Learn + Curated Sources + Deliverable */}
        <MonthDetailView
          month={currentMonthData}
          completedSubtopics={progress.completedSubtopics}
          onToggleSubtopic={handleToggleSubtopic}
          onOpenLogModal={handleOpenLogModal}
        />

        {/* 3. Daily Study Progress Tracker */}
        <DailyProgressTracker
          sessions={progress.sessions}
          targetDailyMinutes={progress.targetDailyMinutes}
          currentStreak={currentStreak}
          longestStreak={longestStreak}
          onAddSession={handleAddSession}
          onDeleteSession={handleDeleteSession}
          selectedDate={selectedDate}
        />

      </main>

      {/* Footer matching Sleek status bar */}
      <footer className="h-14 bg-white border-t border-slate-200 mt-12 text-xs text-slate-500 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs text-slate-400">Database Sync: Active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs text-slate-400">User: Personal Tuition</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSourcesModalOpen(true)}
              className="hover:text-blue-600 transition-colors"
            >
              Source Cheat-Sheet
            </button>
            <span className="text-slate-300">•</span>
            <button 
              onClick={() => setIsSyllabusModalOpen(true)}
              className="hover:text-blue-600 transition-colors"
            >
              Checklist Syllabus
            </button>
            <span className="text-slate-300">•</span>
            <button 
              onClick={handleToggleLock}
              className="hover:text-blue-600 transition-colors"
            >
              {progress.isLocked ? 'Unlock' : 'Lock Dashboard'}
            </button>
          </div>
        </div>
      </footer>

      {/* Private Access Modal (Active when locked) */}
      <AccessLockModal
        isOpen={progress.isLocked}
        correctPin={progress.personalPin}
        onUnlock={handleUnlock}
        onUpdatePin={handleUpdatePin}
      />

      {/* Log Study Session Modal */}
      <LogSessionModal
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
        onSave={handleAddSession}
        defaultDate={selectedDate}
        defaultCategory={logInitialCategory}
        initialMinutes={logInitialMinutes}
      />

      {/* Focus Timer / Stopwatch Modal */}
      <FocusTimerModal
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
        onFinishSession={handleFinishTimerSession}
      />

      {/* Comprehensive Subtopic Syllabus Modal */}
      <SyllabusModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        completedSubtopics={progress.completedSubtopics}
        onToggleSubtopic={handleToggleSubtopic}
      />

      {/* Curated Sources & Academic Guidelines Modal */}
      <SourcesModal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
      />

      {/* Offline connectivity indicator */}
      <OfflineIndicator />

    </div>
  );
}
