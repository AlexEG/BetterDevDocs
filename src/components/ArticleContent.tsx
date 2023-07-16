interface ArticleContent {
  DocsSourceName: string;
  SectionAndSubSection: string;
  contentData: object;
}
function ArticleContent({
  DocsSourceName,
  SectionAndSubSection,
  contentData,
}: ArticleContent) {
  let content = "Sorry!";

  if (DocsSourceName && SectionAndSubSection && contentData) {
    let [SubSection, Section] = ["", ""];

    if (SectionAndSubSection) {
      Section = SectionAndSubSection.split("-")[0];
      SubSection = SectionAndSubSection.split("-")[1];
    }

    content = contentData[DocsSourceName][Section][SubSection]();
    // console.log(contentData[DocsSourceName]);
    // console.log(contentData[DocsSourceName][Section]);
  }
  return (
    <article className=" text-neutral-950 font-medium bg-neutral-300 max-w-3xl p-4 h-fit after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[1.25rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800 before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[1.25rem] before:border-r-transparent before:border-b-transparent  before:border-neutral-800 relative py-8  w-full min-h-screen">
      {/* {DocsSourceName && SectionAndSubSection && contentData && content} */}
      {content}
    </article>
  );
}
export default ArticleContent;
