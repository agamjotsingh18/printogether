import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./components/Blog";
import { PrivacyPolicy, DeliveryReturnPolicy, TermsConditions } from "./components/PrivacyPolicy";
import BusinessCards from "./components/BusinessCards";
import Envelopes from "./components/Envelopes";
import AcrylicSignBoard from "./components/AcrylicSignBoard";
import Flyers from "./components/Flyers";
import Stickers from "./components/Stickers";
import Labels from "./components/Labels";
import TShirts from "./components/T-shirts";
import PhotoFrames from "./components/PhotoFrames";
import Calendars from "./components/Calendars";
import Hoodies from "./components/Hoodies";
import Caps from "./components/Caps";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SubNavbar />
      <div style={{ width: "100vw", overflowX: "clip", maxWidth: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
          <Route path="/delivery-return" element={<DeliveryReturnPolicy />} /> 
          <Route path="/terms-conditions" element={<TermsConditions />} /> 
          <Route path="/services/business-essentials/business-cards" element={<BusinessCards />} />
          <Route path="/services/business-essentials/envelopes" element={<Envelopes />} />
          <Route path="/services/marketing-materials/acrylic-sign-board" element={<AcrylicSignBoard />} />
          <Route path="/services/marketing-materials/flyers" element={<Flyers />} />
          <Route path="/services/packaging-labels/stickers" element={<Stickers />} />
          <Route path="/services/packaging-labels/labels" element={<Labels />} />
          <Route path="/services/personalized-gifts/tshirts" element={<TShirts />} />
          <Route path="/services/personalized-gifts/photo-frames" element={<PhotoFrames />} />
          <Route path="/services/personalized-gifts/calendars" element={<Calendars />} />
          <Route path="/services/tshirt-printing/hoodies" element={<Hoodies />} />
          <Route path="/services/tshirt-printing/caps" element={<Caps />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
