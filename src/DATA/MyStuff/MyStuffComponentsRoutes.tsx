import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import Components_Sidebar_1 from "./components/Components_Sidebar_1";
import Components_Sidebar_2 from "./components/Components_Sidebar_2";
import Components_Sidebar_3 from "./components/Components_Sidebar_3";

function MyStuffComponentsRoutes() {
  return (
    <Routes>
      <Route path="sidebar-theme-1" element={<Components_Sidebar_1 />}></Route>
      <Route path="sidebar-theme-2" element={<Components_Sidebar_2 />}></Route>
      <Route path="sidebar-theme-3" element={<Components_Sidebar_3 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
export default MyStuffComponentsRoutes;
