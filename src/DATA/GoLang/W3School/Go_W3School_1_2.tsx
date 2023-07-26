import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_2() {
  const code1 = `go version`;
  return (
    <>
      {HTML.h1("Go Getting Started")}
      {HTML.h2("Go Get Started")}
      {HTML.p("To start using Go, you need two things:")}
      {HTML.ul([
        "A text editor, like VS Code, to write Go code",
        "A compiler, like GCC, to translate the Go code into a language that the computer will understand",
      ])}
      {HTML.p(
        "There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).",
      )}
      {HTML.hr()}
      {HTML.h2("Go Install")}
      {HTML.span("You can find the relevant installation files at ")}
      {HTML.a("https://golang.org/dl/", "https://golang.org/dl/")}
      {HTML.p("")}
      {HTML.p(
        "Follow the instructions related to your operating system. To check if Go was installed successfully, you can run the following command in a terminal window:",
      )}
      {HTML.code("bash", code1)}
      {HTML.p("Which should show the version of your Go installation.")}
      {HTML.hr()}
      {HTML.h2("Go Install IDE")}

      {HTML.p(
        "An IDE (Integrated Development Environment) is used to edit AND compile the code.",
      )}
      {HTML.p(
        "Popular IDE's include Visual Studio Code (VS Code), Vim, Eclipse, and Notepad. These are all free, and they can be used to both edit and debug Go code.",
      )}
      {HTML.note(
        "Web-based IDE's can work as well, but functionality is limited.",
      )}
      {HTML.p(
        "We will use VS Code in our tutorial, which we believe is a good place to start",
      )}
      {HTML.span("You can find the latest version of VS Code at ")}
      {HTML.a(
        "https://code.visualstudio.com/",
        "https://code.visualstudio.com/",
      )}
      {HTML.hr()}

      {HTML.h2("Go Quickstart")}

      {HTML.p("Let's create our first Go program.")}
      {HTML.ul([
        "Launch the VS Code editor",
        "Open the extension manager or alternatively, press [[Ctrl + Shift + x]]",
        'In the search box, type "go" and hit enter',
        "Find the Go extension by the GO team at Google and install the extension",
        "After the installation is complete, open the command palette by pressing [[Ctrl + Shift + p]]",
        "Run the [[Go: Install/Update Tools]] command",
        "Select all the provided tools and click OK",
      ])}
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
