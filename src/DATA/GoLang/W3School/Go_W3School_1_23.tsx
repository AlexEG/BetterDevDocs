import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_23() {
  return (
    <>
      {HTML.h1(`Go Logical Operators`)}

      {HTML.hr()}

      {HTML.h2(`Logical Operators`)}

      {HTML.p(
        `Logical operators are used to determine the logic between variables or values:`,
      )}

      {HTML.table(
        [`Operator`, `Name`, `Description`, `Example`],
        [
          [
            `&&`,
            `Logical and`,
            `Returns true if both statements are true`,
            `x < 5 &&  x < 10`,
          ],
          [
            `||`,
            `Logical or`,
            `Returns true if one of the statements is true`,
            `x < 5 || x < 4`,
          ],
          [
            `!`,
            `Logical not`,
            `Reverse the result, returns false if the result is true`,
            `!(x < 5 && x < 10)`,
          ],
        ],
      )}
    </>
  );
}
