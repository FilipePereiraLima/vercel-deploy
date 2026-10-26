import TimelineItem from './TimelineItem'

const items = [
  {
    semester: '1º',
    title: 'Servidor Web com Apache Tomcat',
    image: 'tomcat.png',
    description:
      'Configuração e deploy de aplicações Java em contêiner de servlet Apache Tomcat. Introdução ao ciclo de vida de servlets, sessões e deploy de arquivos WAR em ambiente de homologação.',
  },
  {
    semester: '2º',
    title: 'Sistema de Análise de Sentimentos',
    image: 'sentimentos.png',
    description:
      'Aplicação desktop desenvolvida com JavaFX para captura e classificação de sentimentos dos usuários em tempo real, com interface gráfica e armazenamento local de respostas.',
  },
  {
    semester: '3º',
    title: 'AgroCal - Sistema para o Agronegócio',
    image: 'agrocal.png',
    description:
      'Sistema de gerenciamento de produção agrícola com banco de dados relacional. Inclui cadastro de culturas, controle de safra e emissão de relatórios gerenciais de produtividade.',
  },
  {
    semester: '4º',
    title: 'Controle de Estoque e Deploy na Vercel',
    image: 'controle_estoque.png',
    description:
      'Sistema web de controle de estoque desenvolvido na disciplina de Gerência e Configuração de Serviços para Internet (TADS 4), com deploy contínuo na Vercel e versionamento semântico no GitHub.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-brand-500">📚</span>
            Linha do Tempo dos Trabalhos
          </h2>
          <p className="section-subtitle">
            Principais trabalhos desenvolvidos a cada semestre do curso de
            Tecnologia em Análise e Desenvolvimento de Sistemas.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <TimelineItem
                key={item.semester}
                semester={item.semester}
                title={item.title}
                image={item.image}
                description={item.description}
                highlight={item.semester === '4º'}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
