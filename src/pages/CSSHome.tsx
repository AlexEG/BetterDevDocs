import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import CSSSidebarData from "../DATA/CSS/CSSSidebarData";

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
