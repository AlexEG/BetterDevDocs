// import SettingsBtn from "../settings/SettingsBtn";

// import { useState } from "react";
// function Post({ content }) {
//   const [postState, setPostState] = useState({
//     DarkMode: false,
//     isExpand: false,
//   });

//   const postWidth = postState.isExpand ? "max-w-7xl" : "max-w-3xl";
//   const PostDarkMode = postState.DarkMode
//     ? "bg-black text-neutral-200 selection:bg-neutral-200 selection:text-neutral-950"
//     : "bg-neutral-200 selection:bg-neutral-600 selection:text-neutral-200";

//   return (
//     <main className="pl-64 min-h-screen pt-12 pr-4">
//       <article
//         className={`w-full min-h-screen rounded-lg p-6 mx-auto  transition-all duration-500 delay-75 ${postWidth} ${PostDarkMode}`}
//       >
//         <h1 className="text-center py-3 font-bold text-neutral-50 brightness-110">
//           Post Title
//         </h1>
//         {/* /////////// */}
//         {content ? content : "ERROR "}
//         <SettingsBtn setPostState={setPostState} />
//       </article>
//     </main>
//   );
// }

// export default Post;
