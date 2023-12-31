import { BrowserRouter, Routes, Route } from "react-router-dom";

import DocsHomePage from "./pages/DocsHomePage";
import Page404 from "./pages/Page404";
// JavaScript
import JSMDNRoutes from "./DATA/JS/JavaScriptMDNRoutes";
import JavaScriptW3SchoolRoutes from "./DATA/JS/JavaScriptW3SchoolRoutes";

import JavaScriptHome from "./pages/JavaScriptHome";

// TailwindCSS
import TailwindCSSHome from "./pages/TailwindCSSHome";
import TailwindcssOfficialRoutes from "./DATA/TailwindCSS/TailwindcssOfficialRoutes";

// CSS
import CSSHome from "./pages/CSSHome";
import CSSMDNRoutes from "./DATA/CSS/CSSMDNRoutes";

// Vite
import ViteHome from "./pages/ViteHome";
import ViteOfficialRoutes from "./DATA/Vite/ViteOfficialRoutes";

// GoLang
import GoLangHome from "./pages/GoLangHome";
import GoW3SchoolRoutes from "./DATA/GoLang/GoW3SchoolRoutes";
// MyStuff
import MyStuff from "./pages/MyStuff";
import MyStuffComponentsRoutes from "./DATA/MyStuff/MyStuffComponentsRoutes";

import { useState } from "react";

function App() {
  const [Theme, setTheme] = useState({
    sidebar: {
      BackgroundColor: "bg-neutral-950",
    },
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocsHomePage />}></Route>

        <Route path="javascript" element={<JavaScriptHome Theme={Theme} />}>
          <Route path="mdn/*" element={<JSMDNRoutes />}></Route>
          <Route
            path="w3-school/*"
            element={<JavaScriptW3SchoolRoutes />}
          ></Route>
        </Route>

        <Route path="tailwindcss" element={<TailwindCSSHome Theme={Theme} />}>
          <Route
            path="official/*"
            element={<TailwindcssOfficialRoutes />}
          ></Route>
        </Route>

        <Route path="css" element={<CSSHome Theme={Theme} />}>
          <Route path="mdn/*" element={<CSSMDNRoutes />}></Route>
        </Route>

        <Route path="vite" element={<ViteHome Theme={Theme} />}>
          <Route path="official/*" element={<ViteOfficialRoutes />}></Route>
        </Route>

        <Route path="golang" element={<GoLangHome Theme={Theme} />}>
          <Route path="w3-school/*" element={<GoW3SchoolRoutes />}></Route>
        </Route>

        <Route path="mystuff" element={<MyStuff Theme={Theme} />}>
          <Route
            path="components/*"
            element={<MyStuffComponentsRoutes />}
          ></Route>
        </Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
