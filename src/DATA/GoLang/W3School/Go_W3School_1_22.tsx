import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_22() {
  const [code1] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x = 5\n  var y = 3\n  fmt.Println(x>y) // returns 1 (true) because 5 is greater than 3\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Comparison Operators`)}
      {HTML.hr()}
      {HTML.h2(`Comparison Operators`)}
      {HTML.p(`Comparison operators are used to compare two values.`)}
      {HTML.p(
        `Note: The return value of a comparison is either true (1) or false (0).`,
      )}
      {HTML.p(
        `In the following example, we use the greater than operator (>) to find out if 5 is greater than 3:`,
      )}
      {HTML.code("go", code1)}
      {HTML.p(`A list of all comparison operators:`)}
      {HTML.p(
        `You will learn more about comparison operators and how to use them in the Go Conditions chapter.`,
      )}

      {HTML.table(
        [`Operator`, `Name`, `Example`, `Try it`],
        [
          [`==`, `Equal to`, `x == y`],
          [`!=`, `Not equal`, `x != y`],
          [`>`, `Greater than`, `x > y`],
          [`<`, `Less than`, `x < y`],
          [`>=`, `Greater than or equal to`, `x >= y`],
          [`<=`, `Less than or equal to`, `x <= y`],
        ],
      )}
    </>
  );
}
