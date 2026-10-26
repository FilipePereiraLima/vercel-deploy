import Header from './components/Header'
import Countdown from './components/Countdown'
import Timeline from './components/Timeline'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Countdown />
      <Timeline />

      <footer className="bg-brand-900 text-white py-12 md:py-16 border-t border-brand-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-brand-100 mb-3">Filipe P Lima</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Estudante do curso de Tecnologia em Análise e Desenvolvimento
                de Sistemas (TADS) - 4º semestre.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-brand-100 mb-3">Curso</h3>
              <p className="text-slate-400 text-sm">TADS 4</p>
            </div>
            <div className="text-right md:text-left">
              <h3 className="text-lg font-bold text-brand-100 mb-3">Repositório</h3>
              <a
                href="https://github.com/FilipePereiraLima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 underline text-sm"
              >
                https://github.com/FilipePereiraLima
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-brand-800 pt-8 text-xs text-slate-500">
            <span>Projeto de deploy - Gerência e Configuração de Serviços para Internet</span>
            <span>Vercel Deploy</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
