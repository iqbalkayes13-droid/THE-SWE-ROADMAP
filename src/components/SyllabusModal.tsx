import React, { useState, useMemo } from 'react';
import { X, Search, CheckSquare, Square, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { SYLLABUS_CATEGORIES } from '../data/roadmapData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  completedSubtopics: string[];
  onToggleSubtopic: (id: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  completedSubtopics,
  onToggleSubtopic,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  // Total subtopics count
  const allSubtopics = useMemo(() => {
    const list: Array<{ id: string; categoryTitle: string; topicName: string; text: string }> = [];
    SYLLABUS_CATEGORIES.forEach((cat) => {
      cat.topics.forEach((t, tIdx) => {
        t.subitems.forEach((sub, sIdx) => {
          list.push({
            id: `${cat.id}-${tIdx}-${sIdx}`,
            categoryTitle: cat.title,
            topicName: t.name,
            text: sub,
          });
        });
      });
    });
    return list;
  }, []);

  const totalCount = allSubtopics.length;
  const completedCount = completedSubtopics.length;
  const completionPercentage = Math.round((completedCount / (totalCount || 1)) * 100);

  const filteredCategories = useMemo(() => {
    return SYLLABUS_CATEGORIES.filter(cat => {
      if (activeCategoryTab !== 'all' && cat.id !== activeCategoryTab) return false;
      if (!searchTerm.trim()) return true;

      const term = searchTerm.toLowerCase();
      const matchesCat = cat.title.toLowerCase().includes(term) || cat.bengaliTitle.toLowerCase().includes(term);
      const matchesTopic = cat.topics.some(t => 
        t.name.toLowerCase().includes(term) || 
        t.subitems.some(s => s.toLowerCase().includes(term))
      );
      return matchesCat || matchesTopic;
    });
  }, [activeCategoryTab, searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4">
      <div 
        id="syllabus-modal-card"
        className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                বিস্তারিত টপিক-ওয়াইজ সিলেবাস (3-Year Master Checklist)
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              From pages 5-11 of your roadmap. Check off subtopics as you master them.
            </p>
          </div>

          <button
            id="close-syllabus-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Progress & Search Bar */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 shrink-0 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-800">
                Syllabus Mastery: {completedCount} / {totalCount} topics ({completionPercentage}%)
              </span>
            </div>
            <div className="w-48 sm:w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                id="syllabus-search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search sub-topics (e.g. recursion, transformers, RAG, docker)..."
                className="w-full text-xs pl-9 pr-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
              <button
                type="button"
                onClick={() => setActiveCategoryTab('all')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategoryTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                All (7)
              </button>
              {SYLLABUS_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryTab(cat.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategoryTab === cat.id
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-200'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat.id.split('-')[0].toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Categories List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {cat.bengaliTitle}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {cat.title}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.topics.map((topic, tIdx) => (
                  <div key={tIdx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
                    <h5 className="text-xs font-bold text-slate-800 mb-2">
                      {topic.name}
                    </h5>

                    <div className="space-y-1.5">
                      {topic.subitems.map((sub, sIdx) => {
                        const subId = `${cat.id}-${tIdx}-${sIdx}`;
                        const isDone = completedSubtopics.includes(subId);

                        return (
                          <label
                            key={subId}
                            className={`flex items-start gap-2 p-1.5 rounded-md cursor-pointer transition-colors text-xs ${
                              isDone
                                ? 'bg-blue-50/80 text-slate-800 line-through decoration-slate-400'
                                : 'hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => onToggleSubtopic(subId)}
                              className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 shrink-0"
                            />
                            <span className="leading-snug">{sub}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Tip: Ask yourself: "Can I explain this concept clearly to someone else?"</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
