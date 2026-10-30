
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  Images,
  Mail,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export function StudentProjects() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-600/15 text-amber-400 px-4 py-2 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Conhecimento feito por estudantes
            </div>

            <h1 className="text-4xl md:text-6xl mb-6">
              Trabalhos dos <span className="text-amber-500">Alunos</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Um espaço dedicado à criatividade, à pesquisa e aos projetos
              desenvolvidos por estudantes. Em breve, você poderá conhecer
              ideias, experiências e descobertas que conectam ciência,
              tecnologia e história.
            </p>

            <button
              type="button"
              onClick={() =>
                document.getElementById('como-participar')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              className="inline-flex items-center gap-2 mt-8 bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Como participar
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <BookOpen className="w-10 h-10 text-amber-600 mx-auto mb-4" />
          <h2 className="text-3xl text-slate-900 mb-4">Projetos em destaque</h2>
          <p className="text-slate-600 leading-relaxed">
            Cada trabalho aprovado terá sua própria página, com apresentação
            do projeto, imagens, texto e, quando aplicável, vídeos e outros
            materiais complementares.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-5">
            <Images className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-xl text-slate-900 mb-3">
            Os primeiros projetos estão a caminho!
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Esta área está sendo preparada para receber os trabalhos dos
            alunos. Assim que os primeiros projetos forem revisados e
            aprovados, eles aparecerão aqui.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Images className="w-4 h-4" /> Galerias de imagens
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText className="w-4 h-4" /> Textos e pesquisas
            </span>
            <span className="inline-flex items-center gap-2">
              <PlayCircle className="w-4 h-4" /> Vídeos
            </span>
          </div>
        </div>
      </section>

      <section id="como-participar" className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-slate-900 mb-4">Como participar</h2>
            <p className="text-slate-600 leading-relaxed">
              Quer compartilhar seu projeto? Prepare o material seguindo o
              modelo e as orientações abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <Download className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg text-slate-900 mb-2">1. Prepare o trabalho</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Baixe o modelo de submissão e preencha as informações do
                projeto. Inclua os materiais complementares solicitados.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <Mail className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg text-slate-900 mb-2">2. Envie por e-mail</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Envie o documento preenchido e os arquivos do projeto para o
                endereço oficial de recebimento divulgado pelo responsável.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <ShieldCheck className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg text-slate-900 mb-2">3. Aguarde a revisão</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Os trabalhos serão avaliados antes da publicação. Poderão ser
                solicitados ajustes para melhorar a clareza e a apresentação.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-700 shrink-0" />
              <div>
                <h3 className="text-slate-900 mb-2">Antes de enviar</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Confira se o conteúdo está completo, identifique os autores,
                  indique as fontes utilizadas e certifique-se de que possui
                  autorização para compartilhar imagens, vídeos e outros
                  materiais incluídos no trabalho.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={`${import.meta.env.BASE_URL}documentos/modelo-submissao-trabalho.docx`}
              download
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              Baixar modelo de submissão
            </a>
            <p className="text-sm text-slate-500 mt-3">
              Preencha o modelo antes de encaminhar seu projeto.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-slate-600 mb-5">
          Quer conhecer os equipamentos e a história da computação?
        </p>
        <Link
          to="/acervo"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
        >
          Explorar o acervo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
