import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import CSS_MDN_1_1 from "./MDN/CSS_MDN_1_1";
import CSS_MDN_1_2 from "./MDN/CSS_MDN_1_2";
import CSS_MDN_1_3 from "./MDN/CSS_MDN_1_3";

export default function CSSMDNRoutes() {
  return (
    <Routes>
      <Route path="css-basics" element={<CSS_MDN_1_1 />}></Route>
      <Route path="css-first-steps" element={<CSS_MDN_1_2 />}></Route>
      <Route path="css-first-steps-overview" element={<CSS_MDN_1_3 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
