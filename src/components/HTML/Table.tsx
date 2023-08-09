import CodeKeyword from "./CodeKeyword";
interface Table {
  th: string[];
  content: any;
}
function Table({ th, content }: Table) {
  const tableTitles = th.map((th) => <th className="pl-4 py-2">{th}</th>);

  const tableContent = content.map((tr: []) => {
    let tds = tr.map((td: string[] | any) => {
      if (td.includes("[[") && td.includes("]]")) {
        const [keywordStartAt, KeywordEndAt] = [
          td.indexOf("[["),
          td.lastIndexOf("]]"),
        ];

        const keyword = td.slice(keywordStartAt + 2, KeywordEndAt);

        td = [
          td.slice(0, keywordStartAt),
          " ",
          <CodeKeyword content={keyword} />,
          " ",
          td.slice(KeywordEndAt + 2),
        ];
      }

      return <td className="px-2 py-2">{td}</td>;
    });

    return (
      <tr className="text-gray-400 bg-gray-950/20 border-b border-b-gray-800 last:border-b-transparent align-text-top">
        {tds}
      </tr>
    );
  });

  return (
    <table className="table-auto bg-gray-950/10 my-4 w-full text-base">
      <thead>
        <tr className="border-b border-b-gray-100/50 text-left text-gray-300">
          {tableTitles}
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
}
export default Table;
