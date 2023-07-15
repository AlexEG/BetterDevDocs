import { BrowserRouter, Routes, Route } from "react-router-dom";

import DocsHomePage from "./pages/DocsHomePage";
import Page404 from "./pages/Page404";

import JSHome from "./pages/JS/JSHome";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<DocsHomePage />}></Route>
        <Route path="javascript" element={<JSHome />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
