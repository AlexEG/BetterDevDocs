import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_8() {
  const code1 = `const CONSTNAME type = value`;
  const code2 = `package main
  import ("fmt")
  
  const PI = 3.14
  
  func main() {
    fmt.Println(PI)
  }`;
  const code3 = `package main
  import ("fmt")
  
  const A int = 1
  
  func main() {
    fmt.Println(A)
  }`;
  const code4 = `package main
  import ("fmt")
  
  const A = 1
  
  func main() {
    fmt.Println(A)
  }`;
  const code5 = `package main
  import ("fmt")
  
  func main() {
    const A = 1
    A = 2
    fmt.Println(A)
  } 
  // Result:
  /* ./prog.go:8:7: cannot assign to A */`;
  const code6 = `package main
  import ("fmt")
  
  const (
    A int = 1
    B = 3.14
    C = "Hi!"
  )
  
  func main() {
    fmt.Println(A)
    fmt.Println(B)
    fmt.Println(C)
  }`;
  return (
    <>
      {HTML.h1("Go Constants")}

      {HTML.p(
        "If a variable should have a fixed value that cannot be changed, you can use the [[const]] keyword.",
      )}
      {HTML.p(
        'The [[const]] keyword declares the variable as "constant", which means that it is unchangeable and read-only.',
      )}
      {HTML.code("go", code1)}
      {HTML.warning(
        "The value of a constant must be assigned when you declare it.",
      )}
      {HTML.hr()}
      {HTML.h2("Declaring a Constant")}
      {HTML.p("Here is an example of declaring a constant in Go:")}
      {HTML.code("go", code2)}
      {HTML.hr()}
      {HTML.h2("Constant Rules")}

      {HTML.ul([
        "Constant names follow the same naming rules as variables",
        "Constant names are usually written in uppercase letters (for easy identification and differentiation from variables)",
        "Constants can be declared both inside and outside of a function",
      ])}
      {HTML.hr()}
      {HTML.h2("Constant Types")}
      {HTML.p("There are two types of constants:")}
      {HTML.ul(["Typed constants", "Untyped constants"])}
      {HTML.hr()}
      {HTML.h2("Typed Constants")}
      {HTML.p("Typed constants are declared with a defined type:")}
      {HTML.code("go", code3)}
      {HTML.hr()}
      {HTML.h2("Untyped Constants")}

      {HTML.p("Untyped constants are declared without a type:")}
      {HTML.code("go", code4)}
      {HTML.note(
        "In this case, the type of the constant is inferred from the value (means the compiler decides the type of the constant, based on the value).",
      )}
      {HTML.hr()}
      {HTML.h2("Constants: Unchangeable and Read-only")}
      {HTML.p(
        "When a constant is declared, it is not possible to change the value later:",
      )}
      {HTML.code("go", code5)}
      {HTML.hr()}
      {HTML.h2("Multiple Constants Declaration")}
      {HTML.p(
        "Multiple constants can be grouped together into a block for readability:",
      )}
      {HTML.code("go", code6)}
    </>
  );
}
