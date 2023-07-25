interface H2 {
  content: string;
}
function H2({ content }: H2) {
  return (
    <h2 className="text-neutral-200 font-semibold text-lg py-4">{content}</h2>
  );
}

export default H2;
