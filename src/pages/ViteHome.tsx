import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import ViteSidebarData from "../DATA/Template copy/ViteSidebarData";

function ViteHome() {
  return (
    <HomeTemplate
      SidebarData={ViteSidebarData}
      LanguageName="Vite"
      outlet={<Outlet />}
    />
  );
}

export default ViteHome;
