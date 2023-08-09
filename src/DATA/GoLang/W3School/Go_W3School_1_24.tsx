import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_24() {
  return (
    <>
      {HTML.h1(`Go Bitwise Operators`)}

      {HTML.hr()}

      {HTML.h2(`Bitwise Operators`)}

      {HTML.p(`Bitwise operators are used on (binary) numbers:`)}

      {HTML.table(
        [`Operator`, `Name`, `Description`, `Example`],
        [
          [`&`, `AND`, `Sets each bit to 1 if both bits are 1`, ` x & y`],
          [`|`, `OR`, `Sets each bit to 1 if one of two bits is 1`, ` x | y `],
          [
            `^`,
            `XOR`,
            `Sets each bit to 1 if only one of two bits is 1`,
            `x ^ b`,
          ],

          [
            `<<`,
            `Zero fill left shift`,
            `Shift left by pushing zeros in from the right`,
            `x << 2`,
          ],
          [
            `>>`,
            `Signed right shift`,
            `Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off`,
            `x >> 2`,
          ],
        ],
      )}
    </>
  );
}
