import Image from 'next/image'

type TimelineItemProps = {
  semester: string
  title: string
  image: string
  description: string
  highlight?: boolean
}

export default function TimelineItem({
  semester,
  title,
  image,
  description,
  highlight = false,
}: TimelineItemProps) {
  return (
    <article className={`flex gap-6 ${highlight ? 'mt-8' : ''}`}>
      <div className="relative flex-shrink-0 w-12 h-12 mt-2">
        <div
          className={`w-full h-full rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 ${
            highlight
              ? 'bg-brand-600 border-brand-300'
              : 'bg-slate-200 border-slate-300 text-slate-600'
          }`}
        >
          {semester}
        </div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-500" />
      </div>

      <div className="flex-1 card p-5">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <Image
            src={`/imgs/${image}`}
            alt={`Trabalho ${title}`}
            width={320}
            height={180}
            className="w-40 h-24 md:w-48 md:h-32 rounded-xl object-cover border border-slate-200 shadow-sm flex-shrink-0"
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-brand-900">{title}</h3>
            <p className="text-slate-600 mt-2 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
