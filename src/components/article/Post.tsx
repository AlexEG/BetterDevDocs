import SettingsBtn from "../settings/SettingsBtn";
import Img from "./media/Img";
import ImgsGroup from "./media/ImgsGroup";

import img1 from "../../assets/test images/Screenshot_1.png";
import img2 from "../../assets/test images/Screenshot_14.png";
import img3 from "../../assets/test images/Screenshot_15.png";
import img4 from "../../assets/test images/Screenshot_16.png";
import img5 from "../../assets/test images/Screenshot_17.png";
import img6 from "../../assets/test images/Screenshot_18.png";
import img7 from "../../assets/test images/Screenshot_19.png";
import img8 from "../../assets/test images/Screenshot_3.png";
import img9 from "../../assets/test images/Screenshot_8.png";

function Post() {
  return (
    <main className=" min-h-screen pt-12 pl-64 pr-64  selection:bg-neutral-600 selection:text-neutral-200 bg-green">
      <article className="bg-neutral-200 w-full min-h-screen rounded-lg p-6 max-w-3xl mx-auto ">
        <Img src={img7} />
        <Img src={img7} />

        <ImgsGroup imgsArr={[img1, img4, img3]} />

        <ImgsGroup
          imgsArr={[
            "https://fakeimg.pl/600x200",
            "https://fakeimg.pl/200x200",
            "https://fakeimg.pl/200x200",
          ]}
        />
      </article>

      <SettingsBtn />
    </main>
  );
}

export default Post;
