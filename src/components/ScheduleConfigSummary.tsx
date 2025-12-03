import { motion } from 'motion/react';
import { Calendar, Clock, Users, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { scheduleConfig, blockedDatesWithReasons } from '../data/schedule';

/**
 * Componente que exibe um resumo da configuração atual de agendamentos.
 * Útil para visualizar rapidamente as configurações ativas.
 */
export function ScheduleConfigSummary() {
  const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const availableDayNames = scheduleConfig.availableDays
    .map((day) => dayNames[day])
    .join(', ');

  const totalSlots = scheduleConfig.timeSlots.length;
  const totalCapacity = scheduleConfig.timeSlots.reduce((sum, slot) => sum + slot.capacity, 0);
  const avgCapacity = Math.round(totalCapacity / totalSlots);

  // Próximas datas bloqueadas
  const today = new Date();
  const upcomingBlockedDates = blockedDatesWithReasons
    .filter((blocked) => new Date(blocked.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Info className="w-6 h-6 text-amber-600" />
        <h3 className="text-slate-900">Resumo da Configuração de Visitas</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Dias e Horários */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Dias Disponíveis</span>
            </div>
            <p className="text-green-700">{availableDayNames}</p>
            <p className="text-sm text-green-600 mt-1">
              {scheduleConfig.availableDays.length} {scheduleConfig.availableDays.length === 1 ? 'dia' : 'dias'} por semana
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900">Horários</span>
            </div>
            <div className="space-y-1">
              {scheduleConfig.timeSlots.map((slot, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-blue-700">{slot.time}</span>
                  <span className="text-blue-600">{slot.capacity} pessoas</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-blue-600 mt-2 pt-2 border-t border-blue-200">
              Total: {totalSlots} horários/dia • Média: {avgCapacity} pessoas/horário
            </p>
          </div>
        </motion.div>

        {/* Capacidade e Regras */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-purple-900">Capacidade</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-purple-700">Máximo por horário:</span>
                <span className="text-purple-900">{scheduleConfig.maxVisitorsPerSlot} pessoas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-purple-700">Capacidade diária:</span>
                <span className="text-purple-900">{totalCapacity} pessoas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-purple-700">Capacidade semanal:</span>
                <span className="text-purple-900">
                  {totalCapacity * scheduleConfig.availableDays.length} pessoas
                </span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-5 h-5 text-amber-600" />
              <span className="text-amber-900">Regras de Agendamento</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-amber-700">Antecedência mínima:</span>
                <span className="text-amber-900">{scheduleConfig.advanceBookingDays} dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-700">Período máximo:</span>
                <span className="text-amber-900">{scheduleConfig.maxBookingDays} dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-700">Datas bloqueadas:</span>
                <span className="text-amber-900">{scheduleConfig.availableDates.length} datas</span>
              </div>
            </div>
          </div>

          {upcomingBlockedDates.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-red-900">Próximas Datas Bloqueadas</span>
              </div>
              <div className="space-y-1">
                {upcomingBlockedDates.map((blocked, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-red-700">
                      {new Date(blocked.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="text-red-600">{blocked.reason}</span>
                  </div>
                ))}
              </div>
              {blockedDatesWithReasons.length > 5 && (
                <p className="text-xs text-red-600 mt-2 pt-2 border-t border-red-200">
                  + {blockedDatesWithReasons.length - 5} outras datas
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm text-slate-600">
            <strong>💡 Dica:</strong> Para modificar estas configurações, edite o arquivo{' '}
            <code className="bg-slate-200 px-2 py-1 rounded text-xs">/data/schedule.ts</code>
            . Consulte o arquivo{' '}
            <code className="bg-slate-200 px-2 py-1 rounded text-xs">/data/README.md</code>
            {' '}para instruções detalhadas.
          </p>
        </div>
      </div>
    </div>
  );
}
