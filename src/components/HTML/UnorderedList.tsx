interface UnorderedList {
  items: string[];
}
function UnorderedList({ items }: UnorderedList) {
  const listItmes = items.map((item) => <li>{item}</li>);
  return <ul className="list-disc pl-8">{listItmes}</ul>;
}

export default UnorderedList;
