import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhyInsuro } from './components/WhyInsuro'
import { Process } from './components/Process'
import { Criteria } from './components/Criteria'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhyInsuro />
        <Process />
        <Criteria />
      </main>
      <Footer />
    </>
  )
}

export default App
