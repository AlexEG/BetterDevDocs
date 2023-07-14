import LanguagesTools from "./LanguagesTools";
import { Link } from "react-router-dom";
import SettingsAccountBtn from "./SettingsAccountBtn";

function Navbar() {
  return (
    <nav className="bg-neutral-900 rounded-lg z-10 fixed h-8 top-2 left-4 right-4 px-1 flex justify-between shadow-black shadow-md ">
      {/* left Side  */}

      <div className="h-full flex items-center justify-self-start">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0a0a0a"
            className="w-6 h-6 bg-neutral-300 px-1 rounded-lg mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </div>

      <div className="w-fit flex h-full gap-2 py-1">
        <LanguagesTools />

        <button title="Books">
          <Link to="/books">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#0a0a0a"
              viewBox="0 0 448 512"
              className="w-6 h-6  bg-neutral-300 px-1  rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              ></svg>
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
          </Link>
        </button>
      </div>

      <SettingsAccountBtn />
    </nav>
  );
}

export default Navbar;
