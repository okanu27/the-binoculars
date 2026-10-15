import BusinessSection from "../components/BusinessSection";
import CultureSection from "../components/CultureSection";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import PoliticsSection from "../components/PoliticsSection";
import SportsSection from "../components/SportsSection";
import TechnologySection from "../components/TechnologySection";
import WorldSection from "../components/WorldSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <LatestNews />
      <WorldSection />
      <PoliticsSection />
      <BusinessSection />
      <TechnologySection />
      <SportsSection />
      <CultureSection />
      <Footer />
    </main>
  )
}

export default Home;