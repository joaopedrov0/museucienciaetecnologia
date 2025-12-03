import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Building2, ExternalLink } from 'lucide-react';
import { HardwareItem } from '../data/hardware';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HardwareCardProps {
  item: HardwareItem;
  index: number;
}

export function HardwareCard({ item, index }: HardwareCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        to={`/peca/${item.id}`}
        className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-amber-600"
      >
        {/* Image */}
        <div className="relative h-48 bg-slate-100 overflow-hidden">
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs">
            {item.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                {item.name}
              </h3>
              <div className="flex items-center space-x-1 text-slate-500 text-sm">
                <Building2 className="w-3.5 h-3.5" />
                <span>{item.manufacturer}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700">
              {getCategoryName(item.category)}
            </span>
            <span className="text-amber-600 text-sm inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Ver detalhes</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    'placa-mae': 'Placa-Mãe',
    processador: 'Processador',
    'placa-video': 'Placa de Vídeo',
    periferico: 'Periférico',
    armazenamento: 'Armazenamento',
    memoria: 'Memória'
  };
  return categoryMap[category] || category;
}
