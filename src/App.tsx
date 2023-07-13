import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JavaScriptHome from "./pages/JavaScript/JavaScriptHome";
import TailwindCSSHome from "./pages/TailwindCSS/TailwindCSSHome";
import ReactHome from "./pages/React/ReactHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/javascript" element={<JavaScriptHome />}></Route>
        <Route path="/react" element={<ReactHome />}></Route>
        <Route path="/tailwindcss" element={<TailwindCSSHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
