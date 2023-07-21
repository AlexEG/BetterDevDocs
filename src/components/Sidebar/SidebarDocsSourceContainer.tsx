import SidebarDocsSourceSection from "./SidebarDocsSourceSection";

interface SidebarDocsSourceContainer {
  DocsSourceName: string;
  isDocsSourceContainerChosen: boolean;
  chooseDocsSourceContainer(DocsSourceName: string): void;
  whatSubSectionIsOpen: string;
  ChangeSubSectionIsOpen(subSectionFullTitle: string): void;
  sectionsTitleAndSubsections: any;
}
function SidebarDocsSourceContainer({
  DocsSourceName,
  isDocsSourceContainerChosen,
  chooseDocsSourceContainer,
  whatSubSectionIsOpen,
  ChangeSubSectionIsOpen,
  sectionsTitleAndSubsections,
}: SidebarDocsSourceContainer) {
  // Styles for the opened source tap
  const isDocsSourceContainerChosen_CSS = isDocsSourceContainerChosen
    ? "bg-neutral-800 text-center"
    : "bg-neutral-900";

  // All Sidebar Docs Source Section Components
  let components = [];
  for (const key in sectionsTitleAndSubsections) {
    // console.log(key);
    // console.log(sectionsTitleAndSubsections[key]);
    components.push(
      <SidebarDocsSourceSection
        key={key}
        sectionTitle={key}
        DocsSourceName={DocsSourceName}
        subSectionsArr={sectionsTitleAndSubsections[key]}
        whatSubSectionIsOpen={whatSubSectionIsOpen}
        ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
      />,
    );
  }

  return (
    <section className={` font-extrabold text-neutral-50 cursor-pointer`}>
      <h2
        onClick={() => chooseDocsSourceContainer(DocsSourceName)}
        className={`${isDocsSourceContainerChosen_CSS} p-2`}
      >
        {DocsSourceName}
      </h2>

      <div className="pl-4 pr-2">
        {isDocsSourceContainerChosen && components}
      </div>
    </section>
  );
}

export default SidebarDocsSourceContainer;
