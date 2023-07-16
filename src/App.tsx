import { BrowserRouter, Routes, Route } from "react-router-dom";

import DocsHomePage from "./pages/DocsHomePage";
import Page404 from "./pages/Page404";

import JSMDNRoutes from "./pages/JS/JSMDNRoutes";

import JSHome from "./pages/JS/JSHome";
import MainLayout from "./pages/MainLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocsHomePage />}></Route>
        <Route path="/test" element={<MainLayout />}></Route>

        <Route path="/javascript" element={<JSHome />}></Route>
        <Route path="/javascript/mdn/*" element={<JSMDNRoutes />}></Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
