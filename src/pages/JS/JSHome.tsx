import Sidebar from "../../components/Sidebar/Sidebar";
import JavaScriptSidebarData from "../../DATA/JavaScriptSidebarData";
function JSHome() {
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

      <Sidebar SidebarData={JavaScriptSidebarData} />

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

export default JSHome;
