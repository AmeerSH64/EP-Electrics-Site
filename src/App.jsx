import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App