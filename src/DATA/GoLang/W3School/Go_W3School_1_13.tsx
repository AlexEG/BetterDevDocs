import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_13() {
  const [code1, code2, code3] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x int = 500\n  var y int = -4500\n  fmt.Printf("Type: %T, value: %v", x, x)\n  fmt.Printf("Type: %T, value: %v", y, y)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x uint = 500\n  var y uint = 4500\n  fmt.Printf("Type: %T, value: %v", x, x)\n  fmt.Printf("Type: %T, value: %v", y, y)\n}\n',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x int8 = 1000\n  fmt.Printf("Type: %T, value: %v", x, x)\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Integer Data Types`)}

      {HTML.hr()}

      {HTML.h2(`Go Integer Data Types`)}

      {HTML.p(`Integer data types are used to store a whole number without 
decimals, like 35, -50, or 1345000.`)}

      {HTML.p(`The integer data type has two categories:`)}

      {HTML.ul([
        `Signed integers - can store both positive and negative values`,
        `Unsigned integers - can only store non-negative values`,
      ])}

      {HTML.mlnote([
        `Tip: The default type for integer is int.`,
        `If you 
do not specify a type, the type will be int.`,
      ])}

      {HTML.hr()}

      {HTML.h2(`Signed Integers`)}

      {HTML.p(`Signed integers, declared with one of the [[int]] 
keywords, can store both positive and negative values:`)}

      {HTML.code("go", code1)}

      {HTML.p(`Go has five keywords/types of signed integers:`)}

      {HTML.table(
        [`Type`, `Size`, `Range`],
        [
          [
            ` [[int]]`,
            `Depends on platform: 32 bits in 32 bit systems and 64 bit in 
        64 bit systems`,
            `-2147483648 to 2147483647 in 32 bit systems and 
        -9223372036854775808 to 9223372036854775807 in 64 bit systems`,
          ],
          [` [[int8]]`, `8 bits/1 byte`, `-128 to 127`],
          [` [[int16]]`, `16 bits/2 byte`, `-32768 to 32767`],
          [` [[int32]]`, `32 bits/4 byte`, `-2147483648 to 2147483647`],
          [
            ` [[int64]]`,
            `64 bits/8 byte`,
            `-9223372036854775808 to 9223372036854775807`,
          ],
        ],
      )}

      {HTML.hr()}

      {HTML.h2(`Unsigned Integers`)}

      {HTML.p(`Unsigned integers, declared with one of the [[uint]] 
keywords, can only store non-negative values:`)}

      {HTML.code("go", code2)}

      {HTML.p(`Go has five keywords/types of unsigned integers:`)}

      {HTML.table(
        [`Type`, `Size`, `Range`],
        [
          [
            ` [[uint]]`,
            `Depends on platform: 32 bits in 32 bit 
        systems and 64 bit in 64 bit systems`,
            `0 to 4294967295 in 32 bit systems and 0 to 18446744073709551615 
        in 64 bit systems`,
          ],
          [` [[uint8]]`, `8 bits/1 byte`, `0 to 255`],
          [` [[uint16]]`, `16 bits/2 byte`, `0 to 65535`],
          [` [[uint32]]`, `32 bits/4 byte`, `0 to 4294967295`],
          [` [[uint64]]`, `64 bits/8 byte`, `0 to 18446744073709551615`],
        ],
      )}

      {HTML.hr()}

      {HTML.h2(`Which Integer Type to Use?`)}

      {HTML.p(
        `The type of integer to choose, depends on the value the variable has to store.`,
      )}

      {HTML.p(`This example will result in an error because 1000 is out of range for 
    int8 (which is from -128 to 127):`)}

      {HTML.code("go", code3)}
    </>
  );
}
