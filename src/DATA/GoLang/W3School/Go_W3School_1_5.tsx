import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_5() {
  const code1 = `var variablename type = value`;
  const code2 = `variablename := value`;
  const code3 = `package main
  import ("fmt")
  
  func main() {
    var student1 string = "John" //type is string
    var student2 = "Jane" //type is inferred
    x := 2 //type is inferred
  
    fmt.Println(student1)
    fmt.Println(student2)
    fmt.Println(x)
  }`;
  const code4 = `package main
  import ("fmt")
  
  func main() {
    var a string
    var b int
    var c bool
  
    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
  }`;
  const code5 = `package main
  import ("fmt")
  
  func main() {
    var student1 string
    student1 = "John"
    fmt.Println(student1)
  }`;
  return (
    <>
      {HTML.h1("Go Variables")}{" "}
      {HTML.p("Variables are containers for storing data values.")}
      {HTML.hr()}
      {HTML.h2("Go Variable Types")}
      {HTML.p("In Go, there are different types of variables, for example:")}
      {HTML.ul([
        "[[int]]- stores integers (whole numbers), such as 123 or -123",
        "[[float32]]- stores floating point numbers, with decimals, such as 19.99 or -19.99",
        '[[string]] - stores text, such as "Hello World". String values are surrounded by double quotes',
        "[[bool]]- stores values with two states: true or false",
      ])}
      {HTML.p(
        "More about different variable types, will be explained in the Go Data Types chapter.",
      )}
      {HTML.hr()}
      {HTML.h2("Declaring (Creating) Variables")}
      {HTML.p("In Go, there are two ways to declare a variable:")}
      {HTML.p("1. With the [[var]] keyword:")}
      {HTML.p("se the var keyword, followed by variable name and type:")}
      {HTML.code("go", code1)}
      {HTML.note(
        "You always have to specify either (type) or (value) (or both).",
      )}
      {HTML.p("2. With the [[:=]] sign:")}
      {HTML.p("Use the [[:=]] sign, followed by the variable value:")}
      {HTML.code("go", code2)}
      {HTML.note(
        "In this case, the type of the variable is inferred from the value (means that the compiler decides the type of the variable, based on the value).",
      )}
      {HTML.warning(
        "It is not possible to declare a variable using :=, without assigning a value to it.",
      )}
      {HTML.hr()}
      {HTML.h2("Variable Declaration With Initial Value")}
      {HTML.p(
        "If the value of a variable is known from the start, you can declare the variable and assign a value to it on one line:",
      )}
      {HTML.code("go", code3)}
      {HTML.note(
        "The variable types of (student2) and (x) is inferred from their values.",
      )}
      {HTML.hr()}
      {HTML.h2("Variable Declaration Without Initial Value")}
      {HTML.p(
        "In Go, all variables are initialized. So, if you declare a variable without an initial value, its value will be set to the default value of its type:",
      )}
      {HTML.code("go", code4)}
      {HTML.h3("Example explained")}
      {HTML.p("In this example there are 3 variables:")}
      {HTML.ul(["[[a]]", "[[b]]", "[[c]]"])}
      {HTML.p(
        "These variables are declared but they have not been assigned initial values.",
      )}
      {HTML.p(
        "By running the code, we can see that they already have the default values of their respective types:",
      )}
      {HTML.ul(['[[a = ""]]', "[[b = 0]]", "[[c = false]]"])}
      {HTML.hr()}
      {HTML.h2("Value Assignment After Declaration")}
      {HTML.p(
        "It is possible to assign a value to a variable after it is declared. This is helpful for cases the value is not initially known.",
      )}
      {HTML.code("go", code5)}
      {HTML.note(
        'It is not possible to declare a variable using ":=" without assigning a value to it.',
      )}
      {HTML.hr()}
      {HTML.h2("Difference Between var and :=")}
      {HTML.span("There are some small differences between the var")}
      {HTML.span("var [[:=]] :")}
      {HTML.table(
        ["var", ":="],
        [
          [
            "Can be used inside and outside of functions",
            "Can only be used inside functions",
          ],
          [
            "Variable declaration and value assignment can be done separately",
            "Variable declaration and value assignment cannot be done separately (must be done in the same line)",
          ],
        ],
      )}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
      {HTML.p("")}
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
