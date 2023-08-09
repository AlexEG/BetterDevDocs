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


function getContent() {
Object.values(document.querySelector("#main").querySelectorAll("p")).map(p => p.innerHTML=p.innerText)
Object.values(document.querySelector("#main").querySelectorAll("ul")).map(ul => ul.innerHTML = `${ul.innerText.split("\n").map(li => `<li>${li}</li>`)}`).join("")
  // --------
  let content = document.querySelector("#main").innerHTML

  content = content.replaceAll("<hr>","\n{HTML.hr()}\n")
  content = content.replaceAll("<h1>","\n{HTML.h1(`")
  content = content.replaceAll("<h2>","\n{HTML.h2(`")
  content = content.replaceAll("<h4>","\n{HTML.h3(`")
  content = content.replaceAll("<p>","\n{HTML.p(`")
  content = content.replaceAll("<ul>","\n{HTML.ul([")
  content = content.replaceAll("<li>","`")
  content = content.replaceAll("<strong>","")
  
  content = content.replaceAll('<div class="w3-code',"\n\n{HTML.code('go', code1)}\n\n")
  
  content = content.replaceAll('<table class="ws-table-all notranslate">','{HTML.table(["", ""],')
  
  content = content.replaceAll("<tr>","[")
  content = content.replaceAll("<td>","`")
  content = content.replaceAll("<th>","`")
  content = content.replaceAll("<tbody>","[")

  content = content.replaceAll('<code class="w3-codespan">',"[[")
// ----------

  content = content.replaceAll("</h1>","`)}\n")
  content = content.replaceAll("</h2>","`)}\n")
  content = content.replaceAll("</h4>","`)}\n")
  content = content.replaceAll("</p>","`)}\n")
  content = content.replaceAll("</ul>","])}\n")
  content = content.replaceAll("</li>","`,")
  content = content.replaceAll("</table>",")}\n")
  content = content.replaceAll("</tbody>","]")
  content = content.replaceAll("</tr>","],")
  content = content.replaceAll("</td>","`,")
  content = content.replaceAll("</th>","`,")
  content = content.replaceAll("</code>","]]")
  content = content.replaceAll("</strong>","")
  content = content.replaceAll("{HTML.p(`Result:`)}","")
  content = content.replaceAll(",,",",")

  content = content.match(/{HTML.*}/gi).join("")

  let codeLength = content.match(/{HTML.code\(./gi).length
  
  for(let i = 0; i <= codeLength; i++){
    content = content.replace("code1",`code${i}`)
  }

  return content
}
getContent()






*/
