import HomeTemplate from "./HomeTemplate";

import CSSSidebarData from "../DATA/CSS/CSSSidebarData";
import { Outlet } from "react-router-dom";

function CSSHome() {
  return (
    <HomeTemplate
      SidebarData={CSSSidebarData}
      LanguageName="CSS"
      outlet={<Outlet />}
    />
  );
}

export default CSSHome;
