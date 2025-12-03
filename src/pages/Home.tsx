import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, Users, Award, BookOpen, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm border border-amber-600/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-200">Projeto Acadêmico 2026</span>
            </motion.div>

            <h1 className="text-slate-100 mb-6">
              Museu ciência e tecnologia - IFSP Câmpus Jacareí
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Uma jornada pela evolução da computação. Explore nosso acervo físico de
              componentes históricos que moldaram a era digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/acervo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-amber-600/30"
                >
                  <span>Explorar Acervo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/agendar">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg transition-colors"
                >
                  Agendar Visita
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-slate-900 mb-6">Sobre o Projeto</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  O Museu ciência e tecnologia é um projeto acadêmico dedicado à preservação e
                  documentação da história da computação através de componentes físicos reais.
                  Nosso acervo conta com peças originais que representam marcos importantes na
                  evolução tecnológica.
                </p>
                <p>
                  Cada item em nossa coleção foi cuidadosamente selecionado por sua
                  importância histórica, inovação tecnológica ou impacto no desenvolvimento
                  da computação moderna. Desde processadores pioneiros até placas-mãe que
                  definiram gerações inteiras de computadores.
                </p>
                <p>
                  Este espaço virtual permite que estudantes, pesquisadores e entusiastas
                  explorem nosso acervo físico antes de uma visita presencial, além de
                  fornecer documentação técnica e contexto histórico de cada peça.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://files.tecnoblog.net/wp-content/uploads/2025/07/ilustracao-de-hardwares-de-pc.jpg"
                  alt="Museu ciência e tecnologia"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-900 mb-4">Por Que Visitar?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Descubra os benefícios de explorar nosso museu, seja virtualmente ou
              presencialmente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Info Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-white mb-4">Visite Nosso Museu</h2>
                <p className="text-slate-300 mb-6">
                  Agende uma visita presencial e explore nosso acervo físico com o
                  acompanhamento de especialistas. Uma experiência educativa única para
                  estudantes e entusiastas de tecnologia.
                </p>
                <Link to="/agendar">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Agendar Visita</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Clock className="w-8 h-8 text-amber-400 mb-2" />
                  <div className="text-sm text-slate-400">Horário</div>
                  <div>Seg - Sex</div>
                  <div className="text-sm">9h às 15h</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <MapPin className="w-8 h-8 text-amber-400 mb-2" />
                  <div className="text-sm text-slate-400">Local</div>
                  <div>Campus</div>
                  <div className="text-sm">Sala 204</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Users className="w-8 h-8 text-amber-400 mb-2" />
                  <div className="text-sm text-slate-400">Capacidade</div>
                  <div>Até 20</div>
                  <div className="text-sm">pessoas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Award className="w-8 h-8 text-amber-400 mb-2" />
                  <div className="text-sm text-slate-400">Entrada</div>
                  <div>Gratuita</div>
                  <div className="text-sm">estudantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Conteúdo Educativo',
    description:
      'Cada peça inclui documentação técnica detalhada e contexto histórico para enriquecer o aprendizado.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Peças Autênticas',
    description:
      'Acervo composto por componentes originais, não réplicas, preservando a autenticidade histórica.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Visitas Guiadas',
    description:
      'Acompanhamento de especialistas que compartilham conhecimento sobre cada item do acervo.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Cronologia Completa',
    description:
      'Explore a evolução da tecnologia através das décadas, desde os anos 80 até os dias atuais.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Experiência Interativa',
    description:
      'Interface virtual intuitiva complementa a experiência presencial do museu físico.'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Acesso Facilitado',
    description:
      'Localizado no campus, com horários flexíveis e agendamento online simplificado.'
  }
];
