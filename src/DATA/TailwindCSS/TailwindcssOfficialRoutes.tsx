import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";
import Tailwindcss_Official_1_1 from "./tailwindcss.com/Tailwindcss_Official_1_1";
import Tailwindcss_Official_1_2 from "./tailwindcss.com/Tailwindcss_Official_1_2";
import Tailwindcss_Official_1_3 from "./tailwindcss.com/Tailwindcss_Official_1_3";

export default function TailwindcssOfficialRoutes() {
  return (
    <Routes>
      <Route path="theme" element={<Tailwindcss_Official_1_1 />}></Route>
      <Route path="preflight" element={<Tailwindcss_Official_1_2 />}></Route>
      <Route path="box-sizing" element={<Tailwindcss_Official_1_3 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
