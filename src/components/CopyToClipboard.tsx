import { useState } from "react";

function CopyToClipboard({ content: content }: { content: string }) {
  const [isCopied, setIsCopiedsDownloaded] = useState(false);

  function changeIsDownloadedState() {
    setIsCopiedsDownloaded(true);
  }
  const dropShadow = isCopied
    ? "group-hover:drop-shadow-imageDownloadBtnDownloaded"
    : "group-hover:drop-shadow-imageDownloadBtn";

  return (
    <button
      onClick={() => {
        changeIsDownloadedState();
        navigator.clipboard.writeText(content);
      }}
      title="Copy To Clipboard"
      className={`bg-neutral-950 w-7 h-7 rounded-full p-0.5 opacity-0 group-hover:opacity-80 ${dropShadow} transition-opacity duration-300 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fafafa"
        className="w-6 h-6 p-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    </button>
  );
}

export default CopyToClipboard;
