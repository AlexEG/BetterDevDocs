import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_11() {
  const [code1] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var a bool = true     // Boolean\n  var b int = 5         // Integer\n  var c float32 = 3.14  // Floating point number\n  var d string = "Hi!"  // String\n\n  fmt.Println("Boolean: ", a)\n  fmt.Println("Integer: ", b)\n  fmt.Println("Float:   ", c)\n  fmt.Println("String:  ", d)\n}\n',
  ];

  return (
    <>
      {HTML.h1(`Go Data Types`)}

      {HTML.hr()}

      {HTML.h2(`Go Data Types`)}

      {HTML.p(
        `Data type is an important concept in programming. Data type specifies the size and type of variable values.`,
      )}

      {HTML.p(
        `Go is statically typed, meaning that once a variable type is defined, it can only store data of that type.`,
      )}

      {HTML.p(`Go has three basic data types:`)}

      {HTML.ul([
        `bool: represents a boolean value and is either true or false`,
        `Numeric: represents integer types, floating point values, 
  and complex types`,
        `string: represents a string value`,
      ])}

      {HTML.p(`This example shows some of the different data types in Go:`)}

      {HTML.code("go", code1)}
    </>
  );
}
