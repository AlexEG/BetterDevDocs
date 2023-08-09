import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_10() {
  const [code1, code2, code3, code4, code5] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i = 15.5\n  var txt = "Hello World!"\n\n  fmt.Printf("%v\\n", i)\n  fmt.Printf("%#v\\n", i)\n  fmt.Printf("%v%%\\n", i)\n  fmt.Printf("%T\\n", i)\n\n  fmt.Printf("%v\\n", txt)\n  fmt.Printf("%#v\\n", txt)\n  fmt.Printf("%T\\n", txt)\n}\n/* Result:\n15.5\n15.5\n15.5%\nfloat64\nHello World!\n"Hello World!"\nstring\n*/',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i = 15\n \n  fmt.Printf("%b\\n", i)\n  fmt.Printf("%d\\n", i)\n  fmt.Printf("%+d\\n", i)\n  fmt.Printf("%o\\n", i)\n  fmt.Printf("%O\\n", i)\n  fmt.Printf("%x\\n", i)\n  fmt.Printf("%X\\n", i)\n  fmt.Printf("%#x\\n", i)\n  fmt.Printf("%4d\\n", i)\n  fmt.Printf("%-4d\\n", i)\n  fmt.Printf("%04d\\n", i)\n}\n/* Result:\n1111\n15\n+15\n17\n0o17\nf\nF\n0xf\n&nbsp; 15\n15 \n0015\n*/',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var txt = "Hello"\n \n  fmt.Printf("%s\\n", txt)\n  fmt.Printf("%q\\n", txt)\n  fmt.Printf("%8s\\n", txt)\n  fmt.Printf("%-8s\\n", txt)\n  fmt.Printf("%x\\n", txt)\n  fmt.Printf("% x\\n", txt)\n}\n/* Result:\nHello\n"Hello"\n&nbsp;&nbsp; Hello\nHello \n48656c6c6f\n48 65 6c 6c 6f\n*/',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i = true\n  var j = false\n\n  fmt.Printf("%t\\n", i)\n  fmt.Printf("%t\\n", j)\n}\n/* Result:\ntrue\nfalse\n*/',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var i = 3.141\n\n  fmt.Printf("%e\\n", i)\n  fmt.Printf("%f\\n", i)\n  fmt.Printf("%.2f\\n", i)\n  fmt.Printf("%6.2f\\n", i)\n  fmt.Printf("%g\\n", i)\n}\n/* Result:\n3.141000e+00\n3.141000\n3.14\n&nbsp; 3.14\n3.141\n*/',
  ];

  return (
    <>
      {HTML.h1(`Go Formatting Verbs`)}

      {HTML.h2(`Formatting Verbs for Printf()`)}
      {HTML.p(
        `Go offers several formatting verbs that can be used with the [[Printf()]] function.`,
      )}
      {HTML.hr()}

      {HTML.h2(`General Formatting Verbs `)}
      {HTML.p(`The following verbs can be used with all data types:`)}
      {HTML.table(
        [`Verb`, `Description`],
        [
          [`%v`, `Prints the value in the default format`],
          [`%#v`, `Prints the value in Go-syntax format`],
          [`%T`, `Prints the type of the value`],
          [`%%`, `Prints the % sign`],
        ],
      )}

      {HTML.code("go", code1)}

      {HTML.hr()}

      {HTML.h2(`Integer Formatting Verbs`)}
      {HTML.p(`The following verbs can be used with the integer data type:`)}
      {HTML.table(
        [`Verb`, `Description`],
        [
          [`%b`, `Base 2`],
          [`%d`, `Base 10`],
          [`%+d`, `Base 10 and always show sign`],
          [`%o`, `Base 8`],
          [`%O`, `Base 8, with leading 0o`],
          [`%x`, `Base 16, lowercase`],
          [`%X`, `Base 16, uppercase`],
          [`%#x`, `Base 16, with leading 0x`],
          [`%4d`, `Pad with spaces (width 4, right justified)`],
          [`%-4d`, `Pad with spaces (width 4, left justified)`],
          [`%04d`, `Pad with zeroes (width 4`],
        ],
      )}

      {HTML.code("go", code2)}

      {HTML.hr()}
      {HTML.hr()}
      {HTML.h2(`String Formatting Verbs`)}
      {HTML.p(`The following verbs can be used with the string data type:`)}
      {HTML.table(
        [`Verb`, `Description`],
        [
          [`%s`, `Prints the value as plain string`],
          [`%q`, `Prints the value as a double-quoted string`],
          [
            `%8s`,
            `Prints the value as plain string (width 8, right justified)`,
          ],
          [
            `%-8s`,
            `Prints the value as plain string (width 8, left justified)`,
          ],
          [`%x`, `Prints the value as hex dump of byte values`],
          [`% x`, `Prints the value as hex dump with spaces`],
        ],
      )}

      {HTML.code("go", code3)}

      {HTML.hr()}

      {HTML.h2(`Boolean Formatting Verbs `)}
      {HTML.p(`The following verb can be used with the boolean data type:`)}
      {HTML.table(
        [`Verb`, `Description`],
        [
          [
            `%t`,
            `Value of the boolean operator in true or false format (same as using %v)`,
          ],
        ],
      )}

      {HTML.code("go", code4)}

      {HTML.hr()}

      {HTML.h2(`Float Formatting Verbs`)}
      {HTML.p(`The following verbs can be used with the float data type:`)}
      {HTML.table(
        [`Verb`, `Description`],
        [
          [`%e`, `Scientific notation with 'e' as exponent`],
          [`%f`, `Decimal point, no exponent`],
          [`%.2f`, `Default width, precision 2`],
          [`%6.2f`, `Width 6, precision 2`],
          [`%g`, `Exponent as needed, only necessary digits`],
        ],
      )}

      {HTML.code("go", code5)}
    </>
  );
}
