import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_1() {
  return (
    <>
      {HTML.h1("Go Introduction")}
      {HTML.h2("What is Go?")}
      {HTML.ul([
        "Go is a cross-platform, open source programming language",
        "Go can be used to create high-performance applications",
        "Go is a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language",
        "Go was developed at Google by Robert Griesemer, Rob Pike, and Ken Thompson in 2007",
        "Go's syntax is similar to C++",
      ])}
      {HTML.hr()}
      {HTML.h2("What is Go Used For?")}
      {HTML.ul([
        "Web development (server-side)",
        "Developing network-based programs",
        "Developing cross-platform enterprise applications",
        "Cloud-native development",
      ])}
      {HTML.hr()}
      {HTML.h2("Why Use Go?")}
      {HTML.ul([
        "Go is fun and easy to learn",
        "Go has fast run time and compilation time",
        "Go supports concurrency",
        "Go has memory management",
        "Go works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
      ])}
      {HTML.mlnote([
        "Compilation time refers to translating the code into an executable program.",
        "Concurrency is performing multiple things out-of-order, or at the same time, without affecting the final outcome.",
        "Statically typed means that the variable types are known at compile time.",
      ])}
    </>
  );
}
