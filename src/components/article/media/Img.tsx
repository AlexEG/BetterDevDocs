import DownloadBtn from "./DownloadBtn";
function Img({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className=" relative group">
      <img
        className=" max-w-full  max-h-96 rounded-lg"
        src={src}
        alt={alt ? alt : "Image"}
      />
      <DownloadBtn src={src} alt={alt ? alt : ""} />
    </div>
  );
}

export default Img;
