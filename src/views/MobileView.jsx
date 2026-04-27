import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Results from '../components/Results'
import Process from '../components/Process'
import Insights from '../components/Insights'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function MobileView() {
  return (
    <div className="min-h-screen bg-brand-bg font-body text-white overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="flex flex-col w-full">
        <Hero view="mobile" />
        <Services view="mobile" />
        <Results view="mobile" />
        <Process view="mobile" />
        <Insights view="mobile" />
        <Contact view="mobile" />
        <Footer view="mobile" />
      </div>
    </div>
  )
}
