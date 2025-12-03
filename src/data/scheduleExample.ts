/**
 * EXEMPLOS DE CONFIGURAÇÃO
 * 
 * Exemplos deixados caso o próximo bolsita deva alterar a disponibilidade das datas.
 * Copie e cole no arquivo schedule.ts conforme necessário.
 */


// ============================================
// EXEMPLO 1: Museu aberto de terça a sábado
// ============================================
export const example1 = {
  availableDays: [2, 3, 4, 5, 6], // Terça a Sábado
  timeSlots: [
    { time: '10:00', label: '10:00 - Manhã', capacity: 25 },
    { time: '14:00', label: '14:00 - Tarde', capacity: 25 },
    { time: '16:00', label: '16:00 - Tarde', capacity: 20 }
  ]
};

// ============================================
// EXEMPLO 2: Horários diferenciados por dia
// ============================================
export const example2 = {
  availableDays: [1, 2, 3, 4, 5, 6],
  timeSlots: [
    // Horários disponíveis em dias de semana
    { 
      time: '09:00', 
      label: '09:00 - Manhã (Seg-Sex)', 
      capacity: 20,
      availableDays: [1, 2, 3, 4, 5] 
    },
    { 
      time: '13:00', 
      label: '13:00 - Tarde (Seg-Sex)', 
      capacity: 20,
      availableDays: [1, 2, 3, 4, 5] 
    },
    // Horários especiais para sábado
    { 
      time: '10:00', 
      label: '10:00 - Manhã (Sábado)', 
      capacity: 30,
      availableDays: [6] 
    },
    { 
      time: '14:00', 
      label: '14:00 - Tarde (Sábado)', 
      capacity: 30,
      availableDays: [6] 
    }
  ]
};

// ============================================
// EXEMPLO 3: Período de férias/recesso
// ============================================
export const example3_blockedDates = [
  // Férias de janeiro
  '2025-01-02',
  '2025-01-03',
  '2025-01-06',
  '2025-01-07',
  '2025-01-08',
  '2025-01-09',
  '2025-01-10',
  // Férias de julho
  '2025-07-14',
  '2025-07-15',
  '2025-07-16',
  '2025-07-17',
  '2025-07-18',
  '2025-07-21',
  '2025-07-22',
  '2025-07-23',
  '2025-07-24',
  '2025-07-25'
];

// ============================================
// EXEMPLO 4: Capacidades reduzidas
// (Útil durante reformas ou COVID-19)
// ============================================
export const example4 = {
  maxVisitorsPerSlot: 10, // Reduzido de 20 para 10
  timeSlots: [
    { time: '09:00', label: '09:00 - Manhã', capacity: 10 },
    { time: '10:30', label: '10:30 - Manhã', capacity: 10 },
    { time: '13:00', label: '13:00 - Tarde', capacity: 8 },
    { time: '14:30', label: '14:30 - Tarde', capacity: 8 },
    { time: '16:00', label: '16:00 - Tarde', capacity: 6 }
  ]
};

// ============================================
// EXEMPLO 5: Agendamento sem antecedência
// (Para períodos menos concorridos)
// ============================================
export const example5 = {
  advanceBookingDays: 0,  // Permite agendar para o mesmo dia
  maxBookingDays: 60      // Até 60 dias no futuro
};

// ============================================
// EXEMPLO 6: Agendamento com longa antecedência
// (Para períodos de alta demanda)
// ============================================
export const example6 = {
  advanceBookingDays: 7,  // Requer 1 semana de antecedência
  maxBookingDays: 180     // Permite agendar até 6 meses
};

