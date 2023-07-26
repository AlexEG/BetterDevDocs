import CodeKeyword from "./CodeKeyword";
interface P {
  content: any;
}

function P({ content }: P) {
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

    // console.log(content);
  }
  return (
    <p className="mb-6 selection:bg-neutral-600/75 selection:text-neutral-50">
      {content}
    </p>
  );
}
export default P;
