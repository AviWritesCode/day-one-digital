import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Results from '../components/Results'
import Process from '../components/Process'
import Insights from '../components/Insights'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HorizontalScroller from '../components/HorizontalScroller'

export default function DesktopView() {
  return (
    <div className="min-h-screen bg-brand-bg font-body text-white overflow-hidden">
      <Navbar />
      <HorizontalScroller>
        <Hero />
        <Services />
        <Results />
        <Process />
        <Insights />
        <Contact />
        <Footer />
      </HorizontalScroller>
    </div>
  )
}
