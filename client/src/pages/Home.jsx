import HeroAssistance from "../components/HeroAssistance";
import HeroImageSection from "../components/HeroImageSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import SolutionSection from "../components/SolutionSection";
import ProcessSection from "../components/ProcessSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HeroImageSection />
            <HeroAssistance />
            <SolutionSection />
            <ProcessSection />
            <Footer />
        </>
    );
};

export default Home;
