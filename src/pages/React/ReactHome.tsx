import Sidebar from "../../components/sidebar/Sidebar";
import JavaScriptSidbarContentDATA from "../../DATA/pages/JavaScriptSidbarContent.json";
function ReactHome() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <p className="text-white text-4xl">React Home</p>
      <Sidebar sidebarSections={JavaScriptSidbarContentDATA.homePage} />
    </div>
  );
}

export default ReactHome;
