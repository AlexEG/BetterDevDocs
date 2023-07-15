import SidebarDocsSourceSection from "./SidebarDocsSourceSection";

interface SidebarDocsSourceContainer {
  DocsSourceName: string;
  isDocsSourceContainerChosen: boolean;
  chooseDocsSourceContainer(DocsSourceName: string): void;
  whatSubSectionIsOpen: string;
  ChangeSubSectionIsOpen(subSectionFullTitle: string): void;
}
function SidebarDocsSourceContainer({
  DocsSourceName,
  isDocsSourceContainerChosen,
  chooseDocsSourceContainer,
  whatSubSectionIsOpen,
  ChangeSubSectionIsOpen,
}: SidebarDocsSourceContainer) {
  // Styles for the opened source tap
  const isDocsSourceContainerChosen_CSS = isDocsSourceContainerChosen
    ? "bg-neutral-800 text-center"
    : "bg-neutral-900";

  return (
    <section
      onClick={() => chooseDocsSourceContainer(DocsSourceName)}
      className={` font-extrabold text-neutral-50 cursor-pointer`}
    >
      <h2 className={`${isDocsSourceContainerChosen_CSS} p-2`}>
        {DocsSourceName}
      </h2>

      <div className="pl-4 pr-2">
        {isDocsSourceContainerChosen && (
          <>
            <SidebarDocsSourceSection
              sectionTitle="JavaScript first steps"
              subSectionsArr={[
                "JavaScript First Steps",
                "What is JavaScript?",
                "A first splash into JavaScript",
                "What went wrong? Troubleshooting JavaScript",
                "Storing the information you need Variables",
                "Basic math in JavaScript numbers and operators",
                "Handling text strings in JavaScript",
                "Useful string methods",
                "Arrays",
                "Silly story generator",
              ]}
              whatSubSectionIsOpen={whatSubSectionIsOpen}
              ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
            />

            <SidebarDocsSourceSection
              sectionTitle="JavaScript building blocks"
              subSectionsArr={[
                "JavaScript building blocks",
                "Making decisions in your code conditionals",
                "Looping code",
                "Functions reusable blocks of code",
                "Build your own function",
                "Function return values",
                "Introduction to events",
                "Image gallery",
              ]}
              whatSubSectionIsOpen={whatSubSectionIsOpen}
              ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
            />

            <SidebarDocsSourceSection
              sectionTitle="Introducing JavaScript objects"
              subSectionsArr={[
                "Introducing JavaScript objects",
                "JavaScript object basics",
                "Object prototypes",
                "Object-oriented programming",
                "Classes in JavaScript",
                "Working with JSON",
                "Object building practice",
                "Adding features to our bouncing balls demo",
              ]}
              whatSubSectionIsOpen={whatSubSectionIsOpen}
              ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default SidebarDocsSourceContainer;
