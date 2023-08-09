import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_19() {
  const [code1, code2] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var a = 15 + 25\n  fmt.Println(a)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var (\n    sum1 = 100 + 50 // 150 (100 + 50)\n    sum2 = sum1 + 250 // 400 (150 + 250)\n    sum3 = sum2 + sum2 // 800 (400 + 400)\n  )\n  fmt.Println(sum3)\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Operators`)}
      {HTML.hr()}
      {HTML.h2(`Go Operators`)}
      {HTML.p(
        `Operators are used to perform operations on variables and values.`,
      )}
      {HTML.p(
        `The + operator adds together two values, like in the example below:`,
      )}
      {HTML.code("go", code1)}
      {HTML.p(
        `Although the + operator is often used to add together two values, it can also be used to add together a variable and a value, or a variable and another variable:`,
      )}
      {HTML.code("go", code2)}
      {HTML.p(`Go divides the operators into the following groups:`)}
      {HTML.ul([
        `Arithmetic operators`,
        `Assignment operators`,
        `Comparison operators`,
        `Logical operators`,
        `Bitwise operators`,
      ])}
    </>
  );
}
