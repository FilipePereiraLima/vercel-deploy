import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Filipe P Lima - TADS 4 | Contador do Semestre',
  description:
    'Relógio digital e contador regressivo para o final do semestre, com linha do tempo dos trabalhos desenvolvidos no curso de TADS.',
  authors: [{ name: 'Filipe P Lima' }],
  openGraph: {
    title: 'Filipe P Lima - TADS 4',
    description: 'Contador regressivo para o final do semestre e timeline de trabalhos',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
