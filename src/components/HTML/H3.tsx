interface H3 {
  content: string;
}
function H3({ content }: H3) {
  return (
    <h3 className="selection:bg-neutral-600/75 selection:text-neutral-50">
      {content}
    </h3>
  );
}

export default H3;
