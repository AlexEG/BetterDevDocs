import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_17() {
  const [code1, code2, code3, code4, code5, code6, code7, code8] = [
    "slice_name := []datatype{values}",
    "myslice := []int{}",
    "myslice := []int{1,2,3}",
    'package main\nimport ("fmt")\n\nfunc main() {\n  myslice1 := []int{}\n  fmt.Println(len(myslice1))\n  fmt.Println(cap(myslice1))\n  fmt.Println(myslice1)\n\n  myslice2 := []string{"Go", "Slices", "Are", "Powerful"}\n  fmt.Println(len(myslice2))\n  fmt.Println(cap(myslice2))\n  fmt.Println(myslice2)\n}',
    "var myarray = [length]datatype{values} // An array\nmyslice := myarray[start:end] // A slice made from the array\n",
    'package main\nimport ("fmt")\n\nfunc main() {\n  arr1 := [6]int{10, 11, 12, 13, 14,15}\n  myslice := arr1[2:4]\n\n  fmt.Printf("myslice = %v\\n", myslice)\n  fmt.Printf("length = %d\\n", len(myslice))\n  fmt.Printf("capacity = %d\\n", cap(myslice))\n}',
    "slice_name := make([]type, length, capacity)\n",
    'package main\nimport ("fmt")\n\nfunc main() {\n  myslice1 := make([]int, 5, 10)\n  fmt.Printf("myslice1 = %v\\n", myslice1)\n  fmt.Printf("length = %d\\n", len(myslice1))\n  fmt.Printf("capacity = %d\\n", cap(myslice1))\n\n  // with omitted capacity\n  myslice2 := make([]int, 5)\n  fmt.Printf("myslice2 = %v\\n", myslice2)\n  fmt.Printf("length = %d\\n", len(myslice2))\n  fmt.Printf("capacity = %d\\n", cap(myslice2))\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Slices`)}
      {HTML.hr()}
      {HTML.h2(`Go Slices`)}
      {HTML.p(
        `Slices are similar to arrays, but are more powerful and flexible.`,
      )}
      {HTML.p(
        `Like arrays, slices are also used to store multiple values of the same type in a single variable.`,
      )}
      {HTML.p(
        `However, unlike arrays, the length of a slice can grow and shrink as you see fit.`,
      )}
      {HTML.p(`In Go, there are several ways to create a slice:`)}
      {HTML.ul([
        `Using the []datatype{values} format`,
        `Create a slice from an array`,
        `Using the make() function`,
      ])}
      {HTML.hr()}
      {HTML.h2(`Create a Slice With []<em>datatype</em>{<em>values</em>}`)}
      {HTML.code("go", code1)}
      {HTML.p(`A common way of declaring a slice is like this:`)}
      {HTML.code("go", code2)}
      {HTML.p(
        `The code above declares an empty slice of 0 length and 0 capacity.`,
      )}
      {HTML.p(`To initialize the slice during declaration, use this:`)}
      {HTML.code("go", code3)}
      {HTML.p(
        `The code above declares a slice of integers of length 3 and also the capacity of 3.`,
      )}
      {HTML.p(
        `In Go, there are two functions that can be used to return the length and capacity of a slice:`,
      )}
      {HTML.ul([
        `[[len()]] function - returns the length of the slice (the number of elements in the slice)`,
        `[[cap()]] function - returns the capacity of the slice (the number of elements the slice can grow or shrink to)`,
      ])}
      {HTML.p(
        `This example shows how to create slices using the []datatype{values} format:`,
      )}
      {HTML.code("go", code4)}
      {HTML.p(
        `In the example above, we see that in the first slice (myslice1), the actual elements are not specified, so both the length and capacity of the slice will be zero. In the second slice (myslice2), the elements are specified, and both length and capacity is equal to the number of actual elements specified.`,
      )}
      {HTML.hr()}
      {HTML.hr()}
      {HTML.h2(`Create a Slice From an Array`)}
      {HTML.p(`You can create a slice by slicing an array:`)}
      {HTML.code("go", code5)}
      {HTML.p(`This example shows how to create a slice from an array:`)}
      {HTML.code("go", code6)}
      {HTML.p(
        `In the example above myslice is a slice with length 2. It is made from arr1 which is an array with length 6.`,
      )}
      {HTML.p(
        `The slice starts from the second element of the array which has value 12. The slice can grow to the end of the array. This means that the capacity of the slice is 4.`,
      )}
      {HTML.p(
        `If myslice started from element 0, the slice capacity would be 6.`,
      )}
      {HTML.hr()}
      {HTML.h2(`Create a Slice With The make() Function`)}
      {HTML.p(`The make() function can also be used to create a slice.`)}
      {HTML.code("go", code7)}
      {HTML.note(
        `Note: If the capacity parameter is not defined, it will be equal to length.`,
      )}
      {HTML.p(
        `This example shows how to create slices using the make() function:`,
      )}
      {HTML.code("go", code8)}
    </>
  );
}
