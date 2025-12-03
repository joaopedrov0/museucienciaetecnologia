export interface ScheduleConfig {
  availableDays: number[]; // 0 = Domingo, 1 = Segunda, etc.
  timeSlots: TimeSlot[];
  availableDates: string[]; // Datas DISPONÍVEIS no formato YYYY-MM-DD
  maxVisitorsPerSlot: number;
  advanceBookingDays: number; // Quantos dias de antecedência é necessário agendar
  maxBookingDays: number; // Até quantos dias no futuro pode agendar
}

export interface TimeSlot {
  time: string;
  label: string;
  capacity: number;
  availableDays?: number[]; 
}

// Configuração principal de disponibilidade de visitas
export const scheduleConfig: ScheduleConfig = {
  // Dias disponíveis: 1-5 = Segunda a Sexta
  availableDays: [1, 2, 3, 4, 5],

  timeSlots: [
    { time: '09:00', label: '09:00 - Manhã', capacity: 20 },
    { time: '10:00', label: '10:00 - Manhã', capacity: 20 },
    { time: '11:00', label: '11:00 - Manhã', capacity: 15 },
    { time: '13:00', label: '13:00 - Tarde', capacity: 20 },
    { time: '14:00', label: '14:00 - Tarde', capacity: 20 },
    { time: '15:00', label: '15:00 - Tarde', capacity: 15 },
    { time: '16:00', label: '16:00 - Tarde', capacity: 10 }
  ],

  // COLOCAR DATAS DISPONÍVEIS AQUI (YYYY-MM-DD)
  availableDates: [
    '2026-02-02',
    '2026-02-03',
    '2026-02-04',
    '2026-02-05',
    '2026-02-06'
  ],

  maxVisitorsPerSlot: 20,
  advanceBookingDays: 2, // Mínimo 2 dias de antecedência
  maxBookingDays: 90 // Pode agendar até 90 dias no futuro
};

// função que verifica disponibilidade de uma data
export function isDateAvailable(date: Date): boolean {
  const dateString = date.toISOString().split('T')[0];
  const dayOfWeek = date.getDay();

  if (!scheduleConfig.availableDays.includes(dayOfWeek)) {
    return false;
  }

  if (!scheduleConfig.availableDates.includes(dateString)) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + scheduleConfig.advanceBookingDays);
  
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + scheduleConfig.maxBookingDays);

  if (date < minDate || date > maxDate) {
    return false;
  }

  return true;
}

// função que mostra o próximo dia disponível
export function getNextAvailableDate(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + scheduleConfig.advanceBookingDays);

  for (let i = 0; i < 365; i++) {
    if (isDateAvailable(currentDate)) {
      return currentDate;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return currentDate;
}

export function getAvailableTimeSlotsForDate(date: Date): TimeSlot[] {
  const dayOfWeek = date.getDay();
  
  return scheduleConfig.timeSlots.filter((slot) => {
    if (slot.availableDays && slot.availableDays.length > 0) {
      return slot.availableDays.includes(dayOfWeek);
    }
    return true;
  });
}

export interface BlockedDateInfo {
  date: string;
  reason: string;
}

export const blockedDatesWithReasons: BlockedDateInfo[] = [
  { date: '2025-01-01', reason: 'Ano Novo' },
  { date: '2025-02-24', reason: 'Carnaval' },
  { date: '2025-02-25', reason: 'Carnaval' },
  { date: '2025-04-18', reason: 'Sexta-feira Santa' },
  { date: '2025-04-21', reason: 'Tiradentes' },
  { date: '2025-05-01', reason: 'Dia do Trabalho' },
  { date: '2025-06-19', reason: 'Corpus Christi' },
  { date: '2025-09-07', reason: 'Independência do Brasil' },
  { date: '2025-10-12', reason: 'Nossa Senhora Aparecida' },
  { date: '2025-11-02', reason: 'Finados' },
  { date: '2025-11-15', reason: 'Proclamação da República' },
  { date: '2025-11-20', reason: 'Consciência Negra' },
  { date: '2025-12-25', reason: 'Natal' },
  { date: '2025-12-31', reason: 'Véspera de Ano Novo' }
];

// função para aplicar motivo ao bloqueio da data
export function getBlockedDateReason(dateString: string): string | null {
  const blocked = blockedDatesWithReasons.find((b) => b.date === dateString);
  return blocked ? blocked.reason : null;
}
