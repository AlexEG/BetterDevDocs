interface MultiLineWarning {
  content: string[];
}

function MultiLineWarning({ content }: MultiLineWarning) {
  const spans = content.map((content) => (
    <span className="block">{content}</span>
  ));
  return (
    <p className="bg-pink-800/25 pl-10 py-2 relative before:absolute before:w-1 before:h-full before:top-0 before:left-0 before:bg-pink-800 my-4 font-normal text-pink-500 selection:bg-pink-950 selection:text-pink-50 text-base">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6 absolute top-1 left-2"
      >
        <g strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0619 4.4295C12.6213 3.54786 11.3636 3.54786 10.9229 4.4295L3.89008 18.5006C3.49256 19.2959 4.07069 20.2317 4.95957 20.2317H19.0253C19.9142 20.2317 20.4923 19.2959 20.0948 18.5006L13.0619 4.4295ZM9.34196 3.6387C10.434 1.45376 13.5508 1.45377 14.6429 3.63871L21.6758 17.7098C22.6609 19.6809 21.2282 22 19.0253 22H4.95957C2.75669 22 1.32395 19.6809 2.3091 17.7098L9.34196 3.6387Z"
            fill="rgba(157 23 77 / 0.75)"
          ></path>
          <path
            d="M12 8V13"
            stroke="#DF1463"
            strokeWidth="1.7"
            strokeLinecap="round"
          ></path>
          <path
            d="M12 16L12 16.5"
            stroke="#DF1463"
            strokeWidth="1.7"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
      {spans}
    </p>
  );
}

export default MultiLineWarning;
