// import { Link } from "react-router-dom";

import book1 from "../../assets/books-covers/books (1).png";
import book2 from "../../assets/books-covers/books (2).png";
import book3 from "../../assets/books-covers/books (3).png";
import book4 from "../../assets/books-covers/books (4).png";
import book5 from "../../assets/books-covers/books (5).png";
import book6 from "../../assets/books-covers/books (6).png";
import book7 from "../../assets/books-covers/books (7).png";

import BookCover from "../../components/BookCover";

function BooksHome() {
  return (
    <div className="bg-neutral-800 min-h-screen  grid place-content-center pt-16">
      <div className="bg-neutral-950 grid grid-cols-4 grdi max-w-5xl gap-4 p-8 rounded-lg">
        <img src={book1} alt="" className="rounded-lg" />
        <img src={book2} alt="" className="rounded-lg" />
        <img src={book3} alt="" className="rounded-lg" />
        <img src={book4} alt="" className="rounded-lg" />
        <img src={book5} alt="" className="rounded-lg" />
        <img src={book6} alt="" className="rounded-lg" />
        <img src={book7} alt="" className="rounded-lg" />

        <BookCover
          coverSRC={book3}
          filePath="/books-pdf/You Don't Know JS_ Types & Grammar.pdf"
        />
      </div>
    </div>
  );
}

export default BooksHome;
