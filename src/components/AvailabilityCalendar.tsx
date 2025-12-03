import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { isDateAvailable, getBlockedDateReason, scheduleConfig, getNextAvailableDate } from '../data/schedule';

interface AvailabilityCalendarProps {
  onSelectDate?: (date: string) => void;
}

export function AvailabilityCalendar({ onSelectDate }: AvailabilityCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: Array<{ date: Date | null; isCurrentMonth: boolean }> = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ date: null, isCurrentMonth: false });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: new Date(year, month, day),
        isCurrentMonth: true
      });
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + scheduleConfig.advanceBookingDays);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-900 capitalize">{monthName}</h3>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            type="button"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            type="button"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs text-slate-500 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (!day.date) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const dateString = day.date.toISOString().split('T')[0];
          const available = isDateAvailable(day.date);
          const isPast = day.date < minDate;
          const isToday = day.date.getTime() === today.getTime();
          const blockedReason = getBlockedDateReason(dateString);

          return (
            <motion.button
              key={dateString}
              whileHover={available ? { scale: 1.05 } : {}}
              onClick={() => available && onSelectDate && onSelectDate(dateString)}
              disabled={!available}
              type="button"
              className={`aspect-square rounded-lg text-sm transition-all relative group ${
                isToday ? 'ring-2 ring-amber-600' : ''
              } ${
                available
                  ? 'bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer'
                  : isPast
                  ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                  : 'bg-red-50 text-red-400 cursor-not-allowed'
              }`}
              title={
                available
                  ? 'Disponível'
                  : blockedReason
                  ? blockedReason
                  : isPast
                  ? 'Data passada'
                  : 'Indisponível'
              }
            >
              {day.date.getDate()}
              
              {/* Tooltip on hover */}
              {!available && blockedReason && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                  <div className="bg-slate-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {blockedReason}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-slate-900"></div>
                    </div>
                  </div>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
      <div className="mt-4 flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-3">
        <h1>Próximo dia disponível:</h1>
        <span>{getNextAvailableDate().toLocaleDateString()}</span>
      </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-4 h-4 bg-green-100 rounded border border-green-200"></div>
          <span className="text-slate-600">Disponível</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-4 h-4 bg-red-50 rounded border border-red-100"></div>
          <span className="text-slate-600">Feriado/Bloqueado</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-4 h-4 bg-slate-50 rounded border border-slate-200"></div>
          <span className="text-slate-600">Indisponível</span>
        </div>
      </div>

      <div className="mt-4 flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-3">
        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <span>
          Passe o mouse sobre os dias bloqueados para ver o motivo. Agendamentos requerem {scheduleConfig.advanceBookingDays} dias de antecedência.
        </span>
      </div>
    </div>
  );
}
