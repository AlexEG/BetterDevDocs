import JavaScriptSidbarContentDATA from "../../DATA/pages/JavaScriptSidbarContent.json";
import Sidebar from "../../components/sidebar/Sidebar";

function JavaScriptMDN() {
  return (
    <div className="bg-neutral-800 min-h-screen flex justify-center items-center gap-4 flex-col">
      <p className="text-6xl font-bold bg-black text-white p-5">
        This is MDN Docs
      </p>

      <Sidebar sidebarSections={JavaScriptSidbarContentDATA.MDN} />
    </div>
  );
}

export default JavaScriptMDN;
