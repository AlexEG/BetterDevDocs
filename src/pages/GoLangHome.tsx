import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import GoSidebarData from "../DATA/GoLang/GoSidebarData";

function GoHome({ Theme }: { Theme: any }) {
  return (
    <HomeTemplate
      Theme={Theme}
      SidebarData={GoSidebarData}
      LanguageName="GoLang"
      outlet={<Outlet />}
    />
  );
}

export default GoHome;
