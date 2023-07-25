interface Note {
  content: string;
}

function Note({ content }: Note) {
  return (
    <p className="bg-blue-800/25 pl-10 py-2 relative before:absolute before:w-1 before:h-full before:top-0 before:left-0 before:bg-blue-800 my-4 font-normal text-blue-500 selection:bg-blue-950 selection:text-blue-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="rgb(29 78 216)"
        className="w-6 h-6 absolute top-1 left-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>

      {content}
    </p>
  );
}

export default Note;
