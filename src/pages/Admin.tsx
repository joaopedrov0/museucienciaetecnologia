import { motion } from 'motion/react';
import { Settings, Database, Calendar } from 'lucide-react';
import { ScheduleConfigSummary } from '../components/ScheduleConfigSummary';
import { hardwareCollection } from '../data/hardware';

// Página de admin que pode ser acessada com 'url/admin'

export function Admin() {
  const categoryCounts = hardwareCollection.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="w-8 h-8 text-amber-600" />
            <h1 className="text-slate-900">Painel de Configurações</h1>
          </div>
          <p className="text-slate-600">
            Visualize as configurações atuais do museu. Para modificar, edite os arquivos na
            pasta <code className="bg-slate-200 px-2 py-1 rounded">/data</code>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Acervo Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Database className="w-6 h-6 text-amber-600" />
                <h3 className="text-slate-900">Resumo do Acervo</h3>
              </div>

              <div className="mb-6">
                <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg p-6 text-white">
                  <div className="text-4xl mb-2">{hardwareCollection.length}</div>
                  <div>Peças no Acervo Total</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-slate-900 text-sm mb-3">Por Categoria</h4>
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <div
                    key={category}
                    className="flex justify-between items-center bg-slate-50 rounded-lg p-3"
                  >
                    <span className="text-slate-700 capitalize">
                      {getCategoryName(category)}
                    </span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                      {count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>📝 Para adicionar peças:</strong> Edite o arquivo{' '}
                    <code className="bg-blue-100 px-2 py-1 rounded text-xs">
                      /data/hardware.ts
                    </code>
                  </p>
                </div>
              </div>

              {/* Recent items */}
              <div className="mt-6">
                <h4 className="text-slate-900 text-sm mb-3">Últimas Peças Adicionadas</h4>
                <div className="space-y-2">
                  {hardwareCollection.slice(-3).reverse().map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-slate-50 rounded-lg p-3"
                    >
                      <div className="flex-1">
                        <div className="text-slate-900 text-sm">{item.name}</div>
                        <div className="text-slate-500 text-xs">
                          {item.manufacturer} • {item.year}
                        </div>
                      </div>
                      <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">
                        ID: {item.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Schedule Configuration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ScheduleConfigSummary />
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="w-6 h-6 text-amber-400" />
              <h3 className="text-white">Estatísticas do Sistema</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-amber-400 mb-2">{hardwareCollection.length}</div>
                <div className="text-slate-300 text-sm">Peças Catalogadas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-amber-400 mb-2">
                  {Object.keys(categoryCounts).length}
                </div>
                <div className="text-slate-300 text-sm">Categorias Ativas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-amber-400 mb-2">
                  {new Set(hardwareCollection.map((item) => item.manufacturer)).size}
                </div>
                <div className="text-slate-300 text-sm">Fabricantes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-amber-400 mb-2">
                  {Math.max(...hardwareCollection.map((item) => parseInt(item.year))) -
                    Math.min(...hardwareCollection.map((item) => parseInt(item.year)))}
                </div>
                <div className="text-slate-300 text-sm">Anos de História</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documentation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <h3 className="text-slate-900 mb-4">Documentação e Recursos</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Abra o arquivo /data/README.md para ver a documentação completa');
              }}
              className="bg-slate-50 hover:bg-slate-100 rounded-lg p-4 transition-colors border border-slate-200"
            >
              <div className="text-amber-600 mb-2">📚 README.md</div>
              <div className="text-slate-900 text-sm mb-1">Guia de Configuração</div>
              <div className="text-slate-600 text-xs">
                Como adicionar peças e configurar disponibilidade
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Abra o arquivo /data/schedule-examples.ts para ver exemplos práticos');
              }}
              className="bg-slate-50 hover:bg-slate-100 rounded-lg p-4 transition-colors border border-slate-200"
            >
              <div className="text-amber-600 mb-2">💡 schedule-examples.ts</div>
              <div className="text-slate-900 text-sm mb-1">Exemplos de Configuração</div>
              <div className="text-slate-600 text-xs">
                9 exemplos prontos para diferentes cenários
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Edite /data/hardware.ts para gerenciar o acervo');
              }}
              className="bg-slate-50 hover:bg-slate-100 rounded-lg p-4 transition-colors border border-slate-200"
            >
              <div className="text-amber-600 mb-2">🗄️ hardware.ts</div>
              <div className="text-slate-900 text-sm mb-1">Gerenciar Acervo</div>
              <div className="text-slate-600 text-xs">Adicionar, editar ou remover peças</div>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Edite /data/schedule.ts para configurar visitas');
              }}
              className="bg-slate-50 hover:bg-slate-100 rounded-lg p-4 transition-colors border border-slate-200"
            >
              <div className="text-amber-600 mb-2">📅 schedule.ts</div>
              <div className="text-slate-900 text-sm mb-1">Configurar Visitas</div>
              <div className="text-slate-600 text-xs">
                Horários, dias disponíveis e datas bloqueadas
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    'placa-mae': 'Placas-Mãe',
    processador: 'Processadores',
    'placa-video': 'Placas de Vídeo',
    periferico: 'Periféricos',
    armazenamento: 'Armazenamento',
    memoria: 'Memórias'
  };
  return categoryMap[category] || category;
}
