import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Hero from './sections/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import LogoSection from './sections/LogoSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <ShowcaseSection />
            <LogoSection/>
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer/>
        </>
    )
}

export default App
