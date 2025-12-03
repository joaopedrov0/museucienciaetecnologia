import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Building2,
  ExternalLink,
  Cpu,
  Info,
  History,
  FileText
} from 'lucide-react';
import { hardwareCollection } from '../data/hardware';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HardwareDetail() {
  const { id } = useParams<{ id: string }>();
  const item = hardwareCollection.find((h) => h.id === id);

  if (!item) {
    return <Navigate to="/acervo" replace />;
  }

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to="/acervo"
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-amber-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Acervo</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Calendar className="w-5 h-5" />
                      <span>{item.year}</span>
                    </div>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                      {getCategoryName(item.category)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Building2 className="w-5 h-5" />
                    <span>{item.manufacturer}</span>
                  </div>
                  <a
                    href={item.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white px-4 py-3 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Ver Documentação Externa</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Title */}
            <div>
              <h1 className="text-slate-900 mb-4">{item.name}</h1>
              <p className="text-slate-600 text-lg">{item.description}</p>
            </div>

            {/* Detailed Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Info className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-slate-900">Descrição Detalhada</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">{item.detailedDescription}</p>
            </div>

            {/* Technical Specs */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Cpu className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-slate-900">Especificações Técnicas</h2>
              </div>
              <ul className="space-y-3">
                {item.technicalSpecs.map((spec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{spec}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Historical Significance */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-xl text-white">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <History className="w-5 h-5" />
                </div>
                <h2 className="text-white">Importância Histórica</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">{item.historicalSignificance}</p>
            </div>

            {/* Documentation Link Card */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">Documentação Adicional</h3>
                  <p className="text-slate-600 mb-3">
                    Acesse documentação técnica oficial, manuais e recursos externos para
                    aprofundar seu conhecimento sobre este componente.
                  </p>
                  <a
                    href={item.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 inline-flex items-center space-x-1 transition-colors"
                  >
                    <span>Acessar documentação</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-slate-900 mb-6">Outras Peças da Mesma Categoria</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareCollection
              .filter((h) => h.category === item.category && h.id !== item.id)
              .slice(0, 3)
              .map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  to={`/peca/${relatedItem.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 hover:border-amber-600"
                >
                  <ImageWithFallback
                    src={relatedItem.imageUrl}
                    alt={relatedItem.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h3 className="text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                      {relatedItem.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {relatedItem.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
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
