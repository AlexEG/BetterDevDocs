import { Outlet } from "react-router-dom";
import HomeTemplate from "../components/HomeTemplate";
import JavaScriptSidebarData from "../DATA/JS/JavaScriptSidebarData";

function JavaScriptHome() {
  return (
    <HomeTemplate
      SidebarData={JavaScriptSidebarData}
      LanguageName="JavaScript"
      outlet={<Outlet />}
    />
  );
}

export default JavaScriptHome;
