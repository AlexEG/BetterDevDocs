import LanguagesTools from "./LanguagesTools";

function Navbar() {
  return (
    <nav className="bg-neutral-900 rounded-lg z-10 fixed h-8 top-2 left-4 right-4 px-1 flex justify-between ">
      {/* left Side  */}
      <div className="h-full flex items-center justify-self-start">
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
      </div>

      <div className="w-fit flex h-full gap-2 py-1">
        <LanguagesTools />
      </div>
    </nav>
  );
}

export default Navbar;
