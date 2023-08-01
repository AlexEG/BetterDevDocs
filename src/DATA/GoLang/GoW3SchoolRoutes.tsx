import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import Go_W3School_1_1 from "./W3School/Go_W3School_1_1";
import Go_W3School_1_2 from "./W3School/Go_W3School_1_2";
import Go_W3School_1_3 from "./W3School/Go_W3School_1_3";
import Go_W3School_1_4 from "./W3School/Go_W3School_1_4";
import Go_W3School_1_5 from "./W3School/Go_W3School_1_5";
import Go_W3School_1_6 from "./W3School/Go_W3School_1_6";
import Go_W3School_1_7 from "./W3School/Go_W3School_1_7";
import Go_W3School_1_8 from "./W3School/Go_W3School_1_8";
import Go_W3School_1_9 from "./W3School/Go_W3School_1_9";
import Go_W3School_1_10 from "./W3School/Go_W3School_1_10";
import Go_W3School_1_11 from "./W3School/Go_W3School_1_11";
import Go_W3School_1_12 from "./W3School/Go_W3School_1_12";
import Go_W3School_1_13 from "./W3School/Go_W3School_1_13";
import Go_W3School_1_14 from "./W3School/Go_W3School_1_14";
import Go_W3School_1_15 from "./W3School/Go_W3School_1_15";
import Go_W3School_1_16 from "./W3School/Go_W3School_1_16";
import Go_W3School_1_17 from "./W3School/Go_W3School_1_17";
import Go_W3School_1_18 from "./W3School/Go_W3School_1_18";
import Go_W3School_1_19 from "./W3School/Go_W3School_1_19";


function GoW3SchoolRoutes() {
  return (
    <Routes>
      <Route path="go-introduction" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-getting-started" element={<Go_W3School_1_2 />}></Route>
      <Route path="go-syntax" element={<Go_W3School_1_3 />}></Route>
      <Route path="go-comments" element={<Go_W3School_1_4 />}></Route>
      <Route path="go-variables" element={<Go_W3School_1_5 />}></Route>
      <Route
        path="go-multiple-variable-declaration"
        element={<Go_W3School_1_6 />}
      ></Route>
      <Route
        path="go-variable-naming-rules"
        element={<Go_W3School_1_7 />}
      ></Route>
      <Route path="go-constants" element={<Go_W3School_1_8 />}></Route>
      <Route path="go-output-functions" element={<Go_W3School_1_9 />}></Route>
      <Route path="go-formatting-verbs" element={<Go_W3School_1_10 />}></Route>
      <Route path="go-basic-data-types" element={<Go_W3School_1_11 />}></Route>
      <Route path="go-boolean" element={<Go_W3School_1_12 />}></Route>
      <Route path="go-integer" element={<Go_W3School_1_13 />}></Route>
      <Route path="go-float" element={<Go_W3School_1_14 />}></Route>
      <Route path="go-string" element={<Go_W3School_1_15 />}></Route>
      <Route path="go-arrays" element={<Go_W3School_1_16 />}></Route>
      <Route path="go-create-slice" element={<Go_W3School_1_17 />}></Route>
      <Route path="go-modify-slice" element={<Go_W3School_1_18 />}></Route>
      <Route path="go-operators" element={<Go_W3School_1_19 />}></Route>
      <Route path="go-arithmetic" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-assignment" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-comparison" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-logical" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-bitwise" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-conditions" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-if-statement" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-if-else-statement" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-else-if-statement" element={<Go_W3School_1_1 />}></Route>
      <Route
        path="go-nested-if-statement"
        element={<Go_W3School_1_1 />}
      ></Route>
      <Route path="go-switch-statement" element={<Go_W3School_1_1 />}></Route>
      <Route
        path="go-multi-case-switch-statement"
        element={<Go_W3School_1_1 />}
      ></Route>
      <Route path="go-loops" element={<Go_W3School_1_1 />}></Route>
      <Route
        path="go-function-create/call"
        element={<Go_W3School_1_1 />}
      ></Route>
      <Route
        path="go-function-parameters/arguments"
        element={<Go_W3School_1_1 />}
      ></Route>
      <Route path="go-function-returns" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-recursion" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-struct" element={<Go_W3School_1_1 />}></Route>
      <Route path="go-maps" element={<Go_W3School_1_1 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
export default GoW3SchoolRoutes;
