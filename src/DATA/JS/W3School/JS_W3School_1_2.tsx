import HTML from "../../../components/HTML/HTML";

export default function JS_W3School_1_2() {
  const code1 = `// Example
<script>
  document.getElementById("demo").innerHTML = "My First JavaScript";
</script>`;
  const code2 = `// Example
  <!DOCTYPE html>
  <html>
  <head>
  <script>
  function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
  </script>
  </head>
  <body>
  <h2>Demo JavaScript in Head</h2>
  
  <p id="demo">A Paragraph</p>
  <button type="button" onclick="myFunction()">Try it</button>
  
  </body>
  </html>`;

  const code3 = `// External file: myScript.js
  function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }`;

  const code4 = `<script src="myScript.js"></script>`;
  const code5 = `<script src="myScript1.js"></script>
<script src="myScript2.js"></script>`;
  const code6 = `<script src="https://www.w3schools.com/js/myScript.js"></script>`;
  const code7 = `<script src="/js/myScript.js"></script>`;
  const code8 = `<script src="myScript.js"></script>`;

  return (
    <>
      {HTML.h1("JavaScript Where To")}
      {HTML.h2("The <script> Tag")}
      {HTML.span("In HTML, JavaScript code is inserted between [[<script>]]")}
      {HTML.span("and [[</script>]] tags.")}
      {HTML.code("js", code1)}
      {HTML.mlwarning([
        'Old JavaScript examples may use a type attribute: <script type="text/javascript">.',
        "The type attribute is not required. JavaScript is the default scripting language in HTML.",
      ])}
      {HTML.hr()}
      {HTML.h2("JavaScript Functions and Events")}
      {HTML.p(
        'A JavaScript [[function]] is a block of JavaScript code, that can be executed when "called" for.',
      )}
      {HTML.p(
        "For example, a function can be called when an event occurs, like when the user clicks a button.",
      )}
      {HTML.hr()}
      {HTML.h2("JavaScript in <head> or <body>")}
      {HTML.span("In this example, a JavaScript [[function]] ")}
      {HTML.span(" is placed in the [[<head>]] section of an HTML page.")}
      {HTML.p("The function is invoked (called) when a button is clicked:")}
      {HTML.code("xml", code2)}

      {HTML.note(
        "Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.",
      )}
      {HTML.hr()}
      {HTML.h2("External JavaScript")}
      {HTML.p("Scripts can also be placed in external files:")}
      {HTML.code("js", code3)}
      {HTML.p(
        "External scripts are practical when the same code is used in many different web pages.",
      )}
      {HTML.p("JavaScript files have the file extension .js.")}
      {HTML.span(
        "To use an external script, put the name of the script file in the [[src]] ",
      )}
      {HTML.span("(source) attribute of a [[<script>]] tag:")}
      {HTML.code("xml", code4)}
      {HTML.span("You can place an external script reference in [[<head>]] or")}
      {HTML.span("[[<body>]] as you like.")}
      {HTML.p(
        "The script will behave as if it was located exactly where the [[<script>]] tag is located.",
      )}
      {HTML.warning("External scripts cannot contain <script> tags.")}
      {HTML.hr()}
      {HTML.h2("External JavaScript Advantages")}
      {HTML.p("Placing scripts in external files has some advantages:")}
      {HTML.ul([
        "It separates HTML and code",
        "It makes HTML and JavaScript easier to read and maintain",
        "Cached JavaScript files can speed up page loads",
      ])}
      {HTML.p(
        "To add several script files to one page  - use several script tags:",
      )}
      {HTML.code("xml", code5)}
      {HTML.hr()}
      {HTML.h2("External References")}

      {HTML.p("An external script can be referenced in 3 different ways:")}
      {HTML.ul([
        "With a full URL (a full web address)",
        "With a file path (like /js/)",
        "Without any path",
      ])}
      {HTML.p("This example uses a full URL to link to myScript.js:")}
      {HTML.code("xml", code6)}
      {HTML.p("This example uses a file path to link to myScript.js:")}
      {HTML.code("xml", code7)}
      {HTML.p("This example uses no path to link to myScript.js:")}
      {HTML.code("xml", code8)}
      {HTML.note(
        "You can read more about file paths in the chapter HTML File Paths.",
      )}
    </>
  );
}
