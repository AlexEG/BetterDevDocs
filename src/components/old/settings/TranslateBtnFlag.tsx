// function TranslateBtnFlag({
//   lang,
//   selectedLanguage,
//   selectLang,
//   isSelectLanguageOpen,
// }: {
//   lang: string;
//   selectedLanguage: string;
//   selectLang: any;
//   isSelectLanguageOpen: boolean;
// }) {
//   const openLang = "animate-[openLang_500ms_ease-in-out_1_forwards]";
//   const closeLang = "animate-[closeLang_500ms_ease-in-out_1_forwards_reverse]";

//   const openLangAnimation =
//     lang === "english"
//       ? "translate-y-[540%]"
//       : lang === "japanese"
//       ? "translate-y-[390%]"
//       : lang === "german"
//       ? "translate-y-[260%]"
//       : "translate-y-[130%]";

//   return (
//     <button
//       className={`rounded-full overflow-hidden  ${
//         selectedLanguage === lang ? "brightness-110" : "brightness-50"
//       } ${isSelectLanguageOpen ? openLang : closeLang} ${openLangAnimation}`}
//       data-lang={lang}
//       data-selected-lang={selectedLanguage === lang ? "true" : "false"}
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
//       onClick={() => selectLang(lang)}
//     >
//       {lang === "english" && (
//         <svg
//           className="w-6 h-6 "
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//         >
//           <path fill="#012169" d="M0 0h512v512H0z" />
//           <path
//             fill="#FFF"
//             d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
//           />
//           <path
//             fill="#C8102E"
//             d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
//           />
//           <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
//           <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
//         </svg>
//       )}

//       {lang === "japanese" && (
//         <svg
//           className="w-6 h-6"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//         >
//           <defs>
//             <clipPath id="a">
//               <path fillOpacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
//             </clipPath>
//           </defs>
//           <g
//             fillRule="evenodd"
//             strokeWidth="1pt"
//             clipPath="url(#a)"
//             transform="translate(-128) scale(.72249)"
//           >
//             <path fill="#fff" d="M0 0h1063v708.7H0z" />
//             <circle
//               cx="523.1"
//               cy="344.1"
//               r="194.9"
//               fill="#bc002d"
//               transform="translate(-59.7 -34.5) scale(1.1302)"
//             />
//           </g>
//         </svg>
//       )}

//       {lang === "german" && (
//         <svg
//           className="w-6 h-6"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//         >
//           <path fill="#ffce00" d="M0 341.3h512V512H0z" />
//           <path d="M0 0h512v170.7H0z" />
//           <path fill="#d00" d="M0 170.7h512v170.6H0z" />
//         </svg>
//       )}

//       {lang === "french" && (
//         <svg
//           className="w-6 h-6"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//         >
//           <path fill="#fff" d="M0 0h512v512H0z" />
//           <path fill="#002654" d="M0 0h170.7v512H0z" />
//           <path fill="#ce1126" d="M341.3 0H512v512H341.3z" />
//         </svg>
//       )}
//     </button>
//   );
// }

// export default TranslateBtnFlag;
