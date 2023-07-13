import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";

//* -----------[ JS ]----------- *//
import JavaScriptHome from "./pages/JavaScript/JavaScriptHome";
import JavaScriptMDN from "./pages/JavaScript/JavaScriptMDN";

//* -----------[ Tailwind CSS ]----------- *//
import TailwindCSSHome from "./pages/TailwindCSS/TailwindCSSHome";

//* -----------[ React ]----------- *//
import ReactHome from "./pages/React/ReactHome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/javascript" element={<JavaScriptHome />}></Route>
        <Route path="/javascript/mdn" element={<JavaScriptMDN />}></Route>
        <Route path="/react" element={<ReactHome />}></Route>
        <Route path="/tailwindcss" element={<TailwindCSSHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
