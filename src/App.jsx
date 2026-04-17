import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Features from "./pages/Features.jsx";
import Feedback from "./pages/Feedback.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Story />} />
        <Route path="/services" element={<Features />} />
        <Route path="/contact" element={<Feedback />} />
      </Routes>
    </Router>
  );
}