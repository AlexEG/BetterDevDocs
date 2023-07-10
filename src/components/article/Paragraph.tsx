function Paragraph({ content }: { content: string[] }) {
  const pElements = content.map((str) => <p>{str}</p>);
  return pElements;
}
export default Paragraph;
