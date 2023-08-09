import HTML from "../../../components/HTML/HTML";

export default function Go_W3School_1_18() {
  const [code1, code2, code3, code4, code5, code6, code7, code8, code9] = [
    'package main\nimport ("fmt")\n\nfunc main() {\n  prices := []int{10,20,30}\n\n  fmt.Println(prices[0])\n  fmt.Println(prices[2])\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  prices := []int{10,20,30}\n  prices[2] = 50\n  fmt.Println(prices[0])\n  fmt.Println(prices[2])\n}',
    "slice_name = append(slice_name, element1, element2, ...)\n",
    'package main\nimport ("fmt")\n\nfunc main() {\n  myslice1 := []int{1, 2, 3, 4, 5, 6}\n  fmt.Printf("myslice1 = %v\\n", myslice1)\n  fmt.Printf("length = %d\\n", len(myslice1))\n  fmt.Printf("capacity = %d\\n", cap(myslice1))\n\n  myslice1 = append(myslice1, 20, 21)\n  fmt.Printf("myslice1 = %v\\n", myslice1)\n  fmt.Printf("length = %d\\n", len(myslice1))\n  fmt.Printf("capacity = %d\\n", cap(myslice1))\n}',
    "slice3 = append(slice1, slice2...)\n",
    'package main\nimport ("fmt")\n\nfunc main() {\n  myslice1 := []int{1,2,3}\n  myslice2 := []int{4,5,6}\n  myslice3 := append(myslice1, myslice2...)\n\n  fmt.Printf("myslice3=%v\\n", myslice3)\n  fmt.Printf("length=%d\\n", len(myslice3))\n  fmt.Printf("capacity=%d\\n", cap(myslice3))\n}',
    'package main\nimport ("fmt")\n\nfunc main() {\n  arr1 := [6]int{9, 10, 11, 12, 13, 14} // An array\n  myslice1 := arr1[1:5] // Slice array\n  fmt.Printf("myslice1 = %v\\n", myslice1)\n  fmt.Printf("length = %d\\n", len(myslice1))\n  fmt.Printf("capacity = %d\\n", cap(myslice1))\n\n  myslice1 = arr1[1:3] // Change length by re-slicing the array\n  fmt.Printf("myslice1 = %v\\n", myslice1)\n  fmt.Printf("length = %d\\n", len(myslice1))\n  fmt.Printf("capacity = %d\\n", cap(myslice1))\n\n  myslice1 = append(myslice1, 20, 21, 22, 23) // Change length by appending items\n  fmt.Printf("myslice1 = %v\\n", myslice1)\n  fmt.Printf("length = %d\\n", len(myslice1))\n  fmt.Printf("capacity = %d\\n", cap(myslice1))\n}',
    "copy(dest, src)",
    'package main\nimport ("fmt")\n\nfunc main() {\n  numbers := []int{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15}\n  // Original slice\n  fmt.Printf("numbers = %v\\n", numbers)\n  fmt.Printf("length = %d\\n", len(numbers))\n  fmt.Printf("capacity = %d\\n", cap(numbers))\n\n  // Create copy with only needed numbers\n  neededNumbers := numbers[:len(numbers)-10]\n  numbersCopy := make([]int, len(neededNumbers))\n  copy(numbersCopy, neededNumbers)\n\n  fmt.Printf("numbersCopy = %v\\n", numbersCopy)\n  fmt.Printf("length = %d\\n", len(numbersCopy))\n  fmt.Printf("capacity = %d\\n", cap(numbersCopy))\n}',
  ];

  return (
    <>
      {HTML.h1(`Go Access, Change, Append and Copy Slices`)}
      {HTML.hr()}
      {HTML.h2(`Access Elements of a Slice`)}
      {HTML.p(
        `You can access a specific slice element by referring to the index number.`,
      )}
      {HTML.p(
        `In Go, indexes start at 0. That means that [0] is the first element, [1] is the second element, etc.`,
      )}
      {HTML.p(
        `This example shows how to access the first and third elements in the prices slice:`,
      )}
      {HTML.code("go", code1)}
      {HTML.hr()}
      {HTML.h2(`Change Elements of a Slice`)}
      {HTML.p(
        `You can also change a specific slice element by referring to the index number.`,
      )}
      {HTML.p(
        `This example shows how to change the third element in the prices slice:`,
      )}
      {HTML.code("go", code2)}
      {HTML.hr()}
      {HTML.h2(`Append Elements To a Slice`)}
      {HTML.p(
        `You can append elements to the end of a slice using the append()function:`,
      )}
      {HTML.code("go", code3)}
      {HTML.p(
        `This example shows how to append elements to the end of a slice:`,
      )}
      {HTML.code("go", code4)}
      {HTML.hr()}
      {HTML.hr()}
      {HTML.h2(`Append One Slice To Another Slice`)}
      {HTML.p(
        `To append all the elements of one slice to another slice, use the append()function:`,
      )}
      {HTML.code("go", code5)}
      {HTML.note(
        `Note: The '...' after slice2 is necessary when appending the elements of one slice to another.`,
      )}
      {HTML.p(`This example shows how to append one slice to another slice:`)}
      {HTML.code("go", code6)}
      {HTML.hr()}
      {HTML.h2(`Change The Length of a Slice`)}
      {HTML.p(`Unlike arrays, it is possible to change the length of a slice.`)}
      {HTML.p(`This example shows how to change the length of a slice:`)}
      {HTML.code("go", code7)}
      {HTML.hr()}
      {HTML.h2(`Memory Efficiency`)}
      {HTML.p(
        `When using slices, Go loads all the underlying elements into the memory.`,
      )}
      {HTML.p(
        `If the array is large and you need only a few elements, it is better to copy those elements using the copy() function.`,
      )}
      {HTML.p(
        `The copy() function creates a new underlying array with only the required elements for the slice. This will reduce the memory used for the program.&nbsp;`,
      )}
      {HTML.code("go", code8)}
      {HTML.p(
        `The copy() function takes in two slices dest and src, and copies data from src to dest. It returns the number of elements copied.`,
      )}
      {HTML.p(`This example shows how to use the copy() function:`)}
      {HTML.code("go", code9)}
      {HTML.p(
        `The capacity of the new slice is now less than the capacity of the original slice because the new underlying array is smaller.`,
      )}
    </>
  );
}
