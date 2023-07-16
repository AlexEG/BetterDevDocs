// import { useState } from "react";

// import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
// import JavaScriptSidebarData from "../../DATA/JavaScriptSidebarData";
// function JSHome() {
//   const [JSHomeState, setJSHomeState] = useState({
//     NavbarState: {
//       SelectedLang: "JavaScript",
//     },
//     SidebarState: {
//       isTheSidebarOpen: true,
//       DocsSourceContainerChosen: "",
//       DocsSourceContainerChosen_SubSection: "",
//     },
//   });

//   // Navbar State [Start]
//   function ChangeSelectedLang(LangName: string): void {
//     setJSHomeState((JSHomeState) => {
//       return {
//         ...JSHomeState,
//         NavbarState: { ...JSHomeState.NavbarState, SelectedLang: LangName },
//       };
//     });
//   }
//   // Navbar State [End]
//   // Sidebar State [Start]

//   // <OpenCloseSidebarBtn />[Start]
//   function openCloseSidebarBtnFunc(): void {
//     setJSHomeState((JSHomeState) => ({
//       ...JSHomeState,
//       SidebarState: {
//         ...JSHomeState.SidebarState,
//         isTheSidebarOpen: !JSHomeState.SidebarState.isTheSidebarOpen,
//       },
//     }));
//   }
//   // <OpenCloseSidebarBtn />[End]

//   // <SidebarDocsSourceContainer />[Start]
//   function chooseDocsSourceContainer(DocsSourceName: string): void {
//     setJSHomeState((JSHomeState) => ({
//       ...JSHomeState,
//       SidebarState: {
//         ...JSHomeState.SidebarState,
//         DocsSourceContainerChosen: DocsSourceName,
//       },
//     }));
//   }
//   // <SidebarDocsSourceContainer />[End]

//   // <SidebarDocsSourceSection />[Start]
//   function ChangeSubSectionIsOpen(subSectionFullTitle: string): void {
//     setJSHomeState((JSHomeState) => ({
//       ...JSHomeState,
//       SidebarState: {
//         ...JSHomeState.SidebarState,
//         DocsSourceContainerChosen_SubSection: subSectionFullTitle,
//       },
//     }));
//   }
//   // console.log(JSHomeState.SidebarState.DocsSourceContainerChosen_SubSection);
//   // <SidebarDocsSourceSection />[End]

//   // Sidebar State [End]

//   return (
//     <div className="h-screen overflow-hidden ">
//       <Navbar
//         NavbarState={JSHomeState.NavbarState}
//         ChangeSelectedLang={(e) => ChangeSelectedLang(e)}
//         DocsSourceName={JSHomeState.SidebarState.DocsSourceContainerChosen}
//         SectionAndSubSection={
//           JSHomeState.SidebarState.DocsSourceContainerChosen_SubSection
//         }
//       />
//       <Sidebar
//         SidebarData={JavaScriptSidebarData}
//         SidebarState={JSHomeState.SidebarState}
//         openCloseSidebarBtnFunc={openCloseSidebarBtnFunc}
//         chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
//         ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
//       />

