import Icons from "./Icons";
import LanguagesToolsDATA from "../../DATA/LanguagesTools.json";

function LanguagesTools(): JSX.Element[] {
  const allLanguagesToolsIconsArr = Object.values(Icons);
  const allLanguagesToolsIconsArrTitle = Object.keys(Icons);
  // console.log(allLanguagesToolsIconsArr);
  // console.log(allLanguagesToolsIconsArrTitle);

  const dataArr: string[] = LanguagesToolsDATA.NavbarLanguagesTools;

  const iconsArr: JSX.Element[] = [];
  allLanguagesToolsIconsArrTitle.map((icon, i) => {
    if (dataArr.includes(icon)) {
      iconsArr.push(
        <img key={icon} src={allLanguagesToolsIconsArr[i]} alt={icon} />
      );
    }
  });

  // console.log(iconsArr);
  return iconsArr.sort();
}

export default LanguagesTools;
