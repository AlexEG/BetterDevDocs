import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import Vite_Official_1_1 from "./vitejs.dev/Vite_Official_1_1";
import Vite_Official_1_2 from "./vitejs.dev/Vite_Official_1_2";
import Vite_Official_1_3 from "./vitejs.dev/Vite_Official_1_3";

export default function ViteOfficialRoutes() {
  return (
    <Routes>
      <Route path="why-vite" element={<Vite_Official_1_1 />}></Route>
      <Route path="getting-started" element={<Vite_Official_1_2 />}></Route>
      <Route path="features" element={<Vite_Official_1_3 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
