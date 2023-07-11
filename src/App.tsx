import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/article/Post";

function App() {
  return (
    <div className="min-h-screen bg-neutral-800">
      <Navbar />

      <Post />

      <div className=" bg-neutral-700 h-[calc(100%-4rem)] w-56 fixed right-4 top-12 bottom-4 rounded-lg"></div>

      <Sidebar />
    </div>
  );
}

export default App;
