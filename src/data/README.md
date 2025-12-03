# Configuração de Dados do Museu Virtual

Este diretório contém os arquivos de configuração centralizados do museu. Aqui você pode facilmente gerenciar o acervo e a disponibilidade de visitas.

## 📦 hardware.ts - Gerenciamento do Acervo

Este arquivo contém toda a coleção de peças do museu.

### Como adicionar uma nova peça:

1. Abra o arquivo `/data/hardware.ts`
2. No array `hardwareCollection`, adicione um novo objeto seguindo este modelo:

```typescript
{
  id: '7', // ID único (sequencial)
  name: 'Nome da Peça',
  category: 'categoria', // Opções: placa-mae, processador, placa-video, periferico, armazenamento, memoria
  year: '2020',
  manufacturer: 'Fabricante',
  description: 'Breve descrição da peça (1-2 linhas)',
  detailedDescription: 'Descrição completa e detalhada da peça, seu contexto histórico...',
  technicalSpecs: [
    'Especificação técnica 1',
    'Especificação técnica 2',
    'Especificação técnica 3'
  ],
  imageUrl: 'URL_DA_IMAGEM', // Use unsplash ou outra fonte
  documentationUrl: 'https://link-para-documentacao-externa.com',
  historicalSignificance: 'Por que esta peça é historicamente importante...'
}
```

### Categorias disponíveis:

- `placa-mae` - Placas-Mãe
- `processador` - Processadores
- `placa-video` - Placas de Vídeo
- `periferico` - Periféricos (teclados, mouses, etc.)
- `armazenamento` - Dispositivos de armazenamento (HDs, SSDs)
- `memoria` - Memórias RAM

---

## 📅 schedule.ts - Configuração de Visitas

Este arquivo controla a disponibilidade de dias e horários para agendamento de visitas.

### Configurações Principais:

#### 1. Dias Disponíveis (`availableDays`)

Array com os dias da semana disponíveis para visitas:
- `0` = Domingo
- `1` = Segunda-feira
- `2` = Terça-feira
- `3` = Quarta-feira
- `4` = Quinta-feira
- `5` = Sexta-feira
- `6` = Sábado

**Exemplo atual:** `[1, 2, 3, 4, 5]` (Segunda a Sexta)

Para adicionar sábados:
```typescript
availableDays: [1, 2, 3, 4, 5, 6]
```

#### 2. Horários Disponíveis (`timeSlots`)

Defina os horários de visita com capacidade específica para cada um:

```typescript
timeSlots: [
  { 
    time: '09:00', 
    label: '09:00 - Manhã', 
    capacity: 20 
  },
  { 
    time: '14:00', 
    label: '14:00 - Tarde', 
    capacity: 15 
  }
]
```

**Campos:**
- `time`: Horário no formato HH:MM
- `label`: Como será exibido no formulário
- `capacity`: Número máximo de visitantes neste horário
- `availableDays` (opcional): Array com dias específicos onde este horário está disponível

**Exemplo de horário apenas em dias específicos:**
```typescript
{ 
  time: '17:00', 
  label: '17:00 - Tarde Especial', 
  capacity: 10,
  availableDays: [1, 3, 5] // Apenas segunda, quarta e sexta
}
```

#### 3. Datas Bloqueadas (`blockedDates`)

Array com datas específicas que não permitem visitas (feriados, manutenção, etc.):

```typescript
blockedDates: [
  '2025-01-01', // Ano Novo
  '2025-12-25', // Natal
  '2025-07-15'  // Manutenção especial
]
```

**Formato:** YYYY-MM-DD

Para adicionar uma nova data bloqueada:
1. Adicione no array `blockedDates`
2. Adicione também em `blockedDatesWithReasons` com o motivo:

```typescript
export const blockedDatesWithReasons: BlockedDateInfo[] = [
  { date: '2025-07-15', reason: 'Manutenção do museu' }
]
```

#### 4. Configurações Gerais

```typescript
maxVisitorsPerSlot: 20,        // Máximo de visitantes por horário (geral)
advanceBookingDays: 2,         // Quantos dias de antecedência é necessário
maxBookingDays: 90             // Até quantos dias no futuro pode agendar
```

### Exemplo: Configurar fim de semana especial

Para permitir visitas em um sábado específico (sobrescrevendo a regra geral):

1. Mantenha `availableDays: [1, 2, 3, 4, 5]` (sem sábado)
2. Para adicionar um sábado específico, você precisaria remover essa data de `blockedDates` (se estiver lá)
3. **Nota:** A configuração atual não permite exceções individuais para datas. Se precisar dessa funcionalidade avançada, considere expandir a lógica em `isDateAvailable()`

### Validações Automáticas

O sistema automaticamente:
- ✅ Bloqueia datas passadas
- ✅ Valida o período de antecedência mínima
- ✅ Valida o período máximo de agendamento
- ✅ Verifica se o dia da semana está disponível
- ✅ Verifica se a data não está na lista de bloqueadas
- ✅ Valida se o número de visitantes não excede a capacidade do horário
- ✅ Exibe o motivo de datas bloqueadas (feriados)

### Interface Visual

O sistema inclui:
- 📅 **Calendário visual** mostrando dias disponíveis (verde), bloqueados (vermelho) e indisponíveis (cinza)
- 🔍 **Tooltips** ao passar o mouse sobre datas bloqueadas explicando o motivo
- ✅ **Validação em tempo real** com feedback visual
- 📊 **Capacidade dinâmica** exibida na seleção de horário

---

## 🎯 Dicas de Uso

### Para adicionar um novo feriado:

```typescript
// Em scheduleConfig.blockedDates
'2025-06-10', // Corpus Christi

// Em blockedDatesWithReasons
{ date: '2025-06-10', reason: 'Corpus Christi' }
```

### Para mudar horário de funcionamento:

```typescript
timeSlots: [
  { time: '08:00', label: '08:00 - Manhã Cedo', capacity: 15 },
  { time: '09:30', label: '09:30 - Manhã', capacity: 20 },
  // ... adicione os horários que desejar
]
```

### Para bloquear um período (férias, por exemplo):

```typescript
blockedDates: [
  '2025-07-01',
  '2025-07-02',
  '2025-07-03',
  // ... continue com todos os dias
  '2025-07-31'
]
```

---

## 🚀 Aplicando Mudanças

Após editar qualquer arquivo de configuração:
1. Salve o arquivo
2. A aplicação recarregará automaticamente
3. As mudanças serão refletidas imediatamente no site

Não é necessário modificar mais nenhum arquivo - toda a lógica já está implementada!
