interface P {
  content: string;
}
function P({ content }: P) {
  return <p className="my-8">{content}</p>;
}
export default P;
