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

//* -----------[ Books ]----------- *//
import BooksHome from "./pages/Books/BooksHome";
import YDKJS_Up_Going from "./pages/Books/YDKJS_Up_Going";
import YDKJS_Scope_Closures from "./pages/Books/YDKJS_Scope_Closures";
import YDKJS_this_ObjectPrototypes from "./pages/Books/YDKJS_this_ObjectPrototypes";
import YDKJS_Types_Grammar from "./pages/Books/YDKJS_Types_Grammar";
import YDKJS_Async_Performance from "./pages/Books/YDKJS_Async_Performance";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/javascript" element={<JavaScriptHome />}></Route>
        <Route path="/javascript/mdn" element={<JavaScriptMDN />}></Route>
        {/* -----------[ React ]----------- */}
        <Route path="/react" element={<ReactHome />}></Route>
        <Route path="/tailwindcss" element={<TailwindCSSHome />}></Route>
        {/* -----------[ Books ]-[ START ]---------- */}
        <Route path="/books" element={<BooksHome />}></Route>
        <Route path="/books/Up&Going" element={<YDKJS_Up_Going />}></Route>
        <Route
          path="/books/Scope&Closures"
          element={<YDKJS_Scope_Closures />}
        ></Route>
        <Route
          path="/books/this&ObjectPrototypes"
          element={<YDKJS_this_ObjectPrototypes />}
        ></Route>
        <Route
          path="/books/Types&Grammar"
          element={<YDKJS_Types_Grammar />}
        ></Route>
        <Route
          path="/books/Async&Performance"
          element={<YDKJS_Async_Performance />}
        ></Route>
        {/* -----------[ Books ]-[ END ]---------- */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
