/* GUINEA PIGS KATA:  */

/* Story:  You're breeding a herd of prize short-hair guinea pigs!  
 * You're into the 2nd generation, so you have
 * two parent, a sow (s) and a boar (s), and a litter of 4 pups 
 * (b,b,s,s). You wanted two bloodlines so
 * you bought a matching litter of 4 (s,s,b,b) and bread them all 
 * together.  Now you have 16 grandchildren! How do you keep track 
 * of them all? 
 */ 
var herd = [];
function main(){
   makeHerdRandom()
   herdAnalyzer();
}
/* 1. function makeHerd(pigs)
 * Create myHerd array of [pigs]: 2 parents and pigs-2 children. 
 * Each pig needs to have four attributes:
 * Generation (0 or 1), sex (boar or sow), color (white, black, or 
 * orange) and coat pattern (solid, crest or dutch)
 * As you ask for each pig, include integers for generation, first 
 * letters for other 3 values. Example: [1, b, w, c]
 * Test the array by using array.join to display each pig on
 * a separate line. 
 */
// function makeHerd() {
//    let generation = 0;
//    let sex = "boar";
//    let color = "white";
//    let pattern = "solid";
//    let pig = [generation, sex, color, pattern];
//    let herd = [];
//    for (let p = 0; p<4;p++){
//       generation = prompt(" pig "+ p + ": generation 0/1?");
//       sex = prompt("sex [b]oar/[s]ow?");
//       color = prompt("color [w]hite, [b]lack, [o]range?");
//       pattern = prompt("pattern [s]olid, [c]rest, [d]]utch?");
//       pig = [generation, sex, color, pattern];
//       herd.push(pig);
//    }
//    console.log(herd.join(", "));
// }
/* 2. function makeHerd()
 * Instead of creating the herd by hand, use a random generator.
 * Write function to add string values based on random number values
 * Use either switches or lookup arrays to assign attributes with  
 * the values - try both! Work with a makePig function that 
 * Returns a pig. makeHerd function asks for how many pigs to make, 
 * which generation, and uses makePig to make them 
 * Use our array.join function to list each pig, separate line
 * Obviously this won't match our herd because the sex and 
 * generation ratios will be off. 
 */
function makeHerdRandom() {
   let generation = 0;
   let sex = "boar";
   let color = "white";
   let pattern = "solid";
   let pig = [generation, sex, color, pattern];
   let lookups = [[],["b","s"],["w","b","o"],["s","c","d"]];
   let many = prompt("How many pigs do you want to?");
   for (let p = 0; p<many;p++){
      generation = Math.floor(Math.random()*2);
      sex = lookups[1][Math.floor(Math.random()*2)];
      color = lookups[2][Math.floor(Math.random()*3)];
      pattern = lookups[3][Math.floor(Math.random()*3)];
      pig = [generation, sex, color, pattern];
      herd.push(pig);
   }
   console.log(herd.join(", "));
}
/* 3.herdAnalyzer
 * You've generated a random herd.  Now let's see what's going on 
 * there. Create a herdAnalyzer function that counts how many pig 
 * total, how many of each sex, and generate a report: "Your herd
 * has # pigs with # sows and # boars. 
 */
function herdAnalyzer() {
   let total = herd.length;
   let sexTotal = [0,0];
   for (let p = 0;p<total; p++) {
      if (herd[p][1]== "s") sexTotal[0]++;
      else sexTotal[1]++;
   }
   alert("Your herd has "+ total +  " pigs with " + sexTotal[0] +  " sows and " + sexTotal[1] + " boars.");
}
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
