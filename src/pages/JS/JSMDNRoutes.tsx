import { Routes, Route } from "react-router-dom";
import JSMDN from "./JSMDN";
function JSMDNRoutes() {
  return (
    <Routes>
      <Route path="sec1" element={<JSMDN />}></Route>
    </Routes>
  );
}
export default JSMDNRoutes;
