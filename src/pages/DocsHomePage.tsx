import Icons from "../components/Icons";
import { Link } from "react-router-dom";

function DocsHomePage() {
  return (
    <div className="h-screen bg-neutral-800 flex justify-center items-center flex-col gap-4">
      <p className="w-96 bg-neutral-950 text-neutral-50 font-medium rounded-lg p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eaque,
        aut quasi, dicta voluptates voluptas dolorum, optio id beatae ducimus
        commodi aliquam! Beatae tempore delectus, sapiente iste pariatur
        blanditiis deserunt. 0000 564684961654
      </p>
      <div className="bg-neutral-950 grid grid-cols-4  rounded-lg p-4 gap-6">
        <Link to="golang">
          <img src={Icons.GoLang} alt="GoLang" width="64px" />
        </Link>

        <Link to="javascript">
          <img src={Icons.JavaScript} alt="JavaScript" width="64px" />
        </Link>

        <Link to="vite">
          <img src={Icons.Vite} alt="Vite" width="64px" />
        </Link>

        <Link to="tailwindcss">
          <img src={Icons.TailwindCSS} alt="TailwindCSS" width="64px" />
        </Link>

        <Link to="my-stuff">
          <img src={Icons.myStuff} alt="My Stuff" width="64px" />
        </Link>

        {/* <img src={Icons.HTML} alt="HTML" width="64px" /> */}
        {/* <img src={Icons.Github} alt="Github" width="64px" /> */}
        {/* <img src={Icons.CSS} alt="CSS" width="64px" /> */}
        {/* <img src={Icons.VSCode} alt="VSCode" width="64px" /> */}
        {/* <img src={Icons.Electron} alt="Electron" width="64px" /> */}
        {/* <img src={Icons.Firebase} alt="Firebase" width="64px" /> */}
        {/* <img src={Icons.Sass} alt="Sass" width="64px" /> */}
        {/* <img src={Icons.Markdown} alt="Markdown" width="64px" /> */}
        {/* <img src={Icons.framerMotion} alt="framerMotion" width="64px" /> */}
        {/* <img src={Icons.TypeScript} alt="TypeScript" width="64px" /> */}
        {/* <img src={Icons.React} alt="React" width="64px" /> */}
      </div>
    </div>
  );
}

export default DocsHomePage;
