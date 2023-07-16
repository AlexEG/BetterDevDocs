import { BrowserRouter, Routes, Route } from "react-router-dom";

import DocsHomePage from "./pages/DocsHomePage";
import Page404 from "./pages/Page404";

import JSMDNRoutes from "./pages/JS/JavaScriptMDNRoutes";

import JSHome from "./pages/JS/JSHome";

import JavaScriptW3SchoolRoutes from "./pages/JS/JavaScriptW3SchoolRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocsHomePage />}></Route>

        <Route path="javascript" element={<JSHome />}>
          <Route path="mdn/*" element={<JSMDNRoutes />}></Route>
          <Route
            path="w3-school/*"
            element={<JavaScriptW3SchoolRoutes />}
          ></Route>
        </Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
