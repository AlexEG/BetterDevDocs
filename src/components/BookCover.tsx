import DownloadBtn from "./article/media/DownloadBtn";
import readingGif from "../assets/reading.gif";
import { Link } from "react-router-dom";
interface book {
  filePath: string;
  coverSRC: string;
  linkTo: string;
}

function BookCover({ filePath, coverSRC, linkTo }: book) {
  return (
    <div className="rounded-lg overflow-hidden relative group">
      <img src={coverSRC} className="rounded-lg" />

      <div className="absolute top-2 right-2 z-10">
        <DownloadBtn src={filePath} />
      </div>
      <Link to={linkTo}>
        <div className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl shadow-black p-5 transition-opacity duration-300 delay-75 cursor-pointer z-10">
          <img src={readingGif} />
        </div>
      </Link>

      <div className="group-hover:bg-black transition-colors opacity-50 absolute top-0 left-0 bottom-0 right-0 z-0"></div>
    </div>
  );
}

export default BookCover;
