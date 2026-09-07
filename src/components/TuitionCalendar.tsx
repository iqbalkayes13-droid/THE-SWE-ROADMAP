import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, CheckCircle2, Flame } from 'lucide-react';
import { RoadmapMonth, StudySession } from '../types/roadmap';
import { ROADMAP_MONTHS } from '../data/roadmapData';

interface TuitionCalendarProps {
  selectedMonthId: number;
  onSelectMonth: (monthId: number) => void;
  selectedDate: string; // YYYY-MM-DD
  onSelectDate: (date: string) => void;
  sessions: StudySession[];
  onOpenLogForDate: (date: string) => void;
}

export const TuitionCalendar: React.FC<TuitionCalendarProps> = ({
  selectedMonthId,
  onSelectMonth,
  selectedDate,
  onSelectDate,
  sessions,
  onOpenLogForDate,
}) => {
  // Current active year based on selectedMonthId
  const activeYear = selectedMonthId <= 12 ? 1 : selectedMonthId <= 24 ? 2 : 3;

  const currentMonthData = useMemo(() => {
    return ROADMAP_MONTHS.find(m => m.monthId === selectedMonthId) || ROADMAP_MONTHS[0];
  }, [selectedMonthId]);

  // Months belonging to the active year
  const yearMonths = useMemo(() => {
    return ROADMAP_MONTHS.filter(m => m.year === activeYear);
  }, [activeYear]);

  // Session lookup by date
  const sessionsByDate = useMemo(() => {
    const map = new Map<string, StudySession[]>();
    for (const session of sessions) {
      const existing = map.get(session.date) || [];
      existing.push(session);
      map.set(session.date, existing);
    }
    return map;
  }, [sessions]);

  // Generate calendar grid for the selected month
  // We determine year and month index based on a standard 3-year timeline starting 2026-09
  const calendarGrid = useMemo(() => {
    // Let Month 1 be September 2026, Month 2 be October 2026, etc.
    const startYear = 2026;
    const startMonthIndex = 8; // September (0-indexed)
    
    const offsetMonths = selectedMonthId - 1;
    const totalMonth = startMonthIndex + offsetMonths;
    const calYear = startYear + Math.floor(totalMonth / 12);
    const calMonth = totalMonth % 12;

    const firstDay = new Date(calYear, calMonth, 1);
    const lastDay = new Date(calYear, calMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Day of week: 0 = Sun, 1 = Mon ... let's start week on Monday
    const startDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0, Sunday = 6

    const days: Array<{
      dateStr: string;
      dayNumber: number;
      isCurrentMonth: boolean;
      isToday: boolean;
      hasSession: boolean;
      totalMinutes: number;
    }> = [];

    const todayStr = new Date().toISOString().split('T')[0];

    // Leading empty days
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({
        dateStr: `prev-${i}`,
        dayNumber: 0,
        isCurrentMonth: false,
        isToday: false,
        hasSession: false,
        totalMinutes: 0
      });
    }

    // Actual month days
    for (let d = 1; d <= daysInMonth; d++) {
      const monthPadded = String(calMonth + 1).padStart(2, '0');
      const dayPadded = String(d).padStart(2, '0');
      const dateStr = `${calYear}-${monthPadded}-${dayPadded}`;
      const daySessions = sessionsByDate.get(dateStr) || [];
      const totalMinutes = daySessions.reduce((acc, s) => acc + s.durationMinutes, 0);

      days.push({
        dateStr,
        dayNumber: d,
        isCurrentMonth: true,
        isToday: dateStr === todayStr,
        hasSession: daySessions.length > 0,
        totalMinutes
      });
    }

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return {
      year: calYear,
      monthName: monthNames[calMonth],
      days
    };
  }, [selectedMonthId, sessionsByDate]);

  const selectedDateSessions = sessionsByDate.get(selectedDate) || [];
  const selectedDateTotalMin = selectedDateSessions.reduce((acc, s) => acc + s.durationMinutes, 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-6">
      
      {/* 3-Year Level Tabs matching Sleek Nav tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Three-Year Tuition Schedule
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5 flex items-center gap-2">
            <span>Curriculum Timeline & Calendar</span>
            <span className="text-xs font-normal text-slate-400">
              (Months 01 to 36)
            </span>
          </h2>
        </div>

        {/* Year Selectors matching Sleek Theme */}
        <nav className="flex bg-slate-100 p-1 rounded-xl">
          {[1, 2, 3].map((yr) => {
            const isYearActive = activeYear === yr;
            return (
              <button
                key={yr}
                id={`year-tab-${yr}`}
                onClick={() => onSelectMonth((yr - 1) * 12 + 1)}
                className={`px-4 sm:px-6 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${
                  isYearActive
                    ? 'bg-white shadow-sm font-semibold text-blue-600'
                    : 'font-medium text-slate-500 hover:text-slate-900'
                }`}
              >
                Year 0{yr} {yr === 1 ? '(Foundation)' : yr === 2 ? '(Specialization)' : '(Applications)'}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 12-Month Touch Ribbon for Current Year */}
      <div className="mt-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-slate-500">
            Year 0{activeYear} Month Focus Cards (Click any month to inspect curriculum):
          </p>
          <div className="flex items-center gap-2">
            <button
              id="prev-month-btn"
              disabled={selectedMonthId <= 1}
              onClick={() => onSelectMonth(Math.max(1, selectedMonthId - 1))}
              className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-700 min-w-20 text-center">
              Month {selectedMonthId < 10 ? `0${selectedMonthId}` : selectedMonthId} / 36
            </span>
            <button
              id="next-month-btn"
              disabled={selectedMonthId >= 36}
              onClick={() => onSelectMonth(Math.min(36, selectedMonthId + 1))}
              className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 12-Month Cards matching Sleek Interface card aesthetics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-2">
          {yearMonths.map((m) => {
            const isSelected = m.monthId === selectedMonthId;
            const monthNumberFormatted = m.monthId < 10 ? `0${m.monthId}` : `${m.monthId}`;

            // Check if month has any recorded sessions
            const hasMonthSessions = sessions.some(s => {
              const startYear = 2026;
              const startMonthIndex = 8;
              const offset = m.monthId - 1;
              const tot = startMonthIndex + offset;
              const yr = startYear + Math.floor(tot / 12);
              const mon = String((tot % 12) + 1).padStart(2, '0');
              return s.date.startsWith(`${yr}-${mon}`);
            });

            if (isSelected) {
              return (
                <button
                  key={m.monthId}
                  id={`month-pill-${m.monthId}`}
                  onClick={() => onSelectMonth(m.monthId)}
                  className="bg-blue-600 rounded-2xl p-3 flex flex-col justify-between shadow-lg shadow-blue-200 ring-4 ring-blue-50 cursor-pointer text-white text-left transition-all min-h-[90px]"
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="text-xl font-bold opacity-40 leading-none">
                      {monthNumberFormatted}
                    </span>
                    <span className="px-1.5 py-0.5 bg-white/20 text-white text-[9px] font-bold rounded uppercase tracking-wider">
                      Current
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-white text-xs leading-tight line-clamp-1">
                      {m.targetCategory}
                    </h4>
                    <p className="text-[10px] text-white/80 mt-0.5 truncate">
                      {m.monthRange}
                    </p>
                  </div>
                </button>
              );
            }

            return (
              <button
                key={m.monthId}
                id={`month-pill-${m.monthId}`}
                onClick={() => onSelectMonth(m.monthId)}
                className="bg-white border border-slate-200 rounded-2xl p-3 flex flex-col justify-between shadow-sm hover:border-blue-300 transition-colors cursor-pointer group text-left min-h-[90px]"
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-xl font-bold text-slate-200 group-hover:text-blue-200 transition-colors leading-none">
                    {monthNumberFormatted}
                  </span>
                  {hasMonthSessions ? (
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-[9px] font-bold rounded uppercase tracking-wider">
                      Done
                    </span>
                  ) : (
                    <span className="px-1.5 py-0.5 bg-slate-50 text-slate-400 text-[9px] font-bold rounded uppercase tracking-wider">
                      Plan
                    </span>
                  )}
                </div>
                <div className="mt-2">
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-xs leading-tight line-clamp-1">
                    {m.targetCategory}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                    {m.monthRange}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Date Touch Calendar Grid for the Active Month */}
      <div className="bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Calendar Grid: {calendarGrid.monthName} {calendarGrid.year}
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">
              • Touch a date to review or record study sessions
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> Studied
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full border border-blue-600 bg-blue-50"></span> Selected
            </span>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 text-center mb-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-[11px] font-bold uppercase tracking-wider text-slate-400 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Day Cells */}
        <div className="grid grid-cols-7 gap-1">
          {calendarGrid.days.map((item, idx) => {
            if (!item.isCurrentMonth) {
              return <div key={`empty-${idx}`} className="h-14 rounded-xl bg-slate-100/40" />;
            }

            const isSelected = item.dateStr === selectedDate;

            return (
              <button
                key={item.dateStr}
                id={`calendar-day-${item.dateStr}`}
                type="button"
                onClick={() => onSelectDate(item.dateStr)}
                className={`h-14 rounded-xl p-1.5 text-left border transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200 ring-2 ring-blue-100'
                    : item.isToday
                    ? 'bg-blue-50/90 border-blue-300 text-blue-900 font-bold'
                    : 'bg-white hover:border-blue-300 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-white' : item.isToday ? 'text-blue-700' : 'text-slate-700'}`}>
                    {item.dayNumber}
                  </span>
                  {item.hasSession && (
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-white' : 'bg-blue-600'}`} title="Study session recorded" />
                  )}
                </div>

                <div className="text-[10px] truncate leading-tight">
                  {item.hasSession ? (
                    <span className={`inline-block font-mono text-[9px] px-1 rounded ${
                      isSelected ? 'bg-blue-700 text-white font-semibold' : 'bg-blue-50 text-blue-700 font-bold border border-blue-100'
                    }`}>
                      {item.totalMinutes}m
                    </span>
                  ) : item.isToday ? (
                    <span className="text-[9px] text-blue-600 font-semibold">Today</span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Date Quick Context Bar */}
        <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              Selected: {selectedDate}
            </span>
            {selectedDateTotalMin > 0 ? (
              <span className="inline-flex items-center gap-1 text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md font-semibold border border-blue-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                {selectedDateTotalMin} minutes studied ({selectedDateSessions.length} session{selectedDateSessions.length > 1 ? 's' : ''})
              </span>
            ) : (
              <span className="text-slate-400">
                No study sessions logged for this date yet.
              </span>
            )}
          </div>

          <button
            id="calendar-log-for-date-btn"
            type="button"
            onClick={() => onOpenLogForDate(selectedDate)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
          >
            <Clock className="w-3 h-3 text-blue-100" />
            <span>+ Log Study for {selectedDate}</span>
          </button>
        </div>

      </div>

    </div>
  );
};
