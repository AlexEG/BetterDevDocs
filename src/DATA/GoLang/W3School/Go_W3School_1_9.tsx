import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_9() {
  const code1 = `package main
  import ("fmt")
  
  func main() {
    var a, b, c, d int = 1, 3, 5, 7
  
    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
    fmt.Println(d)
  }`;
  const code2 = `package main
  import ("fmt")
  
  func main() {
    var a, b = 6, "Hello"
    c, d := 7, "World!"
  
    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
    fmt.Println(d)
  }`;
  const code3 = `package main
  import ("fmt")
  
  func main() {
     var (
       a int
       b int = 1
       c string = "hello"
     )
  
    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
  }`;
  return (
    <>
      {HTML.h1("Go Multiple Variables Declaration")}

      {HTML.p(
        " In Go, it is possible to declare multiple variables in the same line.",
      )}
      {HTML.code("go", code1)}

      {HTML.p(
        " This example shows how to declare multiple variables in the same line:",
      )}

      {HTML.note(
        " If you use the type keyword, it is only possible to declare one type of variable per line.",
      )}

      {HTML.p(
        " If the type keyword is not specified, you can declare different types of variables in the same line:",
      )}
      {HTML.code("go", code2)}

      {HTML.hr()}

      {HTML.h2("Go Variable Declaration in a Block")}

      {HTML.p(
        " Multiple variable declarations can also be grouped together into a block for greater readability:",
      )}
      {HTML.code("go", code3)}
    </>
  );
}
