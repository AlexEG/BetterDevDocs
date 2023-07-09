import SettingsBtn from "../settings/SettingsBtn";
import Img from "./media/Img";
import ImgsGroup from "./media/ImgsGroup";

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
    DarkMode: true,
  });

  const PostDarkMode = postState.DarkMode
    ? "bg-neutral-200 selection:bg-neutral-600 selection:text-neutral-200"
    : "bg-black text-neutral-200 selection:bg-neutral-200 selection:text-neutral-950";

  return (
    <main className=" min-h-screen pt-12 pl-64 pr-64  ">
      <article
        className={`w-full min-h-screen rounded-lg p-6 max-w-3xl mx-auto  ${PostDarkMode}  transition-colors duration-500 delay-75`}
      >
        {/* /////////// */}
        <Img src={img7} />
        <Img src={img9} />

        <ImgsGroup imgsArr={[img1, img4, img3]} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          excepturi hic aut. Animi laudantium ex consequatur porro cumque
          tempore veniam ullam accusamus itaque veritatis! Quisquam recusandae,
          rem numquam modi qui quidem impedit officia ipsam dolore quas odit aut
          esse, harum assumenda, odio nam quia excepturi? Harum doloremque rerum
          impedit officia officiis quidem quos voluptatem aspernatur dignissimos
          non. Optio ducimus fugiat nam. Doloribus reiciendis sed sit possimus
          tempore inventore ducimus doloremque esse blanditiis, cumque quae ut
          suscipit similique quod sequi provident! Iure non tenetur consectetur
          quibusdam cum saepe exercitationem vero? Ipsum praesentium aperiam
          sapiente quo cupiditate quas, odio nihil suscipit error.
        </p>
        <ImgsGroup
          imgsArr={[
            "https://fakeimg.pl/600x200",
            "https://fakeimg.pl/200x200",
            "https://fakeimg.pl/200x200",
          ]}
        />
        {/* /////////// */}
      </article>
      <SettingsBtn setPostState={setPostState} />
    </main>
  );
}

export default Post;
