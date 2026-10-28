import React, { useState } from 'react';
import { Clock, Calendar, MapPin, Sparkles, Shield } from 'lucide-react';
import { DOMAINS_DATA } from '../data/domains';

export const DomainsScheduleView: React.FC = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const todayName = days[(currentDayIndex + 6) % 7]; // Map Sunday to last or today
  const [selectedDay, setSelectedDay] = useState<typeof days[number]>(todayName);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <Clock className="w-6 h-6 text-amber-600" />
            Domain Rotation Schedule
          </h1>
          <p className="text-xs text-slate-600">
            Weekly rotation calendar for Talent Books and Weapon Ascension materials across all Teyvat nations.
          </p>
        </div>
        <div className="text-xs text-[#7a5719] bg-[#eddcb8] px-3.5 py-1.5 rounded-xl border border-[#c2a160] shadow-2xs font-medium">
          Today is <strong className="font-bold text-[#5c3e0e]">{todayName}</strong>
        </div>
      </div>

      {/* Weekday Selector */}
      <div className="glass-panel rounded-2xl p-3 border border-[#d2c0a8]">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-center ${
                selectedDay === day
                  ? 'bg-[#eddcb8] text-[#7a5719] font-bold shadow-xs border border-[#c2a160]'
                  : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e8decb]'
              }`}
            >
              <div>{day}</div>
              {day === todayName && (
                <span className="text-[9px] block text-amber-800 font-bold mt-0.5">TODAY</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Cards for Selected Day */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {DOMAINS_DATA.map(domain => {
          const dropsForDay = domain.schedule[selectedDay] || ['All materials accessible'];

          return (
            <div
              key={domain.id}
              className="glass-panel rounded-2xl p-5 border border-[#d2c0a8] hover:border-[#c2a160] bg-[#faf8f3] space-y-4 flex flex-col justify-between shadow-xs transition-all"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f0e8db] px-2 py-0.5 rounded border border-[#d2c0a8] text-[#7a5719]">
                    {domain.region} • {domain.type}
                  </span>
                </div>

                <h3 className="font-cinzel font-bold text-slate-800 text-base">
                  {domain.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>{domain.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2d5c5] space-y-2">
                <span className="text-[11px] text-slate-500 uppercase font-semibold block">
                  Farmable On {selectedDay}:
                </span>
                <div className="space-y-1">
                  {dropsForDay.map((drop, i) => (
                    <div key={i} className="p-2 rounded-lg bg-[#f5efe2] border border-[#d2c0a8] text-xs text-[#7a5719] font-semibold">
                      ✦ {drop}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
