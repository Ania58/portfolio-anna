import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function MainLayout() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-400 via-sky-400 to-blue-600" />
      <div className="min-h-screen text-slate-900">
        <Nav />
        <main id="main" className="mx-auto max-w-5xl px-4 py-10">
          <Outlet />
        </main>
      </div>
    </>
  )
}



