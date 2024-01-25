import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Home from "./Components/Pages/Home";
import About from '../src/Components/Pages/About.jsx'
import Contact from "../src/Components/Pages/Contact.jsx"
import Portfolio from "../src/Components/Pages/Portfolio.jsx"
import Services from "../src/Components/Pages/Services.jsx"

function App() {
  return (
    <>
      <main className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
