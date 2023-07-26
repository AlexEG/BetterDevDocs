import CodeKeyword from "./CodeKeyword";

interface UnorderedList {
  items: string[];
}

function UnorderedList({ items }: UnorderedList) {
  const listItmes = items.map((item: string) => {
    if (item.includes("[[") && item.includes("]]")) {
      const [keywordStartAt, KeywordEndAt] = [
        item.indexOf("[["),
        item.lastIndexOf("]]"),
      ];

      const keyword = item.slice(keywordStartAt + 2, KeywordEndAt);

      const itemAndKeyword = [
        item.slice(0, keywordStartAt),
        " ",
        <CodeKeyword content={keyword} />,
        " ",
        item.slice(KeywordEndAt + 2),
      ];

      return <li key={item}>{itemAndKeyword}</li>;
    }

    return <li key={item}>{item}</li>;
  });

  return (
    <ul className="list-disc pl-8 mb-4 selection:bg-neutral-600/75 selection:text-neutral-50">
      {listItmes}
    </ul>
  );
}

export default UnorderedList;
