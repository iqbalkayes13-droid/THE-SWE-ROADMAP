import React, { useState, useEffect } from 'react';
import { X, Clock, Calendar, Sparkles, Check, Hash } from 'lucide-react';
import { StudySession } from '../types/roadmap';

interface LogSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (session: Omit<StudySession, 'id' | 'timestamp'>) => void;
  defaultDate: string;
  defaultCategory?: string;
  initialMinutes?: number;
}

const CATEGORIES = [
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

export const LogSessionModal: React.FC<LogSessionModalProps> = ({
  isOpen,
  onClose,
  onSave,
  defaultDate,
  defaultCategory = 'DSA',
  initialMinutes = 60,
}) => {
  const [date, setDate] = useState(defaultDate);
  const [durationMinutes, setDurationMinutes] = useState(initialMinutes);
  const [category, setCategory] = useState(defaultCategory);
  const [topicSummary, setTopicSummary] = useState('');
  const [problemsSolved, setProblemsSolved] = useState<number>(0);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setDate(defaultDate || new Date().toISOString().split('T')[0]);
      if (defaultCategory) setCategory(defaultCategory);
      if (initialMinutes) setDurationMinutes(initialMinutes);
    }
  }, [isOpen, defaultDate, defaultCategory, initialMinutes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicSummary.trim()) return;

    onSave({
      date,
      durationMinutes: Number(durationMinutes) || 30,
      category,
      topicSummary: topicSummary.trim(),
      problemsSolved: Number(problemsSolved) || 0,
      notes: notes.trim() || undefined
    });

    setTopicSummary('');
    setNotes('');
    setProblemsSolved(0);
    onClose();
  };

  const quickMinutes = [25, 45, 60, 90, 120];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div 
        id="log-session-modal-card"
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-200">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Record Study Session</h3>
              <p className="text-xs text-slate-400">Add to your tuition progress timeline</p>
            </div>
          </div>
          <button
            id="close-log-session-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          {/* Date & Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Session Date</span>
              </label>
              <input
                id="log-session-date-input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Curriculum Track / Subject
              </label>
              <select
                id="log-session-category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration with quick presets */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Study Duration (Minutes)</span>
              </label>
              <span className="font-mono text-blue-600 font-bold">
                {durationMinutes} min ({(durationMinutes / 60).toFixed(1)} hrs)
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              {quickMinutes.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setDurationMinutes(m)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                    durationMinutes === m
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {m}m
                </button>
              ))}
            </div>

            <input
              id="log-session-duration-slider"
              type="range"
              min="5"
              max="360"
              step="5"
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Topic Summary */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Topic Studied / Action Completed *
            </label>
            <input
              id="log-session-topic-input"
              type="text"
              required
              placeholder="e.g. Practiced LeetCode sliding window, watched Abdul Bari AVL Trees"
              value={topicSummary}
              onChange={(e) => setTopicSummary(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden"
            />
          </div>

          {/* Problems Solved Count */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-slate-400" />
              <span>Problems Solved (LeetCode / HackerRank / Codeforces)</span>
            </label>
            <input
              id="log-session-problems-input"
              type="number"
              min="0"
              max="50"
              value={problemsSolved}
              onChange={(e) => setProblemsSolved(Number(e.target.value))}
              className="w-32 px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden"
            />
          </div>

          {/* Notes / Reflections */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Key Reflections & Insights (Optional)
            </label>
            <textarea
              id="log-session-notes-input"
              rows={2}
              placeholder="Any key insights, bugs solved, or doubts for the next session..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden"
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              id="save-session-submit-btn"
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm shadow-blue-200"
            >
              <Check className="w-4 h-4 text-white" />
              <span>Save Session</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
