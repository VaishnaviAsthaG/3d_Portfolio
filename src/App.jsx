import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import LogoSection from "./sections/LogoSection.jsx";
import FeaturesCard from "./sections/FeaturesCard.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => (
    <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        {/*<LogoSection />*/}
        <FeaturesCard />
        {/*<ExperienceSection />*/}
        <TechStack/>
        {/*<Testimonials/>*/}
        <Contact/>
        <Footer/>
    </>
);

export default App;
