// import { useState } from "react";

// function LikePostBtn({ openCloseAnimation }: { openCloseAnimation: string }) {
//   const [isLiked, setIsLike] = useState(false);
//   function likeUnlikePost() {
//     setIsLike((prev) => !prev);
//   }

//   const heartState = isLiked ? "animate-[ping_1s_ease-in-out_1]" : "";

//   return (
//     <button
//       onClick={likeUnlikePost}
//       className={`bg-neutral-950 rounded-full p-1 w-8 h-8 ${openCloseAnimation} translate-x-[440%]`}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill={isLiked ? "#eb1a54" : "none"}
//         viewBox="0 0 24 24"
//         strokeWidth={1.3}
//         stroke={isLiked ? "#eb1a54" : "#fafafa"}
//         className={`w-6 h-6 p-px ${heartState}`}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//         />
//       </svg>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill={isLiked ? "#eb1a54" : "none"}
//         viewBox="0 0 24 24"
//         strokeWidth={isLiked ? 1.5 : 0}
//         stroke={isLiked ? "#eb1a54" : "#fafafa00"}
//         className={`w-6 h-6 p-px absolute top-[4.2px]`}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//         />
//       </svg>
//     </button>
//   );
// }

// export default LikePostBtn;
