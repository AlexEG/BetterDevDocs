import HTML from "../../../components/HTML/HTML";

export default function JS_W3School_1_1() {
  const code1 = `document.getElementById("demo").innerHTML = "Hello JavaScript";`;
  const code2 = `document.getElementById('demo').innerHTML = 'Hello JavaScript';`;
  const code3 = `document.getElementById("demo").style.fontSize = "35px";`;
  const code4 = `document.getElementById("demo").style.display = "none";`;
  const code5 = `document.getElementById("demo").style.display = "block";`;

  return (
    <>
      {HTML.h1("JavaScript Introduction")}

      {HTML.mlnote([
        "JavaScript is the world's most popular programming language.",
        "JavaScript is the programming language of the Web.",
        "JavaScript is easy to learn.",
        "This tutorial will teach you JavaScript from basic to advanced.",
      ])}

      {HTML.h2("JavaScript Can Change HTML Content")}

      {HTML.p(`One of many JavaScript HTML methods is [[getElementById()]].`)}

      {HTML.p(
        `The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":`,
      )}

      {HTML.code("js", code1)}

      {HTML.note("JavaScript accepts both double and single quotes:")}

      {HTML.code("js", code2)}

      {HTML.hr()}

      {HTML.h2("JavaScript Can Change HTML Attribute Values")}

      {HTML.span(
        "In this example JavaScript changes the value of the [[src]] (source) attribute of an",
      )}
      {HTML.span("[[<img>]]tag:")}

      {HTML.hr()}
      {HTML.h2("JavaScript Can Change HTML Styles (CSS)")}
      {HTML.p(
        "Changing the style of an HTML element, is a variant of changing an HTML attribute:",
      )}

      {HTML.code("js", code3)}
      {HTML.hr()}
      {HTML.h2("JavaScript Can Hide HTML Elements")}
      {HTML.p(
        "Hiding HTML elements can be done by changing the [[display]] style:",
      )}
      {HTML.code("js", code4)}
      {HTML.hr()}
      {HTML.h2("JavaScript Can Show HTML Elements")}
      {HTML.p(
        "Showing hidden HTML elements can also be done by changing the [[display]] style:",
      )}
      {HTML.code("js", code5)}

      {HTML.mlnote([
        "Did You Know?",
        "JavaScript and Java are completely different languages, both in concept and design.",
        "JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.",
        "ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.",
      ])}
    </>
  );
}
