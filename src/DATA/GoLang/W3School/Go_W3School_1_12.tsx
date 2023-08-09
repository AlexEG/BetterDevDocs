import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_12() {
  const [code1] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var b1 bool = true // typed declaration with initial value\n  var b2 = true // untyped declaration with initial value\n  var b3 bool // typed declaration without initial value\n  b4 := true // untyped declaration with initial value\n\n  fmt.Println(b1) // Returns true\n  fmt.Println(b2) // Returns true\n  fmt.Println(b3) // Returns false\n  fmt.Println(b4) // Returns true\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Boolean Data Type`)}

      {HTML.hr()}

      {HTML.h2(`Boolean Data Type`)}

      {HTML.p(
        `A boolean data type is declared with the [[bool]] keyword and can only take the values true or false.`,
      )}

      {HTML.p(`The default value of a boolean data type is [[false]].`)}

      {HTML.p(
        `This example shows some different ways to declare Boolean variables:`,
      )}

      {HTML.code("go", code1)}

      {HTML.p(`Note: Boolean values are mostly used for conditional testing which you will learn 
  more about in the <a href="go_conditions.php">Go Conditions</a> chapter.`)}
    </>
  );
}
