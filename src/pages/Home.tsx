import Sidebar from "../components/sidebar/Sidebar";
// import Post from "../components/article/Post";
import JavaScriptSidbarContentDATA from "../DATA/pages/JavaScriptSidbarContent.json";

function Home() {
  return (
    <div className="min-h-screen bg-neutral-800">
      {/* <Post /> */}

      <div className=" bg-neutral-700 h-96 max-h-[calc(100%-4rem)] w-56 fixed right-4 top-12 bottom-4 rounded-lg"></div>

      <Sidebar sidebarSections={JavaScriptSidbarContentDATA.homePage} />
    </div>
  );
}

export default Home;
