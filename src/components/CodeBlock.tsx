// import hljs from "highlight.js/lib/common";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("go", go);

import css from "highlight.js/lib/languages/css";
hljs.registerLanguage("css", css);

import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);

interface HighlighterProps {
  content: string;
  language?: string;
  filePath?: string;
}

import DownloadBtn from "./article/media/DownloadBtn";
import CopyToClipboard from "./CopyToClipboard";

function CodeBlock({
  content,
  language,
  filePath,
}: HighlighterProps): JSX.Element {
  const highlighted = language
    ? hljs.highlight(language, content)
    : hljs.highlightAuto(content);

  return (
    <div className="selection:bg-[#384963] selection:text-current relative group max-w-3xl mx-auto my-3">
      <pre className="hljs rounded-lg p-1">
        <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
      </pre>

      <div className="absolute top-2 right-2 flex gap-1 ">
        <CopyToClipboard content={content} />
        {filePath && (
          <DownloadBtn src={`/downloadable-code-snippets/${filePath}`} />
        )}
      </div>
    </div>
  );
}
export default CodeBlock;
