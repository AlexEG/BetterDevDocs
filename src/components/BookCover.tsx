import DownloadBtn from "./DownloadBtn";
import readingGif from "../assets/reading.gif";

interface book {
  filePath: string;
  coverSRC: string;
}

function BookCover({ filePath, coverSRC }: book) {
  return (
    <div className="rounded-lg overflow-hidden relative group w-fit mx-auto my-10">
      <img src={coverSRC} className="rounded-lg max-h-96" />

      <div className="absolute top-2 right-2 z-10">
        <DownloadBtn src={filePath} />
      </div>

      <div className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl shadow-black p-5 transition-opacity duration-300 delay-75 cursor-pointer z-10">
        <img src={readingGif} />
      </div>

      <div className="group-hover:bg-black transition-colors opacity-50 absolute top-0 left-0 bottom-0 right-0 z-0"></div>
    </div>
  );
}

export default BookCover;
