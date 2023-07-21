interface SharePost {
  isSharePostOpen: boolean;
}

function SharePost({ isSharePostOpen }: SharePost) {
  const [open, close] = [
    "animate-[openSettings_800ms_ease-in-out_1_forwards]",
    "animate-[closeSettings_800ms_ease-in-out_1_forwards]",
  ];
  const openCloseCSS = isSharePostOpen ? open : close;

  return (
    <section
      className={`bg-neutral-700 absolute bottom-10 left-0 w-full h-40 translate-y-full px-4 ${openCloseCSS}`}
    >
      <p className="text-center text-neutral-400 font-medium mt-2 mb-4">
        Share on Social Media
      </p>

      <div className="flex justify-around">
        <button className="w-fit ">
          <svg
            viewBox="0 -4 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-10 h-10"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-300.000000, -164.000000)"
                  fill="#00AAEC"
                >
                  <path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"></path>
                </g>
              </g>
            </g>
          </svg>
        </button>

        <button className="w-fit relative ">
          <svg
            viewBox="0 0 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-10 h-10"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                fill="#007EBB"
                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
              ></path>
            </g>
          </svg>
          <span className=" before:absolute  before:top-0 before:left-0 before:right-0 before:rounded-lg before:bottom-0  before:bg-white before:-z-10"></span>
        </button>

        <button className="w-fit relative">
          <svg
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-10 h-10 z-10"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-200.000000, -160.000000)"
                  fill="#4460A0"
                >
                  <path
                    d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                    id="Facebook"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className=" before:absolute  before:top-0 before:left-0 before:right-0 before:rounded-lg before:bottom-0  before:bg-white before:-z-10"></span>
        </button>
      </div>

      <div className="flex justify-between mt-4 bg-neutral-900 rounded-sm py-1 px-1">
        <p className="text-neutral-400 overflow-hidden w-[calc(100%-2rem)] text-[0.5rem] selection:bg-blue-800/25">
          http://betterdevdocs.netlify.app/vite/official/command-line-interface
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="#fafafa"
            className="w-6 h-6 p-0.5 bg-neutral-950 rounded-md"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
export default SharePost;

// <a

// target="_blank"
// className="crayons-link crayons-link--block"
// rel="noopener"
// href="https://twitter.com/intent/tweet?text=%22Callbacks%20vs%20Promises%22%20by%20Altoneisha%20Rose%20https%3A%2F%2Fdev.to%2Fneisha1618%2Fcallbacks-vs-promises-4mi1"
// >
// Share to Twitter
// </a>

// <a
// target="_blank"
// rel="noopener"
// referrerPolicy="no-referrer"
// href="https://twitter.com/intent/tweet?text=https://alexeg.netlify.app"
// >
// Share to Twitter
// </a>
