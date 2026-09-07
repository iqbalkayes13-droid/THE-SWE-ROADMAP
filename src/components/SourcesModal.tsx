import React from 'react';
import { X, BookOpen, GraduationCap, Globe, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SOURCE_CHEATSHEET, ACADEMIC_GUIDELINES } from '../data/roadmapData';

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourcesModal: React.FC<SourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4">
      <div 
        id="sources-modal-card"
        className="w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                সোর্স চিটশিট ও মাস্টার্স গাইডলাইন (Source Cheat-Sheet & Academic Tips)
              </h3>
              <p className="text-xs text-slate-400">
                Verified high-impact learning sources and academic guidelines from pages 4-5 of the roadmap.
              </p>
            </div>
          </div>
          <button
            id="close-sources-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
          
          {/* 1. Source Cheat-Sheet Table */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>সংক্ষেপে — সোর্স চিটশিট (Curated Source Cheat-Sheet)</span>
            </h4>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800 text-white text-xs">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold w-1/3">বিষয় (Subject)</th>
                    <th className="py-2.5 px-4 font-semibold">সোর্স (Primary Sources)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {SOURCE_CHEATSHEET.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-4 font-bold text-slate-900 bg-slate-50/40">
                        {row.subject}
                      </td>
                      <td className="py-2.5 px-4 font-medium text-slate-700">
                        {row.sources}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Academic Guidelines for German Master's (Page 4) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>{ACADEMIC_GUIDELINES.title}</span>
            </h4>

            <div className="space-y-3">
              {ACADEMIC_GUIDELINES.points.map((pt, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <span className="font-bold text-slate-900 block mb-1">
                    {idx + 1}. {pt.title}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Golden Rule Advice */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex items-start gap-3 text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-xs text-blue-900">রোডম্যাপের মূল নীতি (Core Philosophy):</h5>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                "টাইমলাইন নিয়ে চাপ নিও না — কেউ ২ বছরে এই জায়গায় পৌঁছায়, কেউ ৪ বছরে। যেটা গুরুত্বপূর্ণ তা হলো প্রতি মাসে তুমি আগের মাসের চেয়ে ভালো জায়গায় আছো কিনা। প্রতি ৩ মাস পর নিজের progress রিভিউ করো।"
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
