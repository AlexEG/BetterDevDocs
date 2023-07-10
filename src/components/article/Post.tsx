import SettingsBtn from "../settings/SettingsBtn";
import Img from "./media/Img";
import ImgsGroup from "./media/ImgsGroup";
import Paragraph from "./Paragraph";

import img1 from "../../assets/test images/Screenshot_1.png";
// import img2 from "../../assets/test images/Screenshot_14.png";
import img3 from "../../assets/test images/Screenshot_15.png";
import img4 from "../../assets/test images/Screenshot_16.png";
// import img5 from "../../assets/test images/Screenshot_17.png";
// import img6 from "../../assets/test images/Screenshot_18.png";
import img7 from "../../assets/test images/Screenshot_19.png";
// import img8 from "../../assets/test images/Screenshot_3.png";
import img9 from "../../assets/test images/Screenshot_8.png";

import { useState } from "react";
function Post() {
  const [postState, setPostState] = useState({
    DarkMode: false,
    isExpand: false,
  });

  const postWidth = postState.isExpand ? "max-w-7xl" : "max-w-3xl";
  const PostDarkMode = postState.DarkMode
    ? "bg-black text-neutral-200 selection:bg-neutral-200 selection:text-neutral-950"
    : "bg-neutral-200 selection:bg-neutral-600 selection:text-neutral-200";

  return (
    <main className="pl-64 min-h-screen pt-12 pr-64">
      <article
        className={`w-full min-h-screen rounded-lg p-6 mx-auto  transition-all duration-500 delay-75 ${postWidth} ${PostDarkMode}`}
      >
        <h1 className="text-center py-3 font-bold text-neutral-50 brightness-110">
          Post Title
        </h1>
        {/* /////////// */}

        <Img src={img7} />
        <Img src={img9} />
        <Img src={img1} />

        <ImgsGroup imgsArr={[img1, img4, img3]} />
        <Paragraph
          content={[
            "helllllllllp",
            "i mean hello not help",
            "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa sunt magni at nemo alias ad deserunt quae nisi, modi aliquam excepturi neque beatae voluptatem magnam necessitatibus expedita repellendus pariatur voluptas sed provident repudiandae accusantium, facilis quod? Nam sunt corporis molestias quaerat. Aut labore sint totam ipsum blanditiis velit dolorum.",
          ]}
        />

        <ImgsGroup
          imgsArr={[
            "https://fakeimg.pl/600x200",
            "https://fakeimg.pl/200x200",
            "https://fakeimg.pl/200x200",
          ]}
        />
        {/* /////////// */}
        <SettingsBtn setPostState={setPostState} />
      </article>
    </main>
  );
}

export default Post;
