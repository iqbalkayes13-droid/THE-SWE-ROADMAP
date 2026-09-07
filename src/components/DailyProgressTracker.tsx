import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Clock, 
  Calendar as CalIcon, 
  Trophy, 
  Plus, 
  Trash2, 
  Search, 
  CheckCircle2, 
  Timer, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { StudySession } from '../types/roadmap';

interface DailyProgressTrackerProps {
  sessions: StudySession[];
  targetDailyMinutes: number;
  currentStreak: number;
  longestStreak: number;
  onAddSession: (session: Omit<StudySession, 'id' | 'timestamp'>) => void;
  onDeleteSession: (id: string) => void;
  selectedDate: string;
}

export const DailyProgressTracker: React.FC<DailyProgressTrackerProps> = ({
  sessions,
  targetDailyMinutes,
  currentStreak,
  longestStreak,
  onAddSession,
  onDeleteSession,
  selectedDate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Today's stats
  const todayStr = new Date().toISOString().split('T')[0];
  const todaySessions = useMemo(() => {
    return sessions.filter(s => s.date === todayStr);
  }, [sessions, todayStr]);

  const todayTotalMin = useMemo(() => {
    return todaySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  }, [todaySessions]);

  const totalStudyMinutesAllTime = useMemo(() => {
    return sessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  }, [sessions]);

  const totalProblemsSolvedAllTime = useMemo(() => {
    return sessions.reduce((acc, s) => acc + (s.problemsSolved || 0), 0);
  }, [sessions]);

  // Filtered session history
  const filteredSessions = useMemo(() => {
    return [...sessions]
      .sort((a, b) => b.timestamp - a.timestamp)
      .filter(s => {
        const matchesSearch = s.topicSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (s.notes && s.notes.toLowerCase().includes(searchTerm.toLowerCase())) ||
          s.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategoryFilter === 'All' || s.category === selectedCategoryFilter;
        return matchesSearch && matchesCategory;
      });
  }, [sessions, searchTerm, selectedCategoryFilter]);

  const categories = [
    'All',
    'Programming Foundation',
    'DSA',
    'Web Frontend',
    'Web Backend',
    'Full-Stack + AI',
    'AI/ML',
    'Deep Learning & NLP',
    'System Design',
    'German Language',
    'Career & Applications',
    'University / Academic'
  ];

  return (
    <div id="progress-tracker-section" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7 mb-8">
      
      {/* Tracker Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">
            Study Monitor & Analytics
          </span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Daily Study Progress Tracker</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Log and review your tuition sessions, problem solving counts, and daily momentum.
          </p>
        </div>

        {/* Quick Streak & Progress Badges matching Sleek metric counters */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
            <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Current Streak</div>
              <div className="text-sm font-black text-slate-900">{currentStreak} {currentStreak === 1 ? 'day' : 'days'}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
            <Clock className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Today's Study</div>
              <div className="text-sm font-black text-blue-600">{todayTotalMin} / {targetDailyMinutes} min</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
            <Trophy className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Problems Solved</div>
              <div className="text-sm font-black text-slate-900">{totalProblemsSolvedAllTime} solved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar for Today matching Sleek segmented/rounded pill style */}
      <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Today's Study Goal ({todayTotalMin} min of {targetDailyMinutes} min target)</span>
          </span>
          <span className="text-blue-600 font-mono font-bold">
            {Math.min(100, Math.round((todayTotalMin / targetDailyMinutes) * 100))}%
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, (todayTotalMin / targetDailyMinutes) * 100)}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400 font-medium">
          <span>Overall: {(totalStudyMinutesAllTime / 60).toFixed(1)} total hours logged</span>
          <span>Best streak: {longestStreak} days</span>
        </div>
      </div>

      {/* Recent Sessions History */}
      <div className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span>Study Session History</span>
            <span className="text-xs font-normal text-slate-400">
              ({filteredSessions.length} logged)
            </span>
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <input
                id="session-search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search notes or topics..."
                className="text-xs pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden w-44 sm:w-56"
              />
            </div>

            {/* Category Filter */}
            <select
              id="session-category-filter"
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="text-xs py-1.5 px-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sessions List */}
        {filteredSessions.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-slate-300 rounded-xl bg-slate-50/50">
            <BookOpen className="w-8 h-8 mx-auto text-slate-300 mb-2" />
            <p className="text-xs font-semibold text-slate-700">No study sessions found</p>
            <p className="text-xs text-slate-400 mt-0.5">
              Click "+ Log Study" or select a date on the calendar to record your first study sprint.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                id={`session-card-${session.id}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all gap-3"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {session.topicSummary}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {session.category}
                    </span>
                    {session.problemsSolved !== undefined && session.problemsSolved > 0 && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                        {session.problemsSolved} problem{session.problemsSolved > 1 ? 's' : ''} solved
                      </span>
                    )}
                  </div>

                  {session.notes && (
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {session.notes}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-blue-600">
                      {session.durationMinutes} min ({(session.durationMinutes / 60).toFixed(1)} hrs)
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 justify-end">
                      <CalIcon className="w-3 h-3" />
                      <span>{session.date}</span>
                    </div>
                  </div>

                  <button
                    id={`delete-session-${session.id}`}
                    type="button"
                    onClick={() => onDeleteSession(session.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Delete session"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
