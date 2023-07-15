import SidebarMenu from "./SidebarMenu";
import SidebarDocsSourceContainer from "./SidebarDocsSourceContainer";

function Sidebar() {
  return (
    <aside className="bg-neutral-950 w-60 h-[calc(100%-2.5rem)] fixed top-10 left-0 after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-[1.25rem] after:border-r-transparent after:border-b-transparent after:translate-x-full after:border-neutral-950 pt-10 ">
      <SidebarDocsSourceContainer
        DocsSourceName="MDN"
        isDocsSourceContainerChosen={true}
      />

      <SidebarDocsSourceContainer
        DocsSourceName="W3 School"
        isDocsSourceContainerChosen={false}
      />
      <SidebarDocsSourceContainer
        DocsSourceName="JavaScript.info"
        isDocsSourceContainerChosen={false}
      />

      <SidebarDocsSourceContainer
        DocsSourceName="JDKJS Up & Going"
        isDocsSourceContainerChosen={false}
      />

      <SidebarMenu />
    </aside>
  );
}

export default Sidebar;
