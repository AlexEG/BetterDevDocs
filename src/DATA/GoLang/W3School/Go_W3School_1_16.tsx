import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_16() {
  const [
    code1,
    code2,
    code3,
    code4,
    code5,
    code6,
    code7,
    code8,
    code9,
    code10,
  ] = [
    "var array_name = [length]datatype{values} // here length is defined\n\nor\n\nvar array_name = [...]datatype{values} // here length is inferred",
    "array_name := [length]datatype{values} // here length is defined\n\nor\n\narray_name := [...]datatype{values} // here length is inferred",
    'package main\nimport ("fmt")\n\nfunc main() {\n  var arr1 = [3]int{1,2,3}\n  arr2 := [5]int{4,5,6,7,8}\n\n  fmt.Println(arr1)\n  fmt.Println(arr2)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var arr1 = [...]int{1,2,3}\n  arr2 := [...]int{4,5,6,7,8}\n\n  fmt.Println(arr1)\n  fmt.Println(arr2)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}\n  fmt.Print(cars)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  prices := [3]int{10,20,30}\n\n  fmt.Println(prices[0])\n  fmt.Println(prices[2])\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  prices := [3]int{10,20,30}\n\n  prices[2] = 50\n  fmt.Println(prices)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  arr1 := [5]int{} //not initialized\n  arr2 := [5]int{1,2} //partially initialized\n  arr3 := [5]int{1,2,3,4,5} //fully initialized\n\n  fmt.Println(arr1)\n  fmt.Println(arr2)\n  fmt.Println(arr3)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  arr1 := [5]int{1:10,2:40}\n\n  fmt.Println(arr1)\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  arr1 := [4]string{"Volvo", "BMW", "Ford", "Mazda"}\n  arr2 := [...]int{1,2,3,4,5,6}\n\n  fmt.Println(len(arr1))\n  fmt.Println(len(arr2))\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Arrays`)}
      {HTML.h2(`Go Arrays`)}
      {HTML.p(
        `Arrays are used to store multiple values of the same type in a single variable, instead of declaring separate variables for each value.`,
      )}
      {HTML.hr()}
      {HTML.h2(`Declare an Array`)}
      {HTML.p(`In Go, there are two ways to declare an array:`)}
      {HTML.h3(`1. With the [[var]] keyword:`)}
      {HTML.code("go", code1)}
      {HTML.h3(`2. With the [[:=]] sign:`)}
      {HTML.code("go", code2)}
      {HTML.note(
        `Note: The length specifies the number of elements to store in the array. In Go, arrays have a fixed length. The length of the array is either defined by a number or is inferred (means that the compiler decides the length of the array, based on the number of values).`,
      )}
      {HTML.hr()}
      {HTML.h2(`Array Examples`)}
      {HTML.p(
        `This example declares two arrays (arr1 and arr2) with defined lengths:`,
      )}
      {HTML.code("go", code3)}

      {HTML.p(
        `This example declares two arrays (arr1 and arr2) with inferred lengths:`,
      )}
      {HTML.code("go", code4)}

      {HTML.p(`This example declares an array of strings:`)}
      {HTML.code("go", code5)}

      {HTML.hr()}
      {HTML.hr()}
      {HTML.h2(`Access Elements of an Array`)}
      {HTML.p(
        `You can access a specific array element by referring to the index number.`,
      )}
      {HTML.p(
        `In Go, array indexes start at 0. That means that [0] is the first element, [1] is the second element, etc.`,
      )}
      {HTML.p(
        `This example shows how to access the first and third elements in the prices array:`,
      )}
      {HTML.code("go", code6)}

      {HTML.hr()}
      {HTML.h2(`Change Elements of an Array`)}
      {HTML.p(
        `You can also change the value of a specific array element by referring to the index number.`,
      )}
      {HTML.p(
        `This example shows how to change the value of the third element in the prices array:&nbsp;`,
      )}
      {HTML.code("go", code7)}

      {HTML.hr()}
      {HTML.h2(`Array Initialization`)}
      {HTML.p(
        `If an array or one of its elements has not been initialized in the code, it is assigned the default value of its type.`,
      )}
      {HTML.note(
        `Tip: The default value for int is 0, and the default value for string is "".`,
      )}
      {HTML.code("go", code8)}

      {HTML.hr()}
      {HTML.h2(`Initialize Only Specific Elements`)}
      {HTML.p(
        `It is possible to initialize only specific elements in an array.`,
      )}
      {HTML.p(
        `This example initializes only the second and third elements of the array`,
      )}
      {HTML.code("go", code9)}

      {HTML.h3(`Example Explained`)}
      {HTML.p(`The array above has 5 elements.`)}
      {HTML.hr()}
      {HTML.h2(`Find the Length of an Array`)}
      {HTML.p(`The len() function is used to find the length of an array:`)}
      {HTML.code("go", code10)}
    </>
  );
}
