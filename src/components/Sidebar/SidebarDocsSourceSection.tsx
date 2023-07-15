interface SidebarDocsSourceSection {
  subSectionsArr: string[];
  sectionTitle: string;
  whatSubSectionIsOpen: string;
  ChangeSubSectionIsOpen(subSectionFullTitle: string): void;
}
function SidebarDocsSourceSection({
  subSectionsArr,
  sectionTitle,
  whatSubSectionIsOpen,
  ChangeSubSectionIsOpen,
}: SidebarDocsSourceSection) {
  // ------- SubSection component
  const allSubSections = subSectionsArr.map((subSection) => {
    const subSectionOpen_CSS =
      whatSubSectionIsOpen === `${sectionTitle}-${subSection}`
        ? "before:bg-neutral-50"
        : "before:bg-neutral-600";
    return (
      <p
        onClick={() => ChangeSubSectionIsOpen(`${sectionTitle}-${subSection}`)}
        className={`before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer ${subSectionOpen_CSS}`}
      >
        {subSection}
      </p>
    );
  });
  // -------

  return (
    <section className="flex-col flex mb-4 first-of-type:mt-2">
      <h2 className="text-neutral-50 font-semibold mb-0.5">{sectionTitle}</h2>

      <div className="pl-3 flex flex-col text-neutral-300 select-none text-sm font-normal">
        {allSubSections}
      </div>
    </section>
  );
}

export default SidebarDocsSourceSection;
