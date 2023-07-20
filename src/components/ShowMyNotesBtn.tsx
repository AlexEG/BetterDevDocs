function ShowMyNotesBtn() {
  return (
    <div className="bg-neutral-950 w-24 p-0.5  absolute top-1 right-1 flex">
      <span className="absolute text-white text-xs">Notes</span>
      <button className="text-green-200 bg-green-700 px-1 text-sm ">
        Notes
      </button>
      <button className="text-green-200 bg-red-700 px-1 text-sm ">Notes</button>
    </div>
  );
}
export default ShowMyNotesBtn;
