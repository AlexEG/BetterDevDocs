import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_15() {
  const [code1] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var txt1 string = "Hello!"\n  var txt2 string\n  txt3 := "World 1"\n\n  fmt.Printf("Type: %T, value: %v\\n", txt1, txt1)\n  fmt.Printf("Type: %T, value: %v\\n", txt2, txt2)\n  fmt.Printf("Type: %T, value: %v\\n", txt3, txt3)\n}\n/* Result\nType: string, value: Hello!\nType: string, value:\nType: string, value:World 1\n*/',
  ];

  return (
    <>
      {HTML.h1(`Go String Data Type`)}
      {HTML.h2(`String Data Type`)}
      {HTML.p(
        `The string data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:`,
      )}
      {HTML.code("go", code1)}
    </>
  );
}
