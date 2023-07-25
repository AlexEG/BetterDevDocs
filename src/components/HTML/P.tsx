interface P {
  content: any;
}
import CodeKeyword from "./CodeKeyword";

function P({ content }: P) {
  if (content.includes("[[") && content.includes("]]")) {
    const [keywordStartAt, KeywordEndAt] = [
      content.indexOf("[["),
      content.lastIndexOf("]]"),
    ];

    const keyword = content.slice(keywordStartAt + 2, KeywordEndAt);

    // console.log(keywordStartAt);
    // console.log(KeywordEndAt);

    // console.log(
    //   `${content.slice(0, keywordStartAt)} ${keyword} ${content.slice(
    //     KeywordEndAt,
    //     -2,
    //   )}`,
    // );

    content = [
      content.slice(0, keywordStartAt),
      " ",
      <CodeKeyword content={keyword} />,
      " ",
      content.slice(KeywordEndAt + 2),
    ];

    console.log(content);
  }
  return <p className="mb-6">{content}</p>;
}
export default P;
