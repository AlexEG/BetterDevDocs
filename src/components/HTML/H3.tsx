import CodeKeyword from "./CodeKeyword";
interface H3 {
  content: string;
}
function H3({ content }: H3) {
  if (content.includes("[[") && content.includes("]]")) {
    const [keywordStartAt, KeywordEndAt] = [
      content.indexOf("[["),
      content.lastIndexOf("]]"),
    ];

    const keyword = content.slice(keywordStartAt + 2, KeywordEndAt);

    content = [
      content.slice(0, keywordStartAt),
      " ",
      <CodeKeyword content={keyword} />,
      " ",
      content.slice(KeywordEndAt + 2),
    ];
  }
  return (
    <h3 className="selection:bg-neutral-600/75 selection:text-neutral-50 font-normal text-xl text-neutral-200 py-2">
      {content}
    </h3>
  );
}

export default H3;
