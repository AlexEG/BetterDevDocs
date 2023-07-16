interface OpenCloseSidebarBtn {
  isTheSidebarOpen: boolean;
  SidebarBtnFunc(): void;
}
function OpenCloseSidebarBtn({
  isTheSidebarOpen,
  SidebarBtnFunc,
}: OpenCloseSidebarBtn) {
  return (
    <div className="absolute w-full h-10 top-0 left-0 flex justify-start items-center px-2">
      <button onClick={SidebarBtnFunc}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#0a0a0a"
          className="w-6 h-6 bg-neutral-300 px-1 rounded-lg mr-2"
        >
          {isTheSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          )}
        </svg>
      </button>
    </div>
  );
}
export default OpenCloseSidebarBtn;
