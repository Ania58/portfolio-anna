import type { ReactNode } from 'react'
import Nav from '../components/Nav'

type Props = {
  children?: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen text-slate-900">
      <Nav />
      <main id="main" className="mx-auto max-w-5xl px-4 py-10">
        {children}
      </main>
    </div>
  )
}
