/* SHOPPING LIST KATA:  */

// Every day, you are sent to buy 5 items. 

/* 1. for loop and string concatenation */
function main() {
   makeList();
}
/* Function makeList()
 * Create a shopping list string called shoppingList as "To Buy:"
 * create a five-item loop, and in the loop, 
 * ask for next item to buy (item #), and add it to the list 
 * add a line break after each item added
 * when loop's done, alert the list
 */
function makeList() {
   let shopArray = [];
   let shoppingList = " To Buy: \n"
   for (let item = 1;item<=5;item++) {
      shopArray.push(prompt("List items"));
   }
   alert(shoppingList + shopArray.join("\n"));
}
/* 2. for loop and array with toString */

/* Same function, using previous code, BUT:
 * build shopArray variable for the shopping list
 * adjust loop to work with the array index values (start at 0)
 * ask for next list item and push it to the shopArray
 * no need to add a line break after
 * at end of loop, alert the list title, followed by
 * the list with toString() method (it won't have line breaks)*/

/* 3. for loop and array with join method 

/* Same function, using previous code, BUT:
 * the at end, alert list with array.join() method with line breaks 
 * instead of commas */
 
/* 4. loops, arrays and functions */

/* Same function, using previous code, but THIS TIME:
 * store each item as a numbered item ["1. cookies","2. donuts"])   
 * using the loop index. */
