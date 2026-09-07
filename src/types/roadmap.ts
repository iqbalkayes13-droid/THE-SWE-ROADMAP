export interface LearningResource {
  name: string;
  url?: string;
  type: 'Course' | 'YouTube' | 'Platform' | 'Docs' | 'Practice';
  isFree: boolean;
  notes?: string;
}

export interface RoadmapMonth {
  monthId: number; // 1 to 36
  monthRange: string; // e.g. "মাস ১-২"
  year: 1 | 2 | 3;
  title: string;
  bengaliTitle: string;
  targetCategory: string;
  learningFocus: string[];
  bengaliLearningFocus: string[];
  sources: LearningResource[];
  proof: string;
  bengaliProof: string;
  syllabusCategoryIds: string[];
  keyMilestone?: string;
}

export interface SyllabusItem {
  id: string;
  categoryId: string;
  topic: string;
  bengaliTopic?: string;
  subtopics: string[];
}

export interface SyllabusCategory {
  id: string;
  title: string;
  bengaliTitle: string;
  iconName: string;
  topics: {
    name: string;
    subitems: string[];
  }[];
}

export interface StudySession {
  id: string;
  date: string; // YYYY-MM-DD
  durationMinutes: number;
  category: string;
  topicSummary: string;
  problemsSolved?: number;
  notes?: string;
  timestamp: number;
}

export interface UserProgress {
  completedSubtopics: string[]; // List of completed item IDs
  sessions: StudySession[];
  targetDailyMinutes: number;
  personalPin: string;
  isLocked: boolean;
  startDate: string; // YYYY-MM-DD
}
