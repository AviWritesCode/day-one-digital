import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Results from '../components/Results'
import Process from '../components/Process'
import Insights from '../components/Insights'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function TabletView() {
  return (
    <div className="min-h-screen bg-brand-bg font-body text-white overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="flex flex-col w-full max-w-screen-md mx-auto">
        <Hero view="tablet" />
        <Services view="tablet" />
        <Results view="tablet" />
        <Process view="tablet" />
        <Insights view="tablet" />
        <Contact view="tablet" />
        <Footer view="tablet" />
      </div>
    </div>
  )
}