// ============================================
// EXEMPLO 7: Horários estendidos
// ============================================
export const example7 = {
  timeSlots: [
    { time: '08:00', label: '08:00 - Abertura Antecipada', capacity: 15 },
    { time: '09:00', label: '09:00 - Manhã', capacity: 20 },
    { time: '10:00', label: '10:00 - Manhã', capacity: 20 },
    { time: '11:00', label: '11:00 - Manhã', capacity: 20 },
    { time: '12:00', label: '12:00 - Meio-dia', capacity: 15 },
    { time: '13:00', label: '13:00 - Tarde', capacity: 20 },
    { time: '14:00', label: '14:00 - Tarde', capacity: 20 },
    { time: '15:00', label: '15:00 - Tarde', capacity: 20 },
    { time: '16:00', label: '16:00 - Tarde', capacity: 20 },
    { time: '17:00', label: '17:00 - Tarde', capacity: 15 },
    { time: '18:00', label: '18:00 - Noturno', capacity: 10 }
  ]
};

// ============================================
// EXEMPLO 8: Apenas visitas agendadas em grupo
// ============================================
export const example8 = {
  timeSlots: [
    { time: '09:00', label: '09:00 - Turno Manhã', capacity: 50 },
    { time: '14:00', label: '14:00 - Turno Tarde', capacity: 50 }
  ]
};

// ============================================
// EXEMPLO 9: Configuração completa - Museu Universitário
// ============================================
export const example9_complete = {
  availableDays: [1, 2, 3, 4, 5], // Seg-Sex
  
  timeSlots: [
    { time: '09:00', label: '09:00 - Visita Escolar', capacity: 30 },
    { time: '10:30', label: '10:30 - Visita Geral', capacity: 20 },
    { time: '13:30', label: '13:30 - Visita Escolar', capacity: 30 },
    { time: '15:00', label: '15:00 - Visita Geral', capacity: 20 },
    { time: '16:30', label: '16:30 - Última Visita', capacity: 15 }
  ],

  blockedDates: [
    // Feriados Nacionais 2025
    '2025-01-01', '2025-02-24', '2025-02-25', '2025-04-18',
    '2025-04-21', '2025-05-01', '2025-06-19', '2025-09-07',
    '2025-10-12', '2025-11-02', '2025-11-15', '2025-11-20',
    '2025-12-25', '2025-12-31',
    // Recesso Acadêmico (Janeiro)
    '2025-01-02', '2025-01-03', '2025-01-06', '2025-01-07',
    '2025-01-08', '2025-01-09', '2025-01-10', '2025-01-13',
    // Recesso Acadêmico (Julho)
    '2025-07-14', '2025-07-15', '2025-07-16', '2025-07-17',
    '2025-07-18', '2025-07-21', '2025-07-22', '2025-07-23',
    // Semana de Provas
    '2025-06-23', '2025-06-24', '2025-06-25', '2025-06-26',
    '2025-06-27', '2025-11-24', '2025-11-25', '2025-11-26',
    '2025-11-27', '2025-11-28'
  ],

  maxVisitorsPerSlot: 30,
  advanceBookingDays: 3,
  maxBookingDays: 90
};

// ============================================
// COMO USAR ESTES EXEMPLOS:
// ============================================
/*

1. Escolha o exemplo que mais se adequa à sua necessidade
2. Abra o arquivo /data/schedule.ts
3. Substitua a configuração existente pelos valores do exemplo
4. Ajuste conforme necessário

Exemplo prático - Para usar o Exemplo 1:

// No arquivo schedule.ts, substitua:

export const scheduleConfig: ScheduleConfig = {
  availableDays: [2, 3, 4, 5, 6], // Copie do exemplo1
  timeSlots: [                     // Copie do exemplo1
    { time: '10:00', label: '10:00 - Manhã', capacity: 25 },
    { time: '14:00', label: '14:00 - Tarde', capacity: 25 },
    { time: '16:00', label: '16:00 - Tarde', capacity: 20 }
  ],
  blockedDates: [...], // Mantenha seus feriados
  maxVisitorsPerSlot: 25,
  advanceBookingDays: 2,
  maxBookingDays: 90
};

*/
