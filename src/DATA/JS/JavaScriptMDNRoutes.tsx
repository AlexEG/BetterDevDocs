import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import JS_MDN_1_1 from "./MDN/JS_MDN_1_1";
import JS_MDN_1_2 from "./MDN/JS_MDN_1_2";
import JS_MDN_1_3 from "./MDN/JS_MDN_1_3";

function JavaScriptMDNRoutes() {
  return (
    <Routes>
      <Route path="javascript-first-steps" element={<JS_MDN_1_3 />}></Route>
      <Route path="what-is-javascript" element={<JS_MDN_1_1 />}></Route>
      <Route
        path="storing-the-information-you-need-variables"
        element={<JS_MDN_1_3 />}
      ></Route>
      <Route
        path="basic-math-in-javascript-numbers-and-operators"
        element={<JS_MDN_1_2 />}
      ></Route>
      <Route
        path="handling-text-strings-in-javascript"
        element={<JS_MDN_1_1 />}
      ></Route>
      <Route path="useful-string-methods" element={<JS_MDN_1_3 />}></Route>
      <Route path="arrays" element={<JS_MDN_1_2 />}></Route>
      <Route path="silly-story-generator" element={<JS_MDN_1_1 />}></Route>
      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
export default JavaScriptMDNRoutes;
