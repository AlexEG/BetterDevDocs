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

import bash from "highlight.js/lib/languages/bash";
hljs.registerLanguage("bash", bash);
import json from "highlight.js/lib/languages/json";
hljs.registerLanguage("json", json);

interface HighlighterProps {
  content: string;
  language?: string;
  filePath?: string;
}

import DownloadBtn from "../DownloadBtn";
import CopyToClipboard from "../CopyToClipboard";

function CodeBlock({
  content,
  language,
  filePath,
}: HighlighterProps): JSX.Element {
  const highlighted = language
    ? hljs.highlight(language, content)
    : hljs.highlightAuto(content);

  return (
    <div className="selection:bg-[#384963] selection:text-current relative group max-w-full mx-auto my-3 overflow-hidden">
      <pre className="hljs rounded-lg p-3 ">
        <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
      </pre>

      <div className="absolute top-2 right-2 flex gap-1 ">
        <CopyToClipboard content={content} />
        {filePath && <DownloadBtn src={filePath} />}
      </div>
    </div>
  );
}
export default CodeBlock;
