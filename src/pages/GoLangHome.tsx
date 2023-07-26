import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import GoSidebarData from "../DATA/GoLang/GoSidebarData";

function GoHome() {
  return (
    <HomeTemplate
      SidebarData={GoSidebarData}
      LanguageName="GoLang"
      outlet={<Outlet />}
    />
  );
}

export default GoHome;
