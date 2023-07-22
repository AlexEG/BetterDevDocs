interface OutsideLink {
  src: string;
  text: string;
}

function OutsideLink({ src, text }: OutsideLink) {
  return (
    <a href={src} referrerPolicy="no-referrer" target="_blank">
      {text}
    </a>
  );
}
export default OutsideLink;
