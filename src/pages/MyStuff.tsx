import HomeTemplate from "../components/HomeTemplate";
import { Outlet } from "react-router-dom";
import MyStuffSidebarData from "../DATA/MyStuff/MyStuffSidebarData";

function CSSHome({ Theme }: { Theme: any }) {
  return (
    <HomeTemplate
      Theme={Theme}
      SidebarData={MyStuffSidebarData}
      LanguageName="myStuff"
      outlet={<Outlet />}
    />
  );
}

export default CSSHome;
