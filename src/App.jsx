import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import World from "./pages/World";
import Business from "./pages/Business";
import CultureEntertainment from "./pages/CultureEntertainment";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import TechnologyScience from "./pages/TechnologyScience";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/business" element={<Business />} />
        <Route path="/culture-entertainment" element={<CultureEntertainment />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology-science" element={<TechnologyScience />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;