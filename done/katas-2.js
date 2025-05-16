/* ICE CREAM CONE KATA */

/* Var, Alert, Prompt, Conditional, While, Function. Global, Concatenation */

/* Initialize Globals
 * Set a global variable myScoops = "Here's your cone with: "
 */
var myScoops = "Here your cone with: ";
/* FUNCTION main() 
 * initialize variable scoops, prompt user for "how many scoops (max 3)?"
 * if scoops is less than 4, call scoopLoop with argument scoops
 * otherwise display "oink oink" and call main again.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
    let scoops = prompt("How many scoops (max 3)?");
    if (scoops < 4) scoopLoop(scoops);
    else {
     alert("oink oink"); 
     main();
    }
}
/* FUNCTION scoopLoop(scoops) 
 * start scoop at 1 and loop while scoop is less than or equal to scoops
 * inside the loop add nextScoop(scoop) to myScoops
 * after the loop's done, display "Here's your cone with " myScoops
 * @param: scoops (integer)
 * @return: none
 */
function scoopLoop(scoops){
    for (let scoop = 1; scoop <= scoops; scoop++) {
        myScoops += nextScoop(scoop);
    }
    alert(myScoops);
}
/* FUNCTION nextScoop(scoop)
 * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 * @param: scoop (integer)
 * @return: flavor (string)
 */
function nextScoop(scoop) {
    let flavor = prompt("Flavor for scoop number " + scoop);
    return "\n"+flavor;
}

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

/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
// Create an array called picked, start empty. 
var students = [];
var picked = [];
/* Function Main()
 * Set variable count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(), the sName of a random student in the list
 * Set keymaster = randNewStudent(), sName of a different random student
 * Display gatekeeper sName and keymaster sName for this kata
 * @param = none
 * @return = none
 */
function main() {
   let count = prompt("How many students here?");
   addStudents(count);
   let gateKeeper = randStudent();
   let keyMaster = randStudent();
   alert("Gatekeeper = " + gateKeeper + " and Keymaster = " + keyMaster);
}
/* Function addStudents(count)
 * Use the students array, nothing in it. 
 * Use a for loop to add student sNames to the students array.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */
function addStudents(count){
   for (let student = 1; student <= count; student++){
      students.push(prompt("Next student?"));
   }
   console.log(students);
}
/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set sName = element in students array at that random index.
 * Add sName to picked array. 
 * Return the sName of the random student
 * @param = count
 * @return = sName {string}
 */
 function randStudent(){
   let student = Math.floor(Math.random()*students.length);
   let sName = students[student];
   students.splice(student);
   picked.push(sName);
   return sName;
 }
/* Function randNewStudent() (start with copy of randStudent)
 * Set student = "" and pickedYet = 0. 
 * Loop while pickedYet is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set sName = element in students array at that random index.
 * Set pickedYet = the index of that sName in the picked array. 
 * End the while loop.
 * Add sName to picked array.
 * Return the sName of the new random student
 * @param = none
 * @return = sName {string}
 */
function randNewStudent(){
   let student = 0;
   let pickedYet = 0;
   let sName = "";
   while (pickedYet != -1) {
      student = Math.floor(Math.random()*students.length);
      sName = students[student];
      pickedYet = picked.indexOf[sName];
   }
   // let sName = students[student];
   picked.push(sName);
   return sName;
}
