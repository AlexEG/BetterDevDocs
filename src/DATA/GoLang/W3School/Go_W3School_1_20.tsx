import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_20() {
  return (
    <>
      {HTML.h1(`Go Arithmetic Operators`)}
      {HTML.hr()}
      {HTML.h2(`Arithmetic Operators`)}
      {HTML.p(
        `Arithmetic operators are used to perform common mathematical operations.`,
      )}
      {HTML.table(
        [`Operator`, `Name`, `Description`, `Example`],
        [
          [`+`, `Addition`, `Adds together two values`, `x + y`],
          [`-`, `Subtraction`, `Subtracts one value from another`, `x - y`],
          [`*`, `Multiplication`, `Multiplies two values`, `x * y`],
          [`/`, `Division`, `Divides one value by another`, `x / y`],
          [`%`, `Modulus`, `Returns the division remainder`, `x % y`, ,],
          [`++`, `Increment`, `Increases the value of a variable by 1`, `x++`],
          [`--`, `Decrement`, `Decreases the value of a variable by 1`, `x--`],
        ],
      )}
    </>
  );
}
