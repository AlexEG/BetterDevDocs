// import hljs from "highlight.js/lib/common";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("go", go);
import css from "highlight.js/lib/languages/css";
hljs.registerLanguage("css", css);

interface HighlighterProps {
  content: string;
  language?: string;
}

function CodeBlock({ content, language }: HighlighterProps): JSX.Element {
  const highlighted = language
    ? hljs.highlight(language, content)
    : hljs.highlightAuto(content);

  return (
    <pre className="hljs selection:bg-[#55005555] select-text rounded-lg">
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
}
export default CodeBlock;
