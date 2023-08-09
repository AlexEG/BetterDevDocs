import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_21() {
  const [code1, code2] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x = 10\n  fmt.Println(x)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x = 10\n  x +=5\n  fmt.Println(x)\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Assignment Operators`)}
      {HTML.hr()}
      {HTML.h2(`Assignment Operators`)}
      {HTML.p(`Assignment operators are used to assign values to variables.`)}
      {HTML.p(
        `In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:`,
      )}
      {HTML.code("go", code1)}
      {HTML.p(
        `The addition assignment operator (+=) adds a value to a variable:`,
      )}
      {HTML.code("go", code2)}
      {HTML.p(`A list of all assignment operators:`)}

      {HTML.table(
        [`Operator`, `Example`, `Same As`],
        [
          [`=`, `x = 5`, `x = 5`],
          [`+=`, `x += 3`, `x = x + 3`],
          [`-=`, `x -= 3`, `x = x - 3`],
          [`*=`, `x *= 3`, `x = x * 3`],
          [`/=`, `x /= 3`, `x = x / 3`],
          [`%=`, `x %= 3`, `x = x % 3`],
          [`&=`, `x &= 3`, `x = x & 3`],
          [`|=`, `x |= 3`, `x = x | 3`],
          [`^=`, `x ^= 3`, `x = x ^ 3`],
          [`>>=`, `x >>= 3`, `x = x >> 3`],
          [`<<=`, `x <<= 3`, `x = x << 3`],
        ],
      )}
    </>
  );
}
