import { useState } from "react";

function DownloadBtn({ src, alt }: { src: string; alt?: string }) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  function changeIsDownloadedState() {
    setIsDownloaded(true);
  }
  const dropShadow = isDownloaded
    ? "group-hover:drop-shadow-imageDownloadBtnDownloaded"
    : "group-hover:drop-shadow-imageDownloadBtn";

  return (
    <a
      onClick={changeIsDownloadedState}
      href={src}
      download
      title={`Download ${alt}`}
    >
      <button
        className={`bg-neutral-950 absolute bottom-1 right-1 rounded-full p-0.5 opacity-0 group-hover:opacity-80 ${dropShadow} transition-opacity duration-300 `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.3}
          stroke="#fafafa"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </a>
  );
}

export default DownloadBtn;
