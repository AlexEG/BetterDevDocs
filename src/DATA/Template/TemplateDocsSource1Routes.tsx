import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import Tempate_DocsSource_1_1 from "./DocsSource1/Tempate_DocsSource_1_1";
import Tempate_DocsSource_1_2 from "./DocsSource1/Tempate_DocsSource_1_2";
import Tempate_DocsSource_1_3 from "./DocsSource1/Tempate_DocsSource_1_3";

export default function TemplateDocsSource1Routes() {
  return (
    <Routes>
      <Route path="page1" element={<Tempate_DocsSource_1_1 />}></Route>
      <Route path="page2" element={<Tempate_DocsSource_1_2 />}></Route>
      <Route path="page3" element={<Tempate_DocsSource_1_3 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
