import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_3() {
  const code1 = `package main
import ("fmt")
  
func main() {
  fmt.Println("Hello World!")
}`;
  const code2 = `package main
import ("fmt")
  
func main() 
{
  fmt.Println("Hello World!")
}`;
  const code3 = `package main; import ("fmt"); func main() { fmt.Println("Hello World!");}`;

  return (
    <>
      {HTML.h1("Go Syntax")}
      {HTML.p("")}
      {HTML.p("A Go file consists of the following parts:")}
      {HTML.ul([
        "Package declaration",
        "Import packages",
        "Functions",
        "Statements and expressions",
      ])}
      {HTML.p("Look at the following code, to understand it better:")}
      {HTML.code("go", code1)}
      {HTML.h2("Example explained")}
      {HTML.span("Line 1: In Go, every program is part of a [[package]].")}
      {HTML.span(
        " We define this using the package keyword. In this example, the program belongs to the [[main]] package.",
      )}
      {HTML.p("")}
      {HTML.span(
        'Line 2: [[import ("fmt")]] lets us import files included in the',
      )}
      {HTML.span(" [[fmt]] package.")}
      {HTML.p(
        "Line 3: A blank line. Go ignores white space. Having white spaces in code makes it more readable.",
      )}

      {HTML.span(
        "Line 4: func [[main() {}]] is a function. Any code inside its curly brackets",
      )}
      {HTML.span(" [[{}]] will be executed.")}

      {HTML.p("")}
      {HTML.span(
        "Line 5: [[fmt.Println()]] is a function made available from the",
      )}
      {HTML.span(
        '[[fmt]] package. It is used to output/print text. In our example it will output "Hello World!".',
      )}
      {HTML.note(" In Go, any executable code belongs to the main package.")}
      {HTML.hr()}
      {HTML.h2("Go Statements")}
      {HTML.p('[[fmt.Println("Hello World!")]] is a statement.')}

      {HTML.p(
        'In Go, statements are separated by ending a line (hitting the Enter key) or by a semicolon "[[;]]".',
      )}
      {HTML.p(
        'Hitting the Enter key adds "[[;]]" to the end of the line implicitly (does not show up in the source code).',
      )}
      {HTML.p(
        "The left curly bracket [[{]] cannot come at the start of a line.",
      )}
      {HTML.p("Run the following code and see what happens:")}
      {HTML.code("go", code2)}

      {HTML.hr()}
      {HTML.h2("Go Compact Code")}
      {HTML.p(
        "You can write more compact code, like shown below (this is not recommended because it makes the code more difficult to read):",
      )}
      {HTML.code("go", code3)}

      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
    </>
  );
}
