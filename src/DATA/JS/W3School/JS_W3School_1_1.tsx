import BookCover from "../../../components/BookCover";
import Img from "../../../components/Img";
import CodeBlock from "../../../components/CodeBlock";
import image1 from ".././../../assets/test images/Screenshot_1.png";
import book1 from "../../../assets/books-covers/You-Don't-Know-JS-Up-&-Going.png";

export default function JS_W3School_1_1() {
  const code1 = `
import { useState } from "react";

function DownloadBtn({ src }: { src: string }) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  function changeIsDownloadedState() {
    setIsDownloaded(true);
  }
  const dropShadow = isDownloaded
    ? "group-hover:drop-shadow-imageDownloadBtnDownloaded"
    : "group-hover:drop-shadow-imageDownloadBtn";

  return (
    <a onClick={changeIsDownloadedState} href={src} download title="Download">
      <button
        className={\`bg-neutral-950 w-7 h-7 rounded-full p-0.5 
        opacity-0 group-hover:opacity-80 \${dropShadow} transition-opacity duration-300 \`}
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
  `;
  return (
    <div>
      <h1>JavaScript First Steps JS_W3School_1_1</h1>
      <Img src="https://i.imgur.com/6xrqbvr.jpg" />
      <p>
        In our first JavaScript module, we first answer some fundamental
        questions such as "what is JavaScript?", "what does it look like?", and
        "what can it do?", befor0000000000000000e moving on to taking you
        through your first practical experience of writing JavaScript. After
        that, we discuss some key building blocks in detail, such as variables,
        strings, numbers and arrays.
      </p>
      <h2>Prerequisites</h2>
      <Img src={image1} />
      <BookCover
        coverSRC={book1}
        filePath="/books-pdf/You Don't Know JS Up & Going.pdf"
      />

      <CodeBlock
        content={code1}
        language="tsx"
        filePath="/downloadable-code-snippets/DownloadBtn.zip"
      />

      <p>
        Before starting this module, you don't need any previous JavaScript
        knowledge, but you should have some familiarity with HTML and CSS. You
        are advised to work through the following modules before starting on
        JavaScript:
      </p>

      <p>
        Getting started with the Web (which includes a really basic JavaScript
        introduction). Introduction to HTML. Introduction to CSS.
      </p>
    </div>
  );
}