//       <main className="bg-neutral-800  h-screen py-16  px-72 flex justify-center overflow-y-auto newuitestsidebar ">
//         <section className=" text-neutral-950 font-medium bg-neutral-300 max-w-3xl p-4 h-fit after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[1.25rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800 before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[1.25rem] before:border-r-transparent before:border-b-transparent  before:border-neutral-800 relative py-8">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nostrum
//           minus. Impedit voluptates nisi esse minus! Iste sequi tempora alias
//           exercitationem consequuntur velit fuga dolore. Nihil quibusdam, quos
//           eligendi omnis a natus repudiandae nobis recusandae aspernatur sed
//           architecto tenetur, commodi, quam veniam eos nisi aliquam voluptatem
//           labore quis molestias! Aspernatur, esse id ipsum magnam animi
//           veritatis maiores deleniti quis velit neque, possimus atque
//           reprehenderit delectus iste, excepturi laborum veniam facilis nobis
//           porro? Aliquid maxime eaque dicta qui deserunt quo dolorum, explicabo
//           nostrum blanditiis libero inventore aut numquam harum reprehenderit.
//           Dolore magni at suscipit iusto facilis! Consequatur enim corporis
//           pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
//           sequi tempora alias exercitationem consequuntur velit fuga dolore.
//           Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
//           recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
//           nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
//           ipsum magnam animi veritatis maiores deleniti quis velit neque,
//           possimus atque reprehenderit delectus iste, excepturi laborum veniam
//           nostrum blanditiis libero inventore aut numquam harum reprehenderit.
//           Dolore magni at suscipit iusto facilis! Consequatur enim corporis
//           pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
//           sequi tempora alias exercitationem consequuntur velit fuga dolore.
//           Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
//           recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
//           nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
//           ipsum magnam animi veritatis maiores deleniti quis velit neque,
//           possimus atque reprehenderit delectus iste, excepturi laborum veniam
//           nostrum blanditiis libero inventore aut numquam harum reprehenderit.
//           Dolore magni at suscipit iusto facilis! Consequatur enim corporis
//           pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
//           sequi tempora alias exercitationem consequuntur velit fuga dolore.
//           Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
//           recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
//           nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
//           ipsum magnam animi veritatis maiores deleniti quis velit neque,
//           possimus atque reprehenderit delectus iste, excepturi laborum veniam
//           nostrum blanditiis libero inventore aut numquam harum reprehenderit.
//           Dolore magni at suscipit iusto facilis! Consequatur enim corporis
//           pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
//           sequi tempora alias exercitationem consequuntur velit fuga dolore.
//           Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
//           recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
//           nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
//           ipsum magnam animi veritatis maiores deleniti quis velit neque,
//           possimus atque reprehenderit delectus iste, excepturi laborum veniam
//           nostrum blanditiis libero inventore aut numquam harum reprehenderit.
//           Dolore magni at suscipit iusto facilis! Consequatur enim corporis
//           pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
//           sequi tempora alias exercitationem consequuntur velit fuga dolore.
//           Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
//           recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
//           nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
//           ipsum magnam animi veritatis maiores deleniti quis velit neque,
//           possimus atque reprehenderit delectus iste, excepturi laborum veniam
//           facilis nobis porro? Aliquid maxime eaque dicta qui deserunt quo
//           dolorum, explicabo nostrum blanditiis libero inventore aut numquam
//           harum reprehenderit. Dolore magni at suscipit iusto facilis!
//           Consequatur enim corporis pariatur sint. Lorem ipsum dolor sit amet
//           consectetur adipisicing elit. Quia, nostrum minus. Impedit voluptates
//           nisi esse minus! Iste sequi tempora alias exercitationem consequuntur
//           velit fuga dolore. Nihil quibusdam, quos eligendi omnis a natus
//           repudiandae nobis recusandae aspernatur sed architecto tenetur,
//           commodi, quam veniam eos nisi aliquam voluptatem labore quis
//           molestias! Aspernatur, esse id ipsum magnam animi veritatis maiores
//           deleniti quis velit neque, possimus atque reprehenderit delectus iste,
//           excepturi laborum veniam facilis nobis porro? Aliquid maxime eaque
//           dicta qui deserunt quo dolorum, explicabo nostrum blanditiis libero
//           inventore aut numquam harum reprehenderit. Dolore magni at suscipit
//           iusto facilis! Consequatur enim corporis pariatur sint. Lorem ipsum
//           dolor sit amet consectetur adipisicing elit. Quia, nostrum minus.
//           Impedit voluptates nisi esse minus! Iste sequi tempora alias
//           exercitationem consequuntur velit fuga dolore. Nihil quibusdam, quos
//           eligendi omnis a natus repudiandae nobis recusandae aspernatur sed
//           architecto tenetur, commodi, quam veniam eos nisi aliquam voluptatem
//           labore quis molestias! Aspernatur, esse id ipsum magnam animi
//           veritatis maiores deleniti quis velit neque, possimus atque
//           reprehenderit delectus iste, excepturi laborum veniam facilis nobis
//           porro? Aliquid maxime eaque dicta qui deserunt quo dolorum, explicabo
//           nostrum blanditiis libero inventore aut numquam harum reprehenderit.
//           Dolore magni at suscipit iusto facilis! Consequatur enim corporis
//           pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
//           sequi tempora alias exercitationem consequuntur velit fuga dolore.
//           Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
//           recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
//           nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
//           ipsum magnam animi veritatis maiores deleniti quis velit neque,
//           possimus atque reprehenderit delectus iste, excepturi laborum veniam
//           facilis nobis porro? Aliquid maxime eaque dicta qui deserunt quo
//           dolorum, explicabo nostrum blanditiis libero inventore aut numquam
//           harum reprehenderit. Dolore magni at suscipit iusto facilis!
//           Consequatur enim corporis pariatur sint. Lorem ipsum dolor sit amet
//           consectetur adipisicing elit. Quia, nostrum minus. Impedit voluptates
//           nisi esse minus! Iste sequi tempora alias exercitationem consequuntur
//           velit fuga dolore. Nihil quibusdam, quos eligendi omnis a natus
//           repudiandae nobis recusandae aspernatur sed architecto tenetur,
//           commodi, quam veniam eos nisi aliquam voluptatem labore quis
//           molestias! Aspernatur, esse id ipsum magnam animi veritatis maiores
//           deleniti quis velit neque, possimus atque reprehenderit delectus iste,
//           excepturi laborum veniam facilis nobis porro? Aliquid maxime eaque
//           dicta qui deserunt quo dolorum, explicabo nostrum blanditiis libero
//           inventore aut numquam harum reprehenderit. Dolore magni at suscipit
//           iusto facilis! Consequatur enim corporis pariatur sint.
//           {/* Reading settings */}
//           <div className="bg-black w-8 h-8 fixed bottom-3 right-1/4 overflow-hidden">
//             <div className="w-full h-full before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[0.3rem] before:border-r-transparent before:border-b-transparent text-xs  before:border-neutral-800 after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[0.3rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800"></div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="#fafafa"
//               className="w-6 h-6 absolute top-1 left-1"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
//               />
//             </svg>
//             <div className="w-full h-full before:w-0 before:h-0 before:absolute before:top-0 before:right-0 before:border-[0.3rem] before:border-l-transparent before:border-b-transparent text-xs  before:border-neutral-800 after:w-0 after:h-0 after:absolute after:bottom-0 after:left-0 after:border-[0.3rem] after:border-r-transparent after:border-t-transparent  after:border-neutral-800"></div>
//           </div>
//         </section>

//         {/* Content Sidebar  */}

//         <section className="bg-neutral-600 min-h-64 max-h-96 w-44 fixed top-14 right-6 after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[1.25rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800 before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[1.25rem] before:border-r-transparent before:border-b-transparent text-xs  before:border-neutral-800 py-9 flex flex-col gap-1 px-3 text-neutral-300 font-medium">
//           <p>1 Lorem ipsum dolor sit.</p>
//           <p>2 veniam facilis nobis</p>
//           <p>3 Dolore magni at suscipit</p>
//           <p>4 consectetur adipisicin</p>
//           <p>5 quibusdam, quos eligendi</p>
//           <p>6 Aspernatur, esse id</p>
//           <p>1 Lorem ipsum dolor sit.</p>
//           <p>2 veniam facilis nobis</p>
//           <p>3 Dolore magni at suscipit</p>
//           <p>4 consectetur adipisicin</p>
//           <p>5 quibusdam, quos eligendi</p>
//           <p>6 Aspernatur, esse id</p>
//           <p>1 Lorem ipsum dolor sit.</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default JSHome;
