import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import TailwindCSSSidebarData from "../DATA/TailwindCSS/TailwindCSSSidebarData";

function TailwindCSSHome({ Theme }: { Theme: any }) {
  return (
    <HomeTemplate
      Theme={Theme}
      SidebarData={TailwindCSSSidebarData}
      LanguageName="TailwindCSS"
      outlet={<Outlet />}
    />
  );
}

export default TailwindCSSHome;
