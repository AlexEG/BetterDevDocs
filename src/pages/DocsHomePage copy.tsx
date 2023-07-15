function DocsHomePage() {
  return (
    <div className="h-screen overflow-hidden ">
      <nav className="h-10 bg-neutral-950 flex fixed top-0 w-full left-0 justify-between items-center px-2 z-10 ">
        <div className="flex gap-2">
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
          <div className="text-neutral-300 text-sm text-center flex">
            <span>JavaScript </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 mx-1 h-full pb-1"
              fill="#d4d4d4"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
            <span> MDN </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 mx-1 h-full pb-1"
              fill="#d4d4d4"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
            <span> Function</span>
          </div>
        </div>

        <div className="flex gap-2">{/* <LanguagesTools /> */}</div>
      </nav>
      <aside className="bg-neutral-950 w-60 h-[calc(100%-2.5rem)] fixed top-10 left-0 after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-[1.25rem] after:border-r-transparent after:border-b-transparent after:translate-x-full after:border-neutral-950 pt-3 px-3">
        <section className="flex-col flex ">
          <h2 className="text-neutral-50 font-semibold mb-0.5">
            Section Title
          </h2>
          <div className="pl-3 flex flex-col">
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
            <a
              href="#"
              className="before:bg-neutral-50  text-neutral-50 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 2
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 3
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 4
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
          </div>
        </section>
        <section className="flex-col flex ">
          <h2 className="text-neutral-50 font-semibold my-1">Section Title</h2>
          <div className="pl-3 flex flex-col">
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
            <a
              href="#"
              className="before:bg-neutral-50  text-neutral-50 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 2
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 3
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 4
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
          </div>
        </section>
        <section className="flex-col flex ">
          <h2 className="text-neutral-50 font-semibold my-1">Section Title</h2>
          <div className="pl-3 flex flex-col">
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
            <a
              href="#"
              className="before:bg-neutral-50  text-neutral-50 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 2
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 3
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 4
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
          </div>
        </section>
        <section className="flex-col flex ">
          <h2 className="text-neutral-50 font-semibold my-1">Section Title</h2>
          <div className="pl-3 flex flex-col">
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
            <a
              href="#"
              className="before:bg-neutral-50  text-neutral-50 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 2
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 3
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 4
            </a>
            <a
              href="#"
              className="before:bg-neutral-600 text-neutral-300 before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none"
            >
              sub Section 1
            </a>
          </div>
        </section>
        <div className="h-10 bg-neutral-900 absolute bottom-0 left-0 w-full flex justify-around items-center">
          <button>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              fill="white"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0a0a0a"
              className="w-6 h-6 bg-neutral-300 px-1 rounded-lg "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0a0a0a"
              className="w-6 h-6 bg-neutral-300 px-1 rounded-lg "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0a0a0a"
              className="w-6 h-6 bg-neutral-300 px-1 rounded-lg "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0a0a0a"
              className="w-6 h-6 bg-neutral-300 px-1 rounded-lg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </aside>

      <main className="bg-neutral-800  h-screen py-16  px-72 flex justify-center overflow-y-auto newuitestsidebar ">
        <section className=" text-neutral-950 font-medium bg-neutral-300 max-w-3xl p-4 h-fit after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[1.25rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800 before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[1.25rem] before:border-r-transparent before:border-b-transparent  before:border-neutral-800 relative py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nostrum
          minus. Impedit voluptates nisi esse minus! Iste sequi tempora alias
          exercitationem consequuntur velit fuga dolore. Nihil quibusdam, quos
          eligendi omnis a natus repudiandae nobis recusandae aspernatur sed
          architecto tenetur, commodi, quam veniam eos nisi aliquam voluptatem
          labore quis molestias! Aspernatur, esse id ipsum magnam animi
          veritatis maiores deleniti quis velit neque, possimus atque
          reprehenderit delectus iste, excepturi laborum veniam facilis nobis
          porro? Aliquid maxime eaque dicta qui deserunt quo dolorum, explicabo
          nostrum blanditiis libero inventore aut numquam harum reprehenderit.
          Dolore magni at suscipit iusto facilis! Consequatur enim corporis
          pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
          sequi tempora alias exercitationem consequuntur velit fuga dolore.
          Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
          recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
          nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
          ipsum magnam animi veritatis maiores deleniti quis velit neque,
          possimus atque reprehenderit delectus iste, excepturi laborum veniam
          nostrum blanditiis libero inventore aut numquam harum reprehenderit.
          Dolore magni at suscipit iusto facilis! Consequatur enim corporis
          pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
          sequi tempora alias exercitationem consequuntur velit fuga dolore.
          Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
          recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
          nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
          ipsum magnam animi veritatis maiores deleniti quis velit neque,
          possimus atque reprehenderit delectus iste, excepturi laborum veniam
          nostrum blanditiis libero inventore aut numquam harum reprehenderit.
          Dolore magni at suscipit iusto facilis! Consequatur enim corporis
          pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
          sequi tempora alias exercitationem consequuntur velit fuga dolore.
          Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
          recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
          nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
          ipsum magnam animi veritatis maiores deleniti quis velit neque,
          possimus atque reprehenderit delectus iste, excepturi laborum veniam
          nostrum blanditiis libero inventore aut numquam harum reprehenderit.
          Dolore magni at suscipit iusto facilis! Consequatur enim corporis
          pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
          sequi tempora alias exercitationem consequuntur velit fuga dolore.
          Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
          recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
          nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
          ipsum magnam animi veritatis maiores deleniti quis velit neque,
          possimus atque reprehenderit delectus iste, excepturi laborum veniam
          nostrum blanditiis libero inventore aut numquam harum reprehenderit.
          Dolore magni at suscipit iusto facilis! Consequatur enim corporis
          pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
          sequi tempora alias exercitationem consequuntur velit fuga dolore.
          Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
          recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
          nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
          ipsum magnam animi veritatis maiores deleniti quis velit neque,
          possimus atque reprehenderit delectus iste, excepturi laborum veniam
          facilis nobis porro? Aliquid maxime eaque dicta qui deserunt quo
          dolorum, explicabo nostrum blanditiis libero inventore aut numquam
          harum reprehenderit. Dolore magni at suscipit iusto facilis!
          Consequatur enim corporis pariatur sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia, nostrum minus. Impedit voluptates
          nisi esse minus! Iste sequi tempora alias exercitationem consequuntur
          velit fuga dolore. Nihil quibusdam, quos eligendi omnis a natus
          repudiandae nobis recusandae aspernatur sed architecto tenetur,
          commodi, quam veniam eos nisi aliquam voluptatem labore quis
          molestias! Aspernatur, esse id ipsum magnam animi veritatis maiores
          deleniti quis velit neque, possimus atque reprehenderit delectus iste,
          excepturi laborum veniam facilis nobis porro? Aliquid maxime eaque
          dicta qui deserunt quo dolorum, explicabo nostrum blanditiis libero
          inventore aut numquam harum reprehenderit. Dolore magni at suscipit
          iusto facilis! Consequatur enim corporis pariatur sint. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quia, nostrum minus.
          Impedit voluptates nisi esse minus! Iste sequi tempora alias
          exercitationem consequuntur velit fuga dolore. Nihil quibusdam, quos
          eligendi omnis a natus repudiandae nobis recusandae aspernatur sed
          architecto tenetur, commodi, quam veniam eos nisi aliquam voluptatem
          labore quis molestias! Aspernatur, esse id ipsum magnam animi
          veritatis maiores deleniti quis velit neque, possimus atque
          reprehenderit delectus iste, excepturi laborum veniam facilis nobis
          porro? Aliquid maxime eaque dicta qui deserunt quo dolorum, explicabo
          nostrum blanditiis libero inventore aut numquam harum reprehenderit.
          Dolore magni at suscipit iusto facilis! Consequatur enim corporis
          pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, nostrum minus. Impedit voluptates nisi esse minus! Iste
          sequi tempora alias exercitationem consequuntur velit fuga dolore.
          Nihil quibusdam, quos eligendi omnis a natus repudiandae nobis
          recusandae aspernatur sed architecto tenetur, commodi, quam veniam eos
          nisi aliquam voluptatem labore quis molestias! Aspernatur, esse id
          ipsum magnam animi veritatis maiores deleniti quis velit neque,
          possimus atque reprehenderit delectus iste, excepturi laborum veniam
          facilis nobis porro? Aliquid maxime eaque dicta qui deserunt quo
          dolorum, explicabo nostrum blanditiis libero inventore aut numquam
          harum reprehenderit. Dolore magni at suscipit iusto facilis!
          Consequatur enim corporis pariatur sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia, nostrum minus. Impedit voluptates
          nisi esse minus! Iste sequi tempora alias exercitationem consequuntur
          velit fuga dolore. Nihil quibusdam, quos eligendi omnis a natus
          repudiandae nobis recusandae aspernatur sed architecto tenetur,
          commodi, quam veniam eos nisi aliquam voluptatem labore quis
          molestias! Aspernatur, esse id ipsum magnam animi veritatis maiores
          deleniti quis velit neque, possimus atque reprehenderit delectus iste,
          excepturi laborum veniam facilis nobis porro? Aliquid maxime eaque
          dicta qui deserunt quo dolorum, explicabo nostrum blanditiis libero
          inventore aut numquam harum reprehenderit. Dolore magni at suscipit
          iusto facilis! Consequatur enim corporis pariatur sint.
          {/* Reading settings */}
          <div className="bg-black w-8 h-8 fixed bottom-3 right-1/4 overflow-hidden">
            <div className="w-full h-full before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[0.3rem] before:border-r-transparent before:border-b-transparent text-xs  before:border-neutral-800 after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[0.3rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fafafa"
              className="w-6 h-6 absolute top-1 left-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
            <div className="w-full h-full before:w-0 before:h-0 before:absolute before:top-0 before:right-0 before:border-[0.3rem] before:border-l-transparent before:border-b-transparent text-xs  before:border-neutral-800 after:w-0 after:h-0 after:absolute after:bottom-0 after:left-0 after:border-[0.3rem] after:border-r-transparent after:border-t-transparent  after:border-neutral-800"></div>
          </div>
        </section>

        {/* Content Sidebar  */}

        <section className="bg-neutral-600 min-h-64 max-h-96 w-44 fixed top-14 right-6 after:w-0 after:h-0 after:absolute after:bottom-0 after:right-0 after:border-[1.25rem] after:border-l-transparent after:border-t-transparent  after:border-neutral-800 before:w-0 before:h-0 before:absolute before:top-0 before:left-0 before:border-[1.25rem] before:border-r-transparent before:border-b-transparent text-xs  before:border-neutral-800 py-9 flex flex-col gap-1 px-3 text-neutral-300 font-medium">
          <p>1 Lorem ipsum dolor sit.</p>
          <p>2 veniam facilis nobis</p>
          <p>3 Dolore magni at suscipit</p>
          <p>4 consectetur adipisicin</p>
          <p>5 quibusdam, quos eligendi</p>
          <p>6 Aspernatur, esse id</p>
          <p>1 Lorem ipsum dolor sit.</p>
          <p>2 veniam facilis nobis</p>
          <p>3 Dolore magni at suscipit</p>
          <p>4 consectetur adipisicin</p>
          <p>5 quibusdam, quos eligendi</p>
          <p>6 Aspernatur, esse id</p>
          <p>1 Lorem ipsum dolor sit.</p>
        </section>
      </main>
    </div>
  );
}

export default DocsHomePage;