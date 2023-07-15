// import { useState } from "react";
// import { Link } from "react-router-dom";

// import Icons from "./Icons";
// import LanguagesToolsDATA from "../../DATA/LanguagesTools.json";

// function LanguagesTools(): JSX.Element[] {
//   const allLanguagesToolsIconsArr = Object.values(Icons);
//   const allLanguagesToolsIconsArrTitle = Object.keys(Icons);
//   // console.log(allLanguagesToolsIconsArr);
//   // console.log(allLanguagesToolsIconsArrTitle);

//   const dataArr: string[] = LanguagesToolsDATA.NavbarLanguagesTools;

//   const [blogSection, setBlogSection] = useState("HTML");

//   function ChangeBlogSection(icon: string) {
//     setBlogSection(icon);
//   }

//   const iconsArr: JSX.Element[] = [];
//   allLanguagesToolsIconsArrTitle.map((icon, i) => {
//     if (dataArr.includes(icon)) {
//       iconsArr.push(
//         <button onClick={() => ChangeBlogSection(icon)}>
//           <Link to={`/${icon.toLocaleLowerCase()}`}>
//             <img
//               className={`${
//                 blogSection === icon ? "brightness-110" : "brightness-50"
//               } hover:brightness-110 transition cursor-pointer w-6`}
//               key={icon}
//               src={allLanguagesToolsIconsArr[i]}
//               alt={icon}
//             />
//           </Link>
//         </button>,
//       );
//     }
//   });

//   // console.log(iconsArr);
//   return iconsArr.sort();
// }

// export default LanguagesTools;
