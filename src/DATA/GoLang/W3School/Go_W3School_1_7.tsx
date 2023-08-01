import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_7() {
  const code1 = `myVariableName = "John"`;
  const code2 = `MyVariableName = "John"`;
  const code3 = `my_variable_name = "John"`;
  return (
    <>
      {HTML.h1("Go Variable Naming Rules")}

      {HTML.p(
        "A variable can have a short name (like x and y) or a more descriptive name (age, price, carname, etc.).",
      )}
      {HTML.p("Go variable naming rules:")}
      {HTML.ul([
        "A variable name must start with a letter or an underscore character (_)",
        "A variable name cannot start with a digit",
        "A variable name can only contain alpha-numeric characters and underscores [[(a-z, A-Z, 0-9, and _ )]]",
        "Variable names are case-sensitive (age, Age and AGE are three different variables)",
        "There is no limit on the length of the variable name",
        "A variable name cannot contain spaces",
        "The variable name cannot be any Go keywords",
      ])}
      {HTML.hr()}
      {HTML.h2("Multi-Word Variable Names")}
      {HTML.p(
        "Variable names with more than one word can be difficult to read.",
      )}
      {HTML.p(
        "There are several techniques you can use to make them more readable:",
      )}
      {HTML.h3("Camel Case")}
      {HTML.p("Each word, except the first, starts with a capital letter:")}
      {HTML.code("go", code1)}
      {HTML.hr()}

      {HTML.h3("Pascal  Case")}
      {HTML.p("Each word starts with a capital letter:")}
      {HTML.code("go", code2)}
      {HTML.hr()}

      {HTML.h3("Snake Case")}
      {HTML.p("Each word is separated by an underscore character:")}
      {HTML.code("go", code3)}
    </>
  );
}
