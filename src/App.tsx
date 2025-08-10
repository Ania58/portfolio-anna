import './App.css'
import Nav from './components/Nav'

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Nav />

      <main id="main" className="mx-auto max-w-5xl px-4 py-10">
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p>Project list will go here.</p>
        </section>

        <section id="about" className="py-8">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>About section placeholder.</p>
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Contact section placeholder.</p>
        </section>
      </main>
    </div>
  )
}

export default App

