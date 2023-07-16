import { Routes, Route } from "react-router-dom";

import Section1_1 from "../../DATA/JavaScriptMDN/Section1_1";
import Section1_2 from "../../DATA/JavaScriptMDN/Section1_2";
import Section1_3 from "../../DATA/JavaScriptMDN/Section1_3";

function JavaScriptW3SchoolRoutes() {
  return (
    <Routes>
      <Route path="js-home" element={<Section1_1 />}></Route>
      <Route path="javascript-output" element={<Section1_2 />}></Route>
      <Route path="javascript-es5" element={<Section1_2 />}></Route>
    </Routes>
  );
}
export default JavaScriptW3SchoolRoutes;
