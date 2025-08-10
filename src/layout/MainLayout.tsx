import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function MainLayout() {
  return (
    <div className="min-h-screen text-slate-900">
      <Nav />
      <main id="main" className="mx-auto max-w-5xl px-4 py-10">
        <Outlet /> 
      </main>
    </div>
  )
}

