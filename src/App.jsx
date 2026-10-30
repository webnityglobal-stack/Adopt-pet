
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import FindAPet from "./pages/FindAPet";
import PetDetails from "./pages/PetDetails";
import AdoptionForm from "./pages/AdoptionForm";
import OurPromise from "./pages/OurPromise";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-pet" element={<FindAPet />} />
        <Route path="/find-a-pet/:slug" element={<PetDetails />} />
        <Route path="/meet-your-match/:slug" element={<AdoptionForm />} />
        <Route path="/our-promise" element={<OurPromise />} />
      </Routes>

      <Footer />
    </>
  );
}
