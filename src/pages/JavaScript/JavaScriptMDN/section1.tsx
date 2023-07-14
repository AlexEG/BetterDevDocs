import Img from "../../../components/article/media/Img";

import ImgsGroup from "../../../components/article/media/ImgsGroup";

import CodeBlock from "../../../components/CodeBlock";

import image1 from "../../../assets/test images/Screenshot_15.png";
import image2 from "../../../assets/test images/Screenshot_19.png";

const code1 = `
  import SettingsBtn from "../settings/SettingsBtn";

  import { useState } from "react";
  function Post({ content }) {
    const [postState, setPostState] = useState({
      DarkMode: false,
      isExpand: false,
    });

    const postWidth = postState.isExpand ? "max-w-7xl" : "max-w-3xl";
    const PostDarkMode = postState.DarkMode
      ? "bg-black text-neutral-200 selection:bg-neutral-200 
      selection:text-neutral-950"
      : "bg-neutral-200 selection:bg-neutral-600 selection:text-neutral-200";

    return (
      <main className="pl-64 min-h-screen pt-12 pr-4">
        <article
          className={\`w-full min-h-screen rounded-lg p-6 mx-auto 
           transition-all duration-500 delay-75 \${postWidth} \${PostDarkMode}\`}
        >
          <h1 className="text-center py-3 font-bold text-neutral-50
           brightness-110">
            Post Title
          </h1>
          {/* /////////// */}
          {content}
          <SettingsBtn setPostState={setPostState} />
        </article>
      </main>
    );
  }

`;

export default [
  "loremLorem",
  <Img src={image1} />,
  " amet consectetur adipisicing elit. Quos dolor totam natus provident porro laudantium! Eos autem eaque, repudiandae explicabo temporibus, qui consequuntur voluptatibus maiores atque aut veniam? Amet, ipsa.",
  <Img src={image1} />,
  " amet consectetur adipisicing elit. Quos dolor totam natus provident porro laudantium! Eos autem eaque, repudiandae explicabo temporibus, qui consequuntur voluptatibus maiores atque aut veniam? Amet, ipsa.",
  <Img src={image1} />,
  " amet consectetur adipisicing elit. Quos dolor totam natus provident porro laudantium! Eos autem eaque, repudiandae explicabo temporibus, qui consequuntur voluptatibus maiores atque aut veniam? Amet, ipsa.",
  <Img src={image1} />,
  <Img src={image1} />,
  <CodeBlock language="jsx" content={code1} />,
  <ImgsGroup imgsArr={[image2, image1]} />,
];
