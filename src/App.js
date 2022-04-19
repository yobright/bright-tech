import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Astro from "./pages/Astro";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout>
             <Home />
          </Layout>} />
        <Route path="/astro" element={<Layout><Astro /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
