// import { useState } from "react";

// import SidebarDATA from "./content/YDKJS_Up_Going/SidebarDATA";
// import ContentDATA from "./content/YDKJS_Up_Going/ContentDATA";

// import Sidebar from "../../components/sidebar/Sidebar";
// import Post from "../../components/article/Post";

// function YDKJS_Up_Going() {
//   const [openSec, setOpenSec] = useState({
//     mainSecTitle: "1. Into Programming",
//     subSecTitle: "Review",
//   });

//   let content = ContentDATA[openSec.mainSecTitle][0][openSec.subSecTitle];

//   // console.log(ContentDATA3);
//   // console.log(ContentDATA);
//   // console.log(openSec.mainSecTitle);
//   // console.log(openSec.subSecTitle);
//   // console.log(content);

//   return (
//     <div className="min-h-screen bg-neutral-800">
//       <Post content={content} />

//       <Sidebar SidebarDATA={SidebarDATA} setOpenSec={setOpenSec} />
//     </div>
//   );
// }

// export default YDKJS_Up_Going;
