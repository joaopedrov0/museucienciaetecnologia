import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Mail, User, Phone, MessageSquare, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { toast } from 'sonner';
import {
  scheduleConfig,
  isDateAvailable,
  getNextAvailableDate,
  getAvailableTimeSlotsForDate,
  getBlockedDateReason
} from '../data/schedule';
import { AvailabilityCalendar } from '../components/AvailabilityCalendar';

interface ScheduleFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  visitors: string;
  institution: string;
  message: string;
}

export function Schedule() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState(scheduleConfig.timeSlots);
  const [dateError, setDateError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ScheduleFormData>();

  const watchedDate = watch('date');

  useEffect(() => {
    if (watchedDate) {
      const date = new Date(watchedDate + 'T00:00:00');
      
      if (!isDateAvailable(date)) {
        const blockedReason = getBlockedDateReason(watchedDate);
        if (blockedReason) {
          setDateError(`Data indisponível: ${blockedReason}`);
        } else {
          const dayOfWeek = date.getDay();
          const dayNames = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
          setDateError(`Não atendemos em ${dayNames[dayOfWeek]}s. Escolha um dia útil.`);
        }
        setAvailableTimeSlots([]);
        setValue('time', '');
      } else {
        setDateError('');
        const slots = getAvailableTimeSlotsForDate(date);
        setAvailableTimeSlots(slots);
        setValue('time', ''); // Limpa o horário selecionado quando muda a data
      }
    }
  }, [watchedDate, setValue]);

  const onSubmit = (data: ScheduleFormData) => {
    const date = new Date(data.date + 'T00:00:00');
    if (!isDateAvailable(date)) {
      toast.error('Data selecionada não está disponível para visitas.');
      return;
    }

    const selectedSlot = availableTimeSlots.find((slot) => slot.time === data.time);
    if (!selectedSlot) {
      toast.error('Horário selecionado não está disponível.');
      return;
    }

    if (parseInt(data.visitors) > selectedSlot.capacity) {
      toast.error(`Este horário suporta no máximo ${selectedSlot.capacity} visitantes.`);
      return;
    }

    console.log('Agendamento:', data);
    setIsSubmitted(true);
    toast.success('Agendamento realizado com sucesso!');
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setSelectedDate('');
    }, 5000);
  };

  const nextAvailableDate = getNextAvailableDate();
  const minDate = nextAvailableDate.toISOString().split('T')[0];
  
  const maxDateObj = new Date();
  maxDateObj.setDate(maxDateObj.getDate() + scheduleConfig.maxBookingDays);
  const maxDate = maxDateObj.toISOString().split('T')[0];

  const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const availableDayNames = scheduleConfig.availableDays.map((day) => dayNames[day]).join(', ');

  if (isSubmitted) {
    return (
      <div className="py-12 lg:py-16 bg-slate-50 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </motion.div>
            <h2 className="text-slate-900 mb-4">Agendamento Confirmado!</h2>
            <p className="text-slate-600 mb-6">
              Recebemos sua solicitação de visita ao Museu Ciência e Tecnologia. Em breve entraremos em
              contato por e-mail com a confirmação e instruções adicionais.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-slate-700">
              <p>
                <strong>Importante:</strong> Verifique sua caixa de entrada e spam. Enviaremos
                um e-mail de confirmação em até 24 horas.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Fazer Novo Agendamento
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-slate-900 mb-4">Agendar Visita</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo para agendar uma visita ao nosso museu físico.
            Visitas são guiadas por especialistas e ideais para grupos acadêmicos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Dias Disponíveis</h3>
              <p className="text-slate-600 text-sm mb-3">
                {availableDayNames}
              </p>
              <p className="text-slate-500 text-sm">
                Horários: {scheduleConfig.timeSlots[0].time} às {scheduleConfig.timeSlots[scheduleConfig.timeSlots.length - 1].time}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Capacidade</h3>
              <p className="text-slate-600 text-sm mb-3">
                Grupos de até {scheduleConfig.maxVisitorsPerSlot} pessoas
              </p>
              <p className="text-slate-500 text-sm">
                Varia por horário
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Antecedência</h3>
              <p className="text-slate-600 text-sm mb-3">
                Mínimo {scheduleConfig.advanceBookingDays} dias de antecedência
              </p>
              <p className="text-slate-500 text-sm">
                Até {scheduleConfig.maxBookingDays} dias no futuro
              </p>
            </div>

            <AvailabilityCalendar onSelectDate={(date) => setValue('date', date)} />

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
              <h3 className="text-white mb-3">Informações Importantes</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Entrada gratuita para estudantes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>É necessário documento de identificação</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Visitas acompanhadas por especialistas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Material educativo fornecido</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      {...register('name', { required: 'Nome é obrigatório' })}
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="email"
                        {...register('email', {
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                          }
                        })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="tel"
                        {...register('phone', { required: 'Telefone é obrigatório' })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2">
                      Data da Visita *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="date"
                        {...register('date', { 
                          required: 'Data é obrigatória',
                          validate: (value) => {
                            const date = new Date(value + 'T00:00:00');
                            if (!isDateAvailable(date)) {
                              return 'Data não disponível para visitas';
                            }
                            return true;
                          }
                        })}
                        min={minDate}
                        max={maxDate}
                        className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent ${
                          dateError ? 'border-red-300 bg-red-50' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                    {dateError && !errors.date && (
                      <div className="mt-2 flex items-start space-x-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{dateError}</span>
                      </div>
                    )}
                    {watchedDate && !dateError && !errors.date && (
                      <div className="mt-2 flex items-start space-x-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Data disponível - escolha um horário</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">
                      Horário *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <select
                        {...register('time', { required: 'Horário é obrigatório' })}
                        disabled={!watchedDate || !!dateError}
                        className={`w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent appearance-none ${
                          !watchedDate || dateError ? 'bg-slate-100 cursor-not-allowed' : 'bg-white'
                        }`}
                      >
                        <option value="">
                          {!watchedDate ? 'Selecione uma data primeiro' : 'Selecione um horário'}
                        </option>
                        {availableTimeSlots.map((slot) => (
                          <option key={slot.time} value={slot.time}>
                            {slot.label} - Capacidade: {slot.capacity} pessoas
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2">
                      Número de Visitantes *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        {...register('visitors', {
                          required: 'Número de visitantes é obrigatório',
                          min: { value: 1, message: 'Mínimo 1 visitante' },
                          max: { value: scheduleConfig.maxVisitorsPerSlot, message: `Máximo ${scheduleConfig.maxVisitorsPerSlot} visitantes` },
                          validate: (value) => {
                            const selectedTime = watch('time');
                            if (selectedTime) {
                              const slot = availableTimeSlots.find((s) => s.time === selectedTime);
                              if (slot && parseInt(value) > slot.capacity) {
                                return `Este horário suporta no máximo ${slot.capacity} visitantes`;
                              }
                            }
                            return true;
                          }
                        })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder={`1-${scheduleConfig.maxVisitorsPerSlot}`}
                        min="1"
                        max={scheduleConfig.maxVisitorsPerSlot}
                      />
                    </div>
                    {errors.visitors && (
                      <p className="mt-1 text-sm text-red-600">{errors.visitors.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">
                      Instituição
                    </label>
                    <input
                      type="text"
                      {...register('institution')}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Escola/Universidade (opcional)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-2">
                    Mensagem Adicional
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                      placeholder="Alguma observação ou requisito especial? (opcional)"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-900">
                      <p className="mb-1">
                        <strong>Dias disponíveis:</strong> {availableDayNames}
                      </p>
                      <p>
                        <strong>Agendamento:</strong> Requer {scheduleConfig.advanceBookingDays} dias de antecedência. 
                        Não atendemos em feriados nacionais.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-lg transition-colors shadow-lg shadow-amber-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirmar Agendamento
                  </button>
                  <p className="text-sm text-slate-500 text-center mt-3">
                    Ao agendar, você receberá um e-mail de confirmação em até 48 horas.
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
