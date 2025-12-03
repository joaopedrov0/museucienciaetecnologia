import { motion } from 'motion/react';
import { Cpu, Monitor, Keyboard, HardDrive, MemoryStick, Grid3x3 } from 'lucide-react';
import { HardwareCategory } from '../data/hardware';

interface CategoryFilterProps {
  selectedCategory: HardwareCategory | 'all';
  onSelectCategory: (category: HardwareCategory | 'all') => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Grid3x3 className="w-5 h-5" />,
  'placa-mae': <Cpu className="w-5 h-5" />,
  processador: <Cpu className="w-5 h-5" />,
  'placa-video': <Monitor className="w-5 h-5" />,
  periferico: <Keyboard className="w-5 h-5" />,
  armazenamento: <HardDrive className="w-5 h-5" />,
  memoria: <MemoryStick className="w-5 h-5" />
};

const categoryNames: Record<string, string> = {
  all: 'Todas',
  'placa-mae': 'Placas-Mãe',
  processador: 'Processadores',
  'placa-video': 'Placas de Vídeo',
  periferico: 'Periféricos',
  armazenamento: 'Armazenamento',
  memoria: 'Memórias'
};

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories: Array<HardwareCategory | 'all'> = [
    'all',
    'placa-mae',
    'processador',
    'placa-video',
    'periferico',
    'armazenamento',
    'memoria'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-slate-900 mb-4">Filtrar por Categoria</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCategory(category)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              selectedCategory === category
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span
              className={
                selectedCategory === category ? 'text-white' : 'text-amber-600'
              }
            >
              {categoryIcons[category]}
            </span>
            <span>{categoryNames[category]}</span>
            {selectedCategory === category && (
              <motion.span
                layoutId="activeCategory"
                className="ml-auto w-2 h-2 bg-white rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
