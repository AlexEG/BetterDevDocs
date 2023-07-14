import image1 from "../../../../assets/test images/Screenshot_1.png";
import image2 from "../../../../assets/test images/Screenshot_14.png";
import image3 from "../../../../assets/test images/Screenshot_3.png";
import image4 from "../../../../assets/test images/Screenshot_15.png";
import image5 from "../../../../assets/test images/Screenshot_16.png";
import image6 from "../../../../assets/test images/Screenshot_17.png";
import image7 from "../../../../assets/test images/Screenshot_19.png";

import Img from "../../../../components/article/media/Img";

export default {
  "3. Into UDKJS": {
    "Scope & Closures": [
      `
      Code
Let’s start from the beginning.
A program, often referred to as source code or just code, is a set of
special instructions to tell the computer what tasks to perform.
  Usually code is saved in a text file, although with JavaScript you can also
type code directly into a developer console in a browser,
`,
      <Img src={image1} />,
      `
which we’ll
cover shortly.
The rules for valid format and combinations of instructions is called
a computer language, sometimes referred to as its syntax, much the
same as English tells you how to spell words and how to create valid
sentences using words and punctuation.
Statements
In a computer language, a group of words, numbers, and operators
that performs a specific task is a statement. In JavaScript, a statement
might look as follows:
a = b * 2;
The characters a and b are called variables (see “Variables” on page
14), which are like simple boxes you can store any of your stuff in.
In programs, variables hold values (like the number 42) to be used
by the program. Think of them as symbolic placeholders for the val‐
ues themselves.
By contrast, the 2 is just a value itself, called a literal value, because it
stands alone without being stored in a variable.
The = and * characters are operators (see “Operators” on page 8)—
they perform actions with the values and variables such as assign‐
ment and mathematic multiplication.
Most statements in JavaScript conclude with a semicolon (;) at the
end.
The statement a = b * 2; tells the computer, roughly, to get the
current value stored in the variable b, multiply that value by 2, then
store the result back into another variable we call a.
Programs are just collections of many such statements, which
together describe all the steps that it takes to perform your pro‐
gram’s purpose.
      `,
    ],
    "this & Object Prototypes": [
      `
      Expressions
Statements are made up of one or more expressions. An expression is
any reference to a variable or value, or a set of variable(s) and
value(s) combined with operators.
For example:
a = b * 2;
This statement has four expressions in it:
• 2 is a literal value expression.
• b is a variable expression, which means to retrieve its current
value.
• b * 2 is an arithmetic expression, which means to do the multi‐
plication.
• a = b * 2 is an assignment expression, which means to assign
the result of the b * 2 expression to the variable a (more on
assignments later).
A general expression that stands alone is also called an expression
statement, such as the following:
b * 2;
`,
      <Img src={image2} />,
      `
This flavor of expression statement is not very common or useful, as
generally it wouldn’t have any effect on the running of the program
—it would retrieve the value of b and multiply it by 2, but then
wouldn’t do anything with that result.
A more common expression statement is a call expression statement
(see “Functions” on page 22), as the entire statement is the function
call expression itself:
alert( a );
`,
      <Img src={image3} />,
      `
Executing a Program
How do those collections of programming statements tell the com‐
puter what to do? The program needs to be executed, also referred to
as running the program.
Statements like a = b * 2 are helpful for developers when reading
and writing, but are not actually in a form the computer can directly
understand. So a special utility on the computer (either an inter‐
preter or a compiler) is used to translate the code you write into com‐
mands a computer can understand.
For some computer languages, this translation of commands is typi‐
cally done from top to bottom, line by line, every time the program
is run, which is usually called interpreting the code.
For other languages, the translation is done ahead of time, called
compiling the code, so when the program runs later, what’s running
is actually the already compiled computer instructions ready to go.
It’s typically asserted that JavaScript is interpreted, because your Java‐
Script source code is processed each time it’s run. But that’s not
entirely accurate. The JavaScript engine actually compiles the pro‐
gram on the fly and then immediately runs the compiled code.

      `,
    ],
    "Types & Grammar": [
      `
    Try It Yourself
This chapter is going to introduce each programming concept with
simple snippets of code, all written in JavaScript (obviously!).
It cannot be emphasized enough: while you go through this chapter
—and you may need to spend the time to go over it several times—
you should practice each of these concepts by typing the code your‐
self. The easiest way to do that is to open up the developer tools con‐
sole in your nearest browser (Firefox, Chrome, IE, etc.).
Let’s get familiar with the process of running code in the console.
First, I suggest opening up an empty tab in your browser. I prefer to
do this by typing about:blank into the address bar. Then, make sure
your developer console is open, as we just mentioned.
Now, type this code and see how it runs:
`,
      <Img src={image5} />,
      `
`,
      <Img src={image6} />,
      `
a = 21;
b = a * 2;
console.log( b );
Typing the preceding code into the console in Chrome should pro‐
Go on, try it. The best way to learn programming is to start coding!
Output
In the previous code snippet, we used console.log(..). Briefly, let’s
look at what that line of code is all about.
You may have guessed, but that’s exactly how we print text (aka out‐
put to the user) in the developer console. There are two characteris‐
tics of that statement that we should explain.
First, the log( b ) part is referred to as a function call (see “Func‐
tions” on page 22). What’s happening is we’re handing the b variable
to that function, which asks it to take the value of b and print it to
the console.
Second, the console. part is an object reference where the log(..)
function is located. We cover objects and their properties in more
detail in Chapter 2.
Another way of creating output that you can see is to run an
alert(..) statement. For example:
alert( b );
If you run that, you’ll notice that instead of printing the output to
the console, it shows a pop-up “OK” box with the contents of the b
variable. However, using console.log(..) is generally going to
make learning about coding and running your programs in the con‐
sole easier than using alert(..) because you can output many val‐
ues at once without interrupting the browser interface.
For this book, we’ll use console.log(..) for output.
Input
While we’re discussing output, you may also wonder about input
(i.e., receiving information from the user).
The most common way that happens is for the HTML page to show
form elements (like text boxes) to a user that she can type into, and
then use JS to read those values into your program’s variables.
But there’s an easier way to get input for simple learning and dem‐
onstration purposes such as what you’ll be doing throughout this
book. Use the prompt(..) function
age = prompt( "Please tell me your age:" );
console.log( age );
As you may have guessed, the message you pass to prompt(..)—in
this case, "Please tell me your age:"—is printed into the pop
up.
This should look similar to the following:
To keep things simple while we’re learning basic programming con‐
cepts, the examples in this book will not require input. But now that
you’ve seen how to use prompt(..), if you want to challenge your‐
self, you can try to use input in your explorations of the examples.

`,
    ],
    "Async & Performance": [
      `
    Operators
Operators are how we perform actions on variables and values.
We’ve already seen two JavaScript operators, the = and the *.
The * operator performs mathematic multiplication. Simple enough,
right?
The = equals operator is used for assignment—we first calculate the
value on the right-hand side (source value) of the = and then put it
into the variable that we specify on the le-hand side (target vari‐
able).
T
Consider:
a = 2;
b = a + 1;
Here, we assign the 2 value to the a variable. Then, we get the value
of the a variable (still 2), add 1 to it resulting in the value 3, then
store that value in the b variable.
While not technically an operator, you’ll need the keyword var in
every program, as it’s the primary way you declare (aka create)
variables (see “Variables” on page 14).
You should always declare the variable by name before you use it.
But you only need to declare a variable once for each scope (see
“Scope” on page 24); it can be used as many times after that as
needed. For example:
var a = 20;
a = a + 1;
a = a * 2;
console.log( a ); // 42
Here are some of the most common operators in JavaScript:
Assignment
=, as in a = 2.
Math
+ (addition), - (subtraction), * (multiplication), and / (divi‐
sion), as in a * 3.
Compound assignment
+=, -=, *=, and /= are compound operators that combine a math
operation with assignment, as in a += 2 (same as a = a + 2).
Increment/decrement
++ (increment), -- (decrement), as in a++ (similar to a = a +
1).
Object property access
. as in console.log().
Objects are values that hold other values at specific named loca‐
tions called properties. obj.a means an object value called obj
with a property of the name a. Properties can alternatively be
accessed as obj["a"]. See Chapter 2.
Equality
== (loose-equals), === (strict-equals), != (loose not-equals), !==
(strict not-equals), as in a == b.
See “Values & Types” on page 10 and Chapter 2.
Comparison
< (less than), > (greater than), <= (less than or loose-equals), >=
(greater than or loose-equals), as in a <= b.
See “Values & Types” on page 10 and Chapter 2.
Logical
&& (and), || (or), as in a || b that selects either a or b.
These operators are used to express compound conditionals
(see “Conditionals” on page 18), like if either a or b is true.
`,
    ],
    "ES6 & Beyond": [
      `Values & Types
    If you ask an employee at a phone store how much a certain phone
    costs, and he says “ninety-nine, ninety-nine” (i.e., $99.99), he’s giv‐
    ing you an actual numeric dollar figure that represents what you’ll
    need to pay (plus taxes) to buy it. If you want to buy two of those
    phones, you can easily do the mental math to double that value to
    get $199.98 for your base cost.
    If that same employee picks up another similar phone but says it’s
    “free” (perhaps with air quotes), he’s not giving you a number, but
    instead another kind of representation of your expected cost ($0.00)
    —the word “free.”
    When you later ask if the phone includes a charger, the answer can
    only be “yes” or “no.”
    In very similar ways, when you express values in a programs, you
    choose different representations for those values based on what you
    plan to do with them.
    These different representations for values are called types in pro‐
    gramming terminology. JavaScript has built-in types for each of
    these so-called primitive values:
    • When you need to do math, you want a number.
    • When you need to print a value on the screen, you need a
    string (one or more characters, words, or sentences).
    • When you need to make a decision in your program, you need a
    boolean (true or false).
    Values that are included directly in the source code are called liter‐
    als. string literals are surrounded by double quotes ("...") or sin‐
    gle quotes ('...')—the only difference is stylistic preference.
    number and boolean literals are just presented as is (e.g., 42, true,
    etc.). Consider:
    "I am a string";
    'I am also a string';
    42;
    true;
    false;
    Beyond string/number/boolean value types, it’s common for pro‐
    gramming languages to provide arrays, objects, functions, and more.
    We’ll cover much more about values and types throughout this
    chapter and the next.
    Converting Between Types
    If you have a number but need to print it on the screen, you need to
    convert the value to a string, and in JavaScript this conversion is
    called “coercion.” Similarly, if someone enters a series of numeric
    characters into a form on an ecommerce page, that’s a string, but if
    you need to then use that value to do math operations, you need to
    coerce it to a number.
    JavaScript provides several different facilities for forcibly coercing
    between types. For example:
    var a = "42";
    var b = Number( a );
    console.log( a ); // "42"
    console.log( b ); // 42
    Using Number(..) (a built-in function) as shown is an explicit coer‐
    cion from any other type to the number type. That should be pretty
    straightforward.
    But a controversial topic is what happens when you try to compare
    two values that are not already of the same type, which would
    require implicit coercion.
    When comparing the string "99.99" to the number 99.99, most
    people would agree they are equivalent. But they’re not exactly the
    same, are they? It’s the same value in two different representations,
    two different types. You could say they’re “loosely equal,” couldn’t
    you?
    Values & Types | 11
    To help you out in these common situations, JavaScript will some‐
    times kick in and implicitly coerce values to the matching types.
    So if you use the == loose-equals operator to make the comparison
    "99.99" == 99.99, JavaScript will convert the left-hand side
    "99.99" to its number equivalent 99.99. The comparison then
    becomes 99.99 == 99.99, which is of course true.
    While designed to help you, implicit coercion can create confusion
    if you haven’t taken the time to learn the rules that govern its behav‐
    ior. Most JS developers never have, so the common feeling is that
    implicit coercion is confusing and harms programs with unexpected
    bugs, and should thus be avoided. It’s even sometimes called a flaw
    in the design of the language.
    However, implicit coercion is a mechanism that can be learned, and
    moreover should be learned by anyone wishing to take JavaScript
    programming seriously. Not only is it not confusing once you learn
    the rules, it can actually make your programs better! The effort is
    well worth it.
    `,
    ],
    Review: [
      `
    Code Comments
The phone store employee might jot down some notes on the fea‐
tures of a newly released phone or on the new plans her company
offers. These notes are only for the employee—they’re not for cus‐
tomers to read. Nevertheless, these notes help the employee do her
job better by documenting the hows and whys of what she should
tell customers.
`,
      <Img src={image1} />,
      `
One of the most important lessons you can learn about writing code
is that it’s not just for the computer. Code is every bit as much, if not
more, for the developer as it is for the compiler.
Your computer only cares about machine code, a series of binary 0s
and 1s, that comes from compilation. There’s a nearly infinite num‐
ber of programs you could write that yield the same series of 0s and
1s. The choices you make about how to write your program matter —not only to you, but to your other team members and even to
your future self.
You should strive not just to write programs that work correctly, but
programs that make sense when examined. You can go a long way in
that effort by choosing good names for your variables (see “Vari‐
ables” on page 14) and functions (see “Functions” on page 22).
But another important part is code comments. These are bits of text
in your program that are inserted purely to explain things to a
human. The interpreter/compiler will always ignore these com‐
ments.
`,
      <Img src={image2} />,
      `
There are lots of opinions on what makes well-commented code; we
can’t really define absolute universal rules. But some observations
and guidelines are quite useful:
• Code without comments is suboptimal.
• Too many comments (one per line, for example) is probably a
sign of poorly written code.
• Comments should explain why, not what. They can optionally
explain how if what’s written is particularly confusing.
In JavaScript, there are two types of comments possible: a single-line
comment and a multiline comment.
Consider:
// This is a single-line comment
/* But this is
 a multiline
 comment.
 */
The // single-line comment is appropriate if you’re going to put a
comment right above a single statement, or even at the end of a line.
Everything on the line after the // is treated as the comment (and
thus ignored by the compiler), all the way to the end of the line.
There’s no restriction to what can appear inside a single-line com‐
ment.
`,
      <Img src={image7} />,
      `
Consider:
var a = 42; // 42 is the meaning of life The /* .. */ multiline comment is appropriate if you have several
lines worth of explanation to make in your comment.
Here’s a common usage of multiline comments:
/* The following value is used because
 it has been shown that it answers
 every question in the universe. */
var a = 42;
It can also appear anywhere on a line, even in the middle of a line,
because the */ ends it. For example:
var a = /* arbitrary value */ 42;
console.log( a ); // 42
The only thing that cannot appear inside a multiline comment is a
*/, because that would be interpreted to end the comment.
You will definitely want to begin your learning of programming by
starting off with the habit of commenting code. Throughout the rest
of this chapter, you’ll see I use comments to explain things, so do the
same in your own practice. Trust me, everyone who reads your code
will thank you!
`,
    ],
  },
};
