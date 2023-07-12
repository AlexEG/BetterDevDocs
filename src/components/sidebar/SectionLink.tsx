import { useState } from "react";

function SectionLink({
  sectionTitle,
  subSections,
  openSection,
  setOpenSection,
}: {
  sectionTitle: string;
  subSections: string[];
  openSection: string;
  setOpenSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [sectionTap, setSectionTap] = useState({
    isSectionTapOpen: false,
    selectOpenSubSec: `${sectionTitle}-subSection-${0}`,
  });

  function openSectionTap() {
    setSectionTap((prev) => ({
      ...prev,
      isSectionTapOpen: !prev.isSectionTapOpen,
    }));
  }

  function OpenSubSec(dataset: string) {
    setSectionTap((prev) => ({
      ...prev,
      selectOpenSubSec: dataset,
    }));
    setOpenSection(sectionTitle);
    console.log(sectionTap.selectOpenSubSec);
  }

  const subSectionItem = subSections.map((item, i) => (
    <p
      key={`${sectionTitle}-subSection-${i}`}
      onClick={(e) =>
        OpenSubSec(
          e.currentTarget.dataset.subsection !== undefined
            ? e.currentTarget.dataset.subsection
            : "",
        )
      }
      data-subSection={`${sectionTitle}-subSection-${i}`}
      className={` ${
        sectionTap.selectOpenSubSec === `${sectionTitle}-subSection-${i}` &&
        openSection === sectionTitle
          ? "before:bg-neutral-50 text-neutral-50"
          : "before:bg-neutral-600 text-neutral-200"
      }  before:absolute relative before:top-0 before:-left-2 pl-1 before:h-full before:w-0.5 py-1 cursor-pointer select-none `}
    >
      {item}
    </p>
  ));

  return (
    <div className={`my-2  `}>
      <button
        onClick={openSectionTap}
        className="relative pl-5 text-neutral-50 font-semibold "
      >
        {!sectionTap.isSectionTapOpen && (
          <span className="bg-neutral-50 w-2 h-2 rounded-full absolute top-1/2 left-0 -translate-y-1/2"></span>
        )}
        {sectionTap.isSectionTapOpen && (
          <>
            <span className="bg-neutral-50 w-0.5 h-3 rounded-lg absolute top-1/2 left-0 -rotate-[20deg]  -translate-y-1/2 translate-x-0.5"></span>
            <span className="bg-neutral-50 w-0.5 h-3 rounded-lg absolute top-1/2 left-0 rotate-[20deg] translate-x-1.5 -translate-y-1/2"></span>
          </>
        )}
        {sectionTitle}
      </button>

      {sectionTap.isSectionTapOpen && (
        <div className=" leading-4 text-sm pl-3">{subSectionItem}</div>
      )}
    </div>
  );
}

export default SectionLink;
