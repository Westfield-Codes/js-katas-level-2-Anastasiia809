/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * Ask the user what operation they want (+, -, *, /)
 * Alert the equation a + operation + b = result
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
    let operation = prompt("What operation do you want?(+, -, *, /)");
    let a = prompt("First number");
    a = parseInt(a);
    let b = prompt("Second number");
    b = parseInt(b);
    let result = 0;
    if (operation == "+") {
           result = add(a,b);
    }    
    alert( a + operation + b + " = " + result);
}
//  * Based on the operation, send the numbers to the right function as
//  * arguments and store the returned value in variable called result


/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b) {
    return a + b;
}
/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */
function subtract(a,b) {
 return a - b;
}
/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */
function multiply(a,b) {
    return a * b;
}
/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
function divide() {
    return a / b;
}
