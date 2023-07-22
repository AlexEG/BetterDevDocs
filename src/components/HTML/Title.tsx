interface Title {
  content: string;
}
function Title({ content }: Title) {
  return (
    <>
      <h1 className="font-bold text-2xl text-neutral-50 mb-6">{content}</h1>
      <hr className="opacity-50 border-neutral-500 rounded-lg mb-2" />
    </>
  );
}

export default Title;
