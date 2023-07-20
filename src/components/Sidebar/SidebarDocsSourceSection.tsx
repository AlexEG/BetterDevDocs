import { Link } from "react-router-dom";

interface SidebarDocsSourceSection {
  subSectionsArr: string[];
  sectionTitle: string;
  whatSubSectionIsOpen: string;
  ChangeSubSectionIsOpen(subSectionFullTitle: string): void;
  DocsSourceName: string;
}
function SidebarDocsSourceSection({
  subSectionsArr,
  sectionTitle,
  whatSubSectionIsOpen,
  DocsSourceName,
  ChangeSubSectionIsOpen,
}: SidebarDocsSourceSection) {
  // ------- SubSection component
  const allSubSections = subSectionsArr.map((subSection) => {
    const subSectionOpen_CSS =
      whatSubSectionIsOpen === `${sectionTitle}-${subSection}`
        ? "before:bg-neutral-50"
        : "";
    return (
      <Link
        to={`${DocsSourceName.toLocaleLowerCase()
          .split(" ")
          .join("-")}/${subSection.toLocaleLowerCase().split(" ").join("-")}`}
      >
        <p
          key={`${sectionTitle}-${subSection}`}
          onClick={() =>
            ChangeSubSectionIsOpen(`${sectionTitle}-${subSection}`)
          }
          className={`before:absolute relative before:top-0 before:-left-3 pl-1 before:h-full before:w-0.5 my-1 cursor-pointer ${subSectionOpen_CSS}`}
        >
          {subSection}
        </p>
      </Link>
    );
  });
  // -------

  return (
    <section className="flex-col flex mb-4 first-of-type:mt-2 ">
      <h2 className="text-neutral-50 font-semibold mb-0.5">{sectionTitle}</h2>

      <div className="pl-3 flex flex-col text-neutral-300 select-none text-sm font-normal before:absolute relative before:top-0 before:left-0  before:h-full before:w-0.5 before:bg-neutral-600">
        {allSubSections}
      </div>
    </section>
  );
}

export default SidebarDocsSourceSection;
