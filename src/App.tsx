import { BrowserRouter, Routes, Route } from "react-router-dom";

import DocsHomePage from "./pages/DocsHomePage";
import Page404 from "./pages/Page404";

import JSMDNRoutes from "./pages/JS/JSMDNRoutes";

import JSHome from "./pages/JS/JSHome";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<DocsHomePage />}></Route>
        <Route path="/javascript" element={<JSHome />}></Route>
        <Route path="/javascript/mdn/*" element={<JSMDNRoutes />}></Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
