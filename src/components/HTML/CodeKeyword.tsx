interface CodeKeyword {
  content: string;
}

function CodeKeyword({ content }: CodeKeyword) {
  return (
    <span className="bg-neutral-700 px-2 py-0.5 rounded-sm font-mono text-red-400 selection:bg-red-500/50 selection:text-red-200 text-base">
      {content}
    </span>
  );
}
export default CodeKeyword;
