import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Process />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
