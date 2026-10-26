'use client'

import { useEffect, useState } from 'react'

// Data prevista para o final do semestre (ajuste conforme o calendário acadêmico)
const SEMESTER_END = new Date('2026-12-18T23:59:59-03:00').getTime()

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  })

  useEffect(() => {
    const update = () => {
      const now = Date.now()
      const diff = SEMESTER_END - now

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, finished: true })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTime({ days, hours, minutes, seconds, finished: false })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contador" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="text-brand-500">⏱️</span>
            Contador para o Final do Semestre
          </h2>
          <p className="section-subtitle">
            Faltam para o encerramento do semestre letivo do curso TADS 4. O
            relógio atualiza a cada segundo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[time.days, time.hours, time.minutes, time.seconds].map((value, i) => {
            const labels = ['Dias', 'Horas', 'Minutos', 'Segundos']
            return (
              <div key={i} className="card p-6 text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-brand-600">
                  {time.finished ? '--' : pad(value)}
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {labels[i]}
                </p>
              </div>
            )
          })}
        </div>

        {time.finished && (
          <div className="mt-8 flex justify-center">
            <div className="badge animate-pulse-slow">Semestre encerrado 🎉</div>
          </div>
        )}
      </div>
    </section>
  )
}
