import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_4() {
  const code1 = `// Example
// This is a comment
package main
import ("fmt")

func main() {
  // This is a comment
  fmt.Println("Hello World!")
}`;

  const code2 = `// Example
package main
import ("fmt")

func main() {
  fmt.Println("Hello World!") // This is a comment
}
`;
  const code3 = `// Example
package main
import ("fmt")

func main() {
  /* The code below will print Hello World
  to the screen, and it is amazing */
  fmt.Println("Hello World!")
}`;
  const code4 = `// Example
package main
import ("fmt")

func main() {
  fmt.Println("Hello World!")
  // fmt.Println("This line does not execute")
}
`;
  return (
    <>
      {HTML.h1("Go Comments")}{" "}
      {HTML.p("A comment is a text that is ignored upon execution.")}
      {HTML.p(
        "Comments can be used to explain the code, and to make it more readable.",
      )}
      {HTML.p(
        "Comments can be used to explain the code, and to make it more readable.",
      )}
      {HTML.p("Go supports single-line or multi-line comments.")}
      {HTML.hr()}
      {HTML.h2("Go Single-line Comments")}
      {HTML.p("Single-line comments start with two forward slashes ([[//]]).")}
      {HTML.p(
        "Any text between [[//]] and the end of the line is ignored by the compiler (will not be executed).",
      )}
      {HTML.code("go", code1)}
      {HTML.p(
        "The following example uses a single-line comment at the end of a code line:",
      )}
      {HTML.code("go", code2)}
      {HTML.hr()}
      {HTML.h2("Go Multi-line Comments")}
      {HTML.span("Multi-line comments start with [[/*]] and ends with")}
      {HTML.span("[[*/]].")}
      {HTML.span("Any text between [[/*]] and")}
      {HTML.span("[[*/]] will be ignored by the compiler:")}
      {HTML.code("go", code3)}
      {HTML.note(
        "It is up to you which you want to use. Normally, we use // for short comments, and /* */ for longer comments.",
      )}
      {HTML.hr()}
      {HTML.h2("Comment to Prevent Code Execution")}
      {HTML.p(
        "You can also use comments to prevent the code from being executed.",
      )}
      {HTML.p(
        "The commented code can be saved for later reference and troubleshooting.",
      )}
      {HTML.code("go", code4)}
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
