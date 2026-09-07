import { StudySession, UserProgress } from '../types/roadmap';

const STORAGE_KEY = 'tuition_calendar_swe_roadmap_v1';

const DEFAULT_PROGRESS: UserProgress = {
  completedSubtopics: [],
  sessions: [
    {
      id: 'sample-session-1',
      date: new Date().toISOString().split('T')[0],
      durationMinutes: 90,
      category: 'DSA',
      topicSummary: 'Solved Two Sum & Valid Anagram on LeetCode; reviewed Big-O',
      problemsSolved: 2,
      notes: 'Understood HashMap O(1) lookup vs O(n^2) nested loop.',
      timestamp: Date.now() - 3600000
    }
  ],
  targetDailyMinutes: 120, // 2 hours/day default
  personalPin: '1234', // default private pin
  isLocked: false,
  startDate: '2026-09-01'
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : DEFAULT_PROGRESS.sessions,
      completedSubtopics: Array.isArray(parsed.completedSubtopics) ? parsed.completedSubtopics : []
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(data: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
}

// Calculate streaks
export function calculateStreak(sessions: StudySession[]): { currentStreak: number; longestStreak: number } {
  if (!sessions || sessions.length === 0) return { currentStreak: 0, longestStreak: 0 };

  const sessionDates = Array.from(new Set(sessions.map(s => s.date))).sort().reverse();
  if (sessionDates.length === 0) return { currentStreak: 0, longestStreak: 0 };

  const today = new Date().toISOString().split('T')[0];
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toISOString().split('T')[0];

  let currentStreak = 0;
  let checkDate = new Date();

  // If didn't study today, check if studied yesterday
  if (!sessionDates.includes(today)) {
    if (!sessionDates.includes(yesterday)) {
      currentStreak = 0;
    } else {
      checkDate = yesterdayDate;
    }
  }

  if (sessionDates.includes(today) || sessionDates.includes(yesterday)) {
    let tempDate = new Date(checkDate);
    while (true) {
      const dateStr = tempDate.toISOString().split('T')[0];
      if (sessionDates.includes(dateStr)) {
        currentStreak++;
        tempDate.setDate(tempDate.getDate() - 1);
      } else {
        break;
      }
    }
  }

  // Longest streak
  const sortedDatesAsc = Array.from(new Set(sessions.map(s => s.date))).sort();
  let longestStreak = 0;
  let running = 0;
  let prevTime: number | null = null;

  for (const dStr of sortedDatesAsc) {
    const currTime = new Date(dStr).getTime();
    if (prevTime === null) {
      running = 1;
    } else {
      const diffDays = Math.round((currTime - prevTime) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        running++;
      } else if (diffDays > 1) {
        running = 1;
      }
    }
    prevTime = currTime;
    if (running > longestStreak) longestStreak = running;
  }

  return { currentStreak, longestStreak: Math.max(longestStreak, currentStreak) };
}
