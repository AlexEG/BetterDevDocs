import ReadingSettingsMenu from "./ReadingSettingsMenu/ReadingSettingsMenu";
import { useState } from "react";
// import ShowMyNotesBtn from "./ShowMyNotesBtn";

interface ArticleContent {
  contentData: any;
}

function ArticleContent({ contentData }: ArticleContent) {
  const [postState, setPostState] = useState({
    DarkMode: false,
    isExpand: false,
  });

  const postWidth = postState.isExpand ? "max-w-6xl" : "max-w-2xl";
  const PostDarkMode = postState.DarkMode
    ? "bg-neutral-800 text-neutral-300 selection:bg-neutral-200 selection:text-neutral-950"
    : "text-[#bfbfbf] selection:bg-neutral-600 selection:text-neutral-200";

  return (
    <article
      className={`p-4 h-fit after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[1.25rem] after:border-l-transparent after:border-t-transparent after:border-[#1f1f1f] before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[1.25rem] before:border-r-transparent before:border-b-transparent  before:border-[#1f1f1f] relative pt-8 pb-14 w-full min-h-screen ${postWidth} ${PostDarkMode} transition-all delay-75 duration-300 text-lg font-roboto`}
    >
      {/* <ShowMyNotesBtn /> */}
      {contentData}

      <ReadingSettingsMenu setPostState={setPostState} />
    </article>
  );
}
export default ArticleContent;
