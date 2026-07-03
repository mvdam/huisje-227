import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HetHuisje from "./pages/HetHuisje";
import AankomstVertrek from "./pages/AankomstVertrek";
import Tarieven from "./pages/Tarieven";
import HetPark from "./pages/HetPark";
import Contact from "./pages/Contact";
import Reserveren from "./pages/Reserveren";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Ga naar hoofdinhoud
        </a>
        <Navigation />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/het-huisje" element={<HetHuisje />} />
            <Route path="/aankomst-vertrek" element={<AankomstVertrek />} />
            <Route path="/tarieven" element={<Tarieven />} />
            <Route path="/het-park" element={<HetPark />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserveren" element={<Reserveren />} />
            <Route path="*" element={<h1>Pagina niet gevonden</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
