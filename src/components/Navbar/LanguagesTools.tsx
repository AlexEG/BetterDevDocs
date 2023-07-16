import { Link } from "react-router-dom";
import Icons from "../Icons";

function LanguagesTools({
  ChangeSelectedLang,
  SelectedLang,
}: {
  ChangeSelectedLang(LangName: string): void;
  SelectedLang: string;
}): JSX.Element[] {
  const allLanguagesToolsIconsArr = Object.values(Icons);
  const allLanguagesToolsIconsArrTitle = Object.keys(Icons);
  // console.log(allLanguagesToolsIconsArr);
  // console.log(allLanguagesToolsIconsArrTitle);

  const iconsArr: JSX.Element[] = [];
  allLanguagesToolsIconsArrTitle.map((icon, i) => {
    iconsArr.push(
      <button onClick={() => ChangeSelectedLang(icon)} key={icon}>
        <Link to={`/${icon.toLocaleLowerCase()}`}>
          <img
            className={`${
              SelectedLang === icon ? "brightness-110" : "brightness-50"
            } hover:brightness-110 transition cursor-pointer w-6`}
            key={icon}
            src={allLanguagesToolsIconsArr[i]}
            alt={icon}
          />
        </Link>
      </button>,
    );
  });

  // console.log(iconsArr);
  return iconsArr.sort();
}

export default LanguagesTools;
