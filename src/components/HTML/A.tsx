interface A {
  src: string;
  text: string;
}

function A({ src, text }: A) {
  return (
    <a
      href={src}
      referrerPolicy="no-referrer"
      target="_blank"
      className="text-blue-100 relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600/75 hover:after:bg-blue-500 hover:after:h-[3px] hover:after:-bottom-px selection:bg-blue-800/50 selection:text-blue-50 "
    >
      {text}
    </a>
  );
}
export default A;
