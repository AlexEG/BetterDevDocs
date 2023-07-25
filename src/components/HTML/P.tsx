interface P {
  content: string;
}
function P({ content }: P) {
  return <p className="mb-6">{content}</p>;
}
export default P;
