import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_14() {
  const [code1, code2, code3] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x float32 = 123.78\n  var y float32 = 3.4e+38\n  fmt.Printf("Type: %T, value: %v\\n", x, x)\n  fmt.Printf("Type: %T, value: %v", y, y)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x float64 = 1.7e+308\n  fmt.Printf("Type: %T, value: %v", x, x)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var x float32= 3.4e+39\n  fmt.Println(x)\n}\n// ./prog.go:5:7: constant 3.4e+39 overflows float32',
  ];

  return (
    <>
      {HTML.h1(`Go Float Data Types`)}

      {HTML.hr()}

      {HTML.h2(`Go Float Data Types`)}

      {HTML.p(`The float data types are used to store positive and negative numbers with a decimal point, 
like 35.3, -2.34, or 3597.34987.`)}

      {HTML.p(`The float data type has two keywords:`)}

      {HTML.table(
        [`Type`, `Size`, `Range`],
        [
          [`[[float32]]`, `32 bits`, `-3.4e+38 to 3.4e+38.`],
          [`[[float64]]`, `64 bits`, `-1.7e+308 to +1.7e+308.`],
        ],
      )}

      {HTML.mlnote([
        `Tip: The default type for float is 
float64.`,
        ` If you 
do not specify a type, the type will be float64.`,
      ])}

      {HTML.hr()}

      {HTML.h2(`The float32 Keyword`)}

      {HTML.p(`This example shows how to declare some variables of type
  [[float32]]:`)}

      {HTML.code("go", code1)}

      {HTML.hr()}

      {HTML.h2(`The float64 Keyword`)}

      {HTML.p(
        `The [[float64]] data type can store a larger set of numbers than float32.`,
      )}

      {HTML.p(
        `This example shows how to declare a variable of type [[float64]]:`,
      )}

      {HTML.code("go", code2)}

      {HTML.hr()}

      {HTML.h2(`Which Float Type to Use?`)}

      {HTML.p(
        `The type of float to choose, depends on the value the variable has to store.`,
      )}

      {HTML.warning(
        `This example will result in an error because 3.4e+39 is out of range for float32:`,
      )}

      {HTML.code("go", code3)}
    </>
  );
}
