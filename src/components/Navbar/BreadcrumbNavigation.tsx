interface BreadcrumbNavigation {
  PageIndex: string;
  DocsSourceName: string;
  Section: string;
  SupSection: string;
}
function BreadcrumbNavigation({
  PageIndex,
  DocsSourceName,
  Section,
  SupSection,
}: BreadcrumbNavigation) {
  const arrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 mx-1 h-full pb-1 "
      fill="rgb(115 115 115)"
      viewBox="0 0 512 512"
    >
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );

  return (
    <div className="text-neutral-300 text-sm text-center flex">
      <span>{PageIndex}</span>

      {DocsSourceName && (
        <>
          {arrowSVG}
          <span> {DocsSourceName} </span>
        </>
      )}
      {Section && (
        <>
          {arrowSVG}
          <span> {Section}</span>
        </>
      )}
      {SupSection && (
        <>
          {arrowSVG}
          <span> {SupSection}</span>
        </>
      )}
    </div>
  );
}

export default BreadcrumbNavigation;
