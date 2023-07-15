import SidebarDocsSourceItems from "./SidebarDocsSourceItems";

interface SidebarDocsSourceContainer {
  DocsSourceName: string;
  isDocsSourceContainerChosen: boolean;
}
function SidebarDocsSourceContainer({
  DocsSourceName,
  isDocsSourceContainerChosen,
}: SidebarDocsSourceContainer) {
  // Styles for the opened source tap
  const isDocsSourceContainerChosen_CSS = isDocsSourceContainerChosen
    ? "bg-neutral-800 text-center"
    : "bg-neutral-900  ";

  return (
    <section className={` font-extrabold text-neutral-50`}>
      <h2 className={`${isDocsSourceContainerChosen_CSS} p-2`}>
        {DocsSourceName}
      </h2>

      <div className="pl-4">
        {isDocsSourceContainerChosen && <SidebarDocsSourceItems />}
      </div>
    </section>
  );
}

export default SidebarDocsSourceContainer;
