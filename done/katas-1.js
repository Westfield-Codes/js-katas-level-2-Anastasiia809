/* COLOR KATAS */

/* Var Alert */
// make a string variable named color, set it equal to your favorite color.
// alert the message" "My favorite color is " plus the variable name outside quotes.
var color = "green";
alert("My favotite color is "+ color);
/* Var Alert Prompt */
// make a string variable for color, prompt the user for their favorite color.
// alert color " plus is a nice color!"
var color = prompt("What is your favorite color?");
alert(color + " is a nice color!");
/* Var Alert Prompt Conditional */
// make a string variable for color, prompt the user for their favorite
// if user enters "black" alert "Black is not really a color." 
// otherwise alert color " is a nice color!"
var color = prompt("What is your favorite color?");
if (color == "black") alert("Black is not really a color.");
else alert(color + " is a nice color!");

/* AGE KATAS */

/* Var Alert */
// make an integer variable for age, set it equal to your age
// make a string variable for name, set it to your name
// alert name is age years old
var age = 15;
var name1 = "Nastia";
alert(name1 + " is " + age + " years old");
/* Var Alert Prompt */
// make an integer variable for age, prompt user for their age
// make a string variable for name, prompt user for their name
// alert name is age years old
var age = prompt("How old are you?");
var name2 = prompt("What is your name?");
alert(name2 + " is "  + age + "years old");

/* Var Alert Prompt Conditional */
// make an integer variable for age, prompt user for it
// make a string variable for name, prompt user for it
// if age is greater than 16, alert "you don't look that old!"
// otherwise alert name is age years old
var age = prompt("How old are you?");
var name3 = prompt("What is your name?");
if (age > 16) alert("You don't look that old!");
else alert(name3 + " is " + age + " years old");

/* PET KATAS */

/* Var Alert Prompt */
// make a variable for pet type, prompt user for it 
// make a variable for pet name, prompt user for it
// alert "You have a pet type named pet name 
var petType = prompt("What pet do you have?");
var petName = prompt("How do you call your pet?");
alert("You have " + petType + " named " + petName);
/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var petType2 = prompt("What pet do you have?");
// make a variable for pet name, prompt user for it
var petName2 = prompt("How do oyu call your pet?");
// alert "You have a pet type named pet name 
alert("You have " + petType2 + " named " + petName2);
// if pet is a dog, say "I like dogs, too!"
if (petType2 == "dog") alert("I like dogs too!");
// if it is a cat, say "I'm allergic to cats"
if (petType2 == "cat") alert("I'm allergic to cats");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("what an interesting pet!");