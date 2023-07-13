import SettingsBtn from "../settings/SettingsBtn";
import Img from "./media/Img";
import ImgsGroup from "./media/ImgsGroup";
import Paragraph from "./Paragraph";

import img1 from "../../assets/test images/Screenshot_1.png";
// import img2 from "../../assets/test images/Screenshot_14.png";
import img3 from "../../assets/test images/Screenshot_15.png";
import img4 from "../../assets/test images/Screenshot_16.png";
// import img5 from "../../assets/test images/Screenshot_17.png";
// import img6 from "../../assets/test images/Screenshot_18.png";
import img7 from "../../assets/test images/Screenshot_19.png";
// import img8 from "../../assets/test images/Screenshot_3.png";

import CodeBlock from "../CodeBlock";

import { useState } from "react";
function Post() {
  const [postState, setPostState] = useState({
    DarkMode: false,
    isExpand: false,
  });

  const postWidth = postState.isExpand ? "max-w-7xl" : "max-w-3xl";
  const PostDarkMode = postState.DarkMode
    ? "bg-black text-neutral-200 selection:bg-neutral-200 selection:text-neutral-950"
    : "bg-neutral-200 selection:bg-neutral-600 selection:text-neutral-200";

  const code1 = `
    function name(params:type) {
      
    }
    function Highlighter({ content, language }: HighlighterProps): JSX.Element {
      const highlighted = language
        ? hljs.highlight(language, content)
        : hljs.highlightAuto(content);
    
      return (
        <pre className="hljs">
          <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
        </pre>
      );
    }
      `;

  const code2 = `
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.tsx";
    // import "./index.css";
    import "./github-dark.min.css";
    
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
        <Img src={img7} />
      </React.StrictMode>
    );
    `;

  const code3 = `
  package main

  import (
    "fmt"
    "testing"
  )
  
  // References:
  // https://golang.org/ref/spec#Passing_arguments_to_..._parameters
  func AddNumbers(s ...int) int {
    sum := 0
    for _, x := range s {
      sum += x
    }
    return sum
  }
  
  func TestAddNumbers(t *testing.T) {
    tests := []struct {
      name string
      s    []int
      want int
    }{
      {
        name: "nil",
        s:    nil,
        want: 0,
      },
      {
        name: "single number",
        s:    []int{1},
        want: 1,
      },
      {
        name: "multiple numbers",
        s:    []int{4, 3, 2, 1, 0},
        want: 10,
      },
    }
    for _, tt := range tests {
      t.Run(tt.name, func(t *testing.T) {
        if got := AddNumbers(tt.s...); got != tt.want {
          t.Errorf("AddNumbers(%v) = %v, want %v", tt.s, got, tt.want)
        }
      })
    }
  }
  
  func ExampleAddNumbers() {
    fmt.Println(AddNumbers(4, 3, 2, 1, 0))
    fmt.Println(AddNumbers([]int{4, 3, 2, 1, 0}...))
    // Output:
    // 10
    // 10
  }
    `;

  const code4 = `
    body::-webkit-scrollbar {
      width: 7px;
    }
    
    body::-webkit-scrollbar-track {
      background: #262626;
    }
    
    body::-webkit-scrollbar-thumb {
      background: rgb(10, 10, 10);
      border-radius: 5px;
    }
    
    body::-webkit-scrollbar-thumb:hover {
      background: rgb(23, 23, 23);
    }
    `;

  return (
    <main className="pl-64 min-h-screen pt-12 pr-64">
      <article
        className={`w-full min-h-screen rounded-lg p-6 mx-auto  transition-all duration-500 delay-75 ${postWidth} ${PostDarkMode}`}
      >
        <h1 className="text-center py-3 font-bold text-neutral-50 brightness-110">
          Post Title
        </h1>
        {/* /////////// */}

        <Img src={img7} />

        <ImgsGroup imgsArr={[img1, img4, img3]} />
        <Paragraph
          content={[
            "helllllllllp",
            "i mean hello not help",
            "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa sunt magni at nemo alias ad deserunt quae nisi, modi aliquam excepturi neque beatae voluptatem magnam necessitatibus expedita repellendus pariatur voluptas sed provident repudiandae accusantium, facilis quod? Nam sunt corporis molestias quaerat. Aut labore sint totam ipsum blanditiis velit dolorum.",
          ]}
        />
        <CodeBlock language="jsx" content={code1} />
        <br />
        <CodeBlock language="jsx" content={code2} />
        <br />
        <CodeBlock language="go" content={code3} />
        <br />
        <CodeBlock language="css" content={code4} />

        <ImgsGroup
          imgsArr={[
            "https://fakeimg.pl/600x200",
            "https://fakeimg.pl/200x200",
            "https://fakeimg.pl/200x200",
          ]}
        />
        {/* /////////// */}
        <SettingsBtn setPostState={setPostState} />
      </article>
    </main>
  );
}

export default Post;
