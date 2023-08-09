import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_9() {
  const [code1, code2, code3, code4, code5, code6, code7] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i,j string = "Hello","World"\n\n  fmt.Print(i)\n  fmt.Print(j)\n}\n// HelloWorld',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i,j string = "Hello","World"\n\n  fmt.Print(i, "\\n")\n  fmt.Print(j, "\\n")\n}\n/*\nHello\nWorld\n*/',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i,j string = "Hello","World"\n\n  fmt.Print(i, "\\n",j)\n}\n/*\nHello\nWorld\n*/',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i,j string = "Hello","World"\n\n  fmt.Print(i, " ", j)\n}\n // Hello World',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i,j = 10,20\n\n  fmt.Print(i,j)\n}\n // 10 20',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i,j string = "Hello","World"\n\n  fmt.Println(i,j)\n}\n // Hello World',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i string = "Hello"\n  var j int = 15\n\n  fmt.Printf("i has value: %v and type: %T\\n", i, i)\n  fmt.Printf("j has value: %v and type: %T", j, j)\n}\n// i has value: Hello and type: string\n// j has value: 15 and type: int',
  ];

  return (
    <>
      {HTML.h1("Go Output Functions")}

      {HTML.p("Go has three functions to output text:")}

      {HTML.ul(["[[Print()]]", "[[Println()]]", "[[Printf()]]"])}

      {HTML.hr()}

      {HTML.h2("The Print() Function")}

      {HTML.p(
        "The [[Print()]] function prints its arguments with their default format.",
      )}
      {HTML.span("Print the values of [[i]] and")}
      {HTML.span(" [[j]]:")}
      {HTML.code("go", code1)}

      {HTML.p(
        "If we want to print the arguments in new lines, we need to use [[\\n]].",
      )}
      {HTML.code("go", code2)}

      {HTML.note("Tip: \\n creates new lines.")}

      {HTML.p(
        "It is also possible to only use one[[Print()]] for printing multiple variables.",
      )}
      {HTML.code("go", code3)}

      {HTML.p(
        "If we want to add a space between string arguments, we need to use :",
      )}
      {HTML.code("go", code4)}

      {HTML.p(
        "[[Print()]] inserts a space between the arguments if neither are strings:",
      )}
      {HTML.code("go", code5)}

      {HTML.hr()}
      {HTML.h2("The Println() Function")}
      {HTML.span("The [[Println()]] function is similar to :")}
      {HTML.span(
        "[[Print()]] with the difference that a whitespace is added between the arguments, and a newline is added at the end:",
      )}
      {HTML.code("go", code6)}

      {HTML.hr()}
      {HTML.h2("The Printf() Function")}

      {HTML.p(
        "The Printf() function first formats its argument based on the given formatting verb and then prints them.",
      )}
      {HTML.p("Here we will use two formatting verbs:")}

      {HTML.ul([
        "%v is used to print the value of the arguments",
        "%T is used to print the type of the arguments",
      ])}
      {HTML.code("go", code7)}

      {HTML.note(
        "Tip: Look at all the formatting verbs in the Go Formatting Verbs chapter.",
      )}
    </>
  );
}
