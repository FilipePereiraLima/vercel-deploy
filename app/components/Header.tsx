import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold shadow-lg shadow-brand-500/40">
              FP
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-900 tracking-tight">
                Filipe P Lima
              </h1>
              <p className="text-sm text-slate-500">TADS 4 - Tecnologia em Análise e Desenvolvimento de Sistemas</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 md:gap-4">
            <Link
              href="#contador"
              className="px-4 py-2 rounded-xl text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition shadow-md shadow-brand-500/30"
            >
              Contador do Semestre
            </Link>
            <Link
              href="#timeline"
              className="px-4 py-2 rounded-xl text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
            >
              Linha do Tempo
            </Link>
            <a
              href="https://github.com/FilipePereiraLima"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-medium border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
