import { Routes, Route } from "react-router-dom";

import Section1_1 from "../../DATA/JavaScriptMDN/Section1_1";
import Section1_2 from "../../DATA/JavaScriptMDN/Section1_2";
import Section1_3 from "../../DATA/JavaScriptMDN/Section1_3";

function JavaScriptMDNRoutes() {
  return (
    <Routes>
      <Route path="sec1" element={<Section1_1 />}></Route>
      <Route path="sec2" element={<Section1_2 />}></Route>
      <Route path="sec3" element={<Section1_3 />}></Route>
      <Route path="javascript-first-steps" element={<Section1_1 />}></Route>
      <Route path="what-is-javascript" element={<Section1_2 />}></Route>
      <Route
        path="storing-the-information-you-need-variables"
        element={<Section1_1 />}
      ></Route>
      <Route
        path="basic-math-in-javascript-numbers-and-operators"
        element={<Section1_2 />}
      ></Route>
      <Route
        path="handling-text-strings-in-javascript"
        element={<Section1_2 />}
      ></Route>
      <Route path="useful-string-methods" element={<Section1_2 />}></Route>
      <Route path="arrays" element={<Section1_2 />}></Route>
      <Route path="silly-story-generator" element={<Section1_2 />}></Route>
    </Routes>
  );
}
export default JavaScriptMDNRoutes;
