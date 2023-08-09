/*


//* {HTML.p("")}
Object.values(document.querySelector("#main").querySelectorAll("p")).map(p => `{HTML.p("${p.innerText}")}`).join("")

//* {HTML.h2("")}
Object.values(document.querySelector("#main").querySelectorAll("h2")).map(h2 => `{HTML.h2("${h2.innerText}")}`).join("")

//* {HTML.ul(["", ""])}
Object.values(document.querySelector("#main").querySelectorAll("ul")).map(ul =>  `{HTML.ul([${ul.innerText.split("\n").map(li => `'${li}'`)}])}`).join("")


//* const code1,code2;
// w3-example
[`const [${Object.values(document.querySelector("#main").querySelectorAll("div.w3-example")).map((code,i) => `code${i+1}`)}] =`,
Object.values(document.querySelector("#main").querySelectorAll("div.w3-example")).map((code) => code.querySelector("div").innerText)]

// w3-code
[`const [${Object.values(document.querySelector("#main").querySelectorAll("div.w3-code")).map((code,i) => `code${i+1}`)}] =`,
Object.values(document.querySelector("#main").querySelectorAll("div.w3-code")).map((code) => code.querySelector("span").innerText)]

*/
