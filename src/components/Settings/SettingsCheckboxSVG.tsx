interface SettingsCheckboxSVG {
  path: any;
}

function SettingsCheckboxSVG({ path }: SettingsCheckboxSVG) {
  return (
    <button className="bg-neutral-950 rounded-full p-1 w-8 h-8 cursor-default">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.3}
        stroke="#fafafa"
        className="w-6 h-6 p-px"
      >
        {path}
      </svg>
    </button>
  );
}
export default SettingsCheckboxSVG;
