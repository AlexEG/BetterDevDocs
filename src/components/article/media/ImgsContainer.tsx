function ImgsContainer({
  grid,
  ImgsArr,
}: {
  grid?: number;
  ImgsArr: JSX.Element[];
}) {
  const grid4 = "px-8 grid grid-cols-2 w-fit  gap-2 my-6 mx-auto";
  const flex = "flex justify-center items-center";

  return <div className={`${flex} py-2 flex-wrap gap-2`}>{ImgsArr}</div>;
}

export default ImgsContainer;
