import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package } from 'lucide-react';
import { hardwareCollection, HardwareCategory } from '../data/hardware';
import { HardwareCard } from '../components/HardwareCard';
import { CategoryFilter } from '../components/CategoryFilter';

export function Collection() {
  const [selectedCategory, setSelectedCategory] = useState<HardwareCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = hardwareCollection.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-slate-900 mb-3">Acervo do Museu</h1>
          <p className="text-slate-600">
            Explore nossa coleção de {hardwareCollection.length} peças históricas de hardware.
            Cada item representa um marco importante na evolução da computação.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nome, fabricante ou descrição..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Category Filter */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              
              {/* Stats */}
              <div className="mt-6 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl p-6 text-white shadow-lg">
                <Package className="w-8 h-8 mb-3" />
                <div className="text-2xl mb-1">{filteredItems.length}</div>
                <div className="text-sm text-amber-100">
                  {filteredItems.length === 1 ? 'peça encontrada' : 'peças encontradas'}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Hardware Grid */}
          <div className="lg:col-span-3">
            {filteredItems.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredItems.map((item, index) => (
                  <HardwareCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl p-12 text-center border border-slate-200"
              >
                <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-slate-900 mb-2">Nenhuma peça encontrada</h3>
                <p className="text-slate-600">
                  Tente ajustar os filtros ou termo de busca para encontrar o que procura.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
