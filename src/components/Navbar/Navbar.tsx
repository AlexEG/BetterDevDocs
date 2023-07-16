import LanguagesTools from "./LanguagesTools";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import { Link } from "react-router-dom";

interface Navbar {
  NavbarState: {
    SelectedLang: string;
  };
  ChangeSelectedLang(LangName: string): void;
  DocsSourceName: string;
  SectionAndSubSection: string;
}

function Navbar({
  NavbarState,
  ChangeSelectedLang,
  DocsSourceName,
  SectionAndSubSection,
}: Navbar) {
  // console.log(SectionAndSubSection.split("-")[0]);
  return (
    <nav className="h-10 bg-neutral-950 flex fixed top-0 w-full left-0 justify-between items-center px-2 z-10 ">
      <div className="flex gap-2">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0a0a0a"
            className="w-6 h-6 bg-neutral-300 px-1 rounded-lg mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <BreadcrumbNavigation
          PageIndex={NavbarState.SelectedLang}
          DocsSourceName={DocsSourceName}
          Section={SectionAndSubSection.split("-")[0]}
          SupSection={SectionAndSubSection.split("-")[1]}
        />
      </div>
      <div className="flex gap-2">
        <LanguagesTools
          ChangeSelectedLang={(e) => ChangeSelectedLang(e)}
          SelectedLang={NavbarState.SelectedLang}
        />
      </div>
    </nav>
  );
}

export default Navbar;
