import SettingsBtn from "../settings/SettingsBtn";
import Img from "./media/Img";
import ImgsContainer from "./media/ImgsContainer";
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
      <article className="bg-neutral-200 w-full min-h-96 rounded-lg p-6 max-w-3xl mx-auto ">
        <ImgsContainer
          ImgsArr={[
            <Img src={img1} alt="image 1" />,
            <Img src={img2} />,
            <Img src={img3} />,
            <Img src={img4} />,
            <Img src={img5} />,
            <Img src={img6} />,
            <Img src={img7} />,
            <Img src={img8} />,
            <Img src={img9} />,
          ]}
        />

        <Img src="https://fakeimg.pl/800x200" />

        <div className="px-8">
          <img
            className="mx-auto my-6 rounded-lg"
            src="https://fakeimg.pl/800x600"
            alt=""
          />
        </div>

        <div className="px-8 w-fit grid grid-cols-2 gap-2 my-6 mx-auto">
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
        </div>

        <div className="px-8 grid grid-cols-2 w-fit  gap-2 my-6 mx-auto">
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni
          pariatur odio nam? Incidunt sequi consequatur, nesciunt totam ut,
          dignissimos accusamus nulla, saepe doloribus possimus distinctio?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          quia, sint at tenetur rerum rem labore architecto quibusdam iure fuga
          quis, incidunt odit quas autem cum eos. Soluta corporis, autem
          explicabo aut doloribus ex praesentium quibusdam, accusamus deserunt
          impedit magni?
        </p>
        <div className="px-8 flex w-fit flex-wrap justify-center gap-2 my-6 mx-auto">
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
          <img className="rounded-lg" src="https://fakeimg.pl/300x300" alt="" />
        </div>
      </article>

      <SettingsBtn />
    </main>
  );
}

export default Post;
