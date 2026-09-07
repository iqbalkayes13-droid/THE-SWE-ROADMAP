import React from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  CheckCircle, 
  CheckSquare, 
  Square, 
  Sparkles, 
  FolderGit2, 
  Video, 
  GraduationCap, 
  Globe, 
  Compass, 
  FileCode,
  Target
} from 'lucide-react';
import { RoadmapMonth, SyllabusCategory } from '../types/roadmap';
import { SYLLABUS_CATEGORIES } from '../data/roadmapData';

interface MonthDetailViewProps {
  month: RoadmapMonth;
  completedSubtopics: string[];
  onToggleSubtopic: (id: string) => void;
  onOpenLogModal: (initialCategory?: string) => void;
}

export const MonthDetailView: React.FC<MonthDetailViewProps> = ({
  month,
  completedSubtopics,
  onToggleSubtopic,
  onOpenLogModal,
}) => {
  // Find related syllabus categories for this month
  const relevantCategories = SYLLABUS_CATEGORIES.filter(cat => 
    month.syllabusCategoryIds.includes(cat.id)
  );

  return (
    <div id="month-detail-container" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7 mb-6">
      
      {/* Month Header Banner */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
              Month {month.monthId < 10 ? `0${month.monthId}` : month.monthId} of 36
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
              Year 0{month.year} • {month.monthRange}
            </span>
            <span className="text-xs font-medium px-2 py-1 rounded-lg bg-slate-100 text-slate-600">
              {month.targetCategory}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {month.title}
          </h2>
          <p className="text-sm font-semibold text-blue-600 mt-0.5">
            {month.bengaliTitle}
          </p>
        </div>

        <button
          id="month-quick-study-btn"
          type="button"
          onClick={() => onOpenLogModal(month.targetCategory)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm shadow-blue-200 shrink-0"
        >
          <Sparkles className="w-4 h-4 text-blue-100" />
          <span>Log Study for Month {month.monthId}</span>
        </button>
      </div>

      {/* Main Grid: What to Learn (Left) & Learning Sources (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Left Column: What to Learn + Proof (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. What You Need To Learn (কী শিখবে) matching Sleek blue focus panel */}
          <div className="bg-blue-50 rounded-2xl p-5 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-blue-950">
                কী শিখবে (What You Need to Learn This Month)
              </h3>
            </div>

            {/* English technical topics */}
            <ul className="space-y-2 mb-4 text-xs sm:text-sm text-blue-900 font-medium">
              {month.learningFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bengali roadmap notes */}
            {month.bengaliLearningFocus && month.bengaliLearningFocus.length > 0 && (
              <div className="pt-3 border-t border-blue-200/60 text-xs text-slate-700 bg-white/80 p-3.5 rounded-xl border border-blue-100">
                <span className="font-bold text-slate-900 block mb-1">
                  রোডম্যাপের গুরুত্বপূর্ণ নোট:
                </span>
                <ul className="space-y-1.5">
                  {month.bengaliLearningFocus.map((bItem, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-blue-600 font-bold shrink-0">→</span>
                      <span>{bItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 2. Proof of Work / Deliverable (কী বানাবে / প্রমাণ) */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <FolderGit2 className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                কী বানাবে / প্রমাণ (Proof of Work & Milestones)
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed mb-2">
              {month.proof}
            </p>
            <p className="text-xs text-slate-600 font-medium bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              💡 {month.bengaliProof}
            </p>

            {month.keyMilestone && (
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                <Target className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Target: {month.keyMilestone}</span>
              </div>
            )}
          </div>

          {/* 3. Subtopic Interactive Checkoff for this Month's Track */}
          {relevantCategories.length > 0 && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Syllabus Checklist for this Topic
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Tick off as you master
                </span>
              </div>

              <div className="space-y-4">
                {relevantCategories.map((cat) => (
                  <div key={cat.id} className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {cat.bengaliTitle}
                    </h4>
                    
                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {cat.topics.flatMap((t, tIdx) => 
                        t.subitems.map((sub, sIdx) => {
                          const subId = `${cat.id}-${tIdx}-${sIdx}`;
                          const isDone = completedSubtopics.includes(subId);
                          return (
                            <label
                              key={subId}
                              className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors text-xs ${
                                isDone 
                                  ? 'bg-blue-50/70 text-slate-800 line-through decoration-slate-400 font-medium' 
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => onToggleSubtopic(subId)}
                                className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 shrink-0 accent-blue-600"
                              />
                              <span className="leading-snug">{sub}</span>
                            </label>
                          );
                        })
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Curated Learning Sources (5 cols) matching Sleek Source List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block leading-none mb-1">
                  Curated Platforms
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  সোর্স (Learning Sources & Links)
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              {month.sources.length} Resources
            </span>
          </div>

          <div className="space-y-2.5">
            {month.sources.map((source, index) => {
              const iconByType = () => {
                switch (source.type) {
                  case 'YouTube': return <Video className="w-4 h-4 text-rose-600 shrink-0" />;
                  case 'Course': return <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />;
                  case 'Docs': return <FileCode className="w-4 h-4 text-blue-500 shrink-0" />;
                  case 'Practice': return <Target className="w-4 h-4 text-amber-600 shrink-0" />;
                  default: return <Globe className="w-4 h-4 text-slate-500 shrink-0" />;
                }
              };

              return (
                <div 
                  key={index}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                        {iconByType()}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {source.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] uppercase font-bold text-slate-400">
                            {source.type}
                          </span>
                          {source.isFree && (
                            <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.2 rounded uppercase">
                              FREE
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                        title="Open external learning source"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {source.notes && (
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      {source.notes}
                    </p>
                  )}

                  {source.url && (
                    <div className="mt-2.5">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                      >
                        <span>Go to course / playlist</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Bengali Creators Mention */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-800 block mb-1">
              বাংলায় শিখতে চাইলে (Optional Bangla Creators):
            </span>
            <p className="text-[11px] leading-relaxed text-slate-500">
              "Stack Learner", "Jhankar Mahbub", "Anisul Islam" — ইউটিউবে সার্চ করে এদের কন্টেন্ট ও কোয়ালিটি দেখে নিতে পারো।
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
