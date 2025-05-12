/* GUINEA PIGS KATA:  */

/* Story:  You're breeding a herd of prize short-hair guinea pigs!  
 * You're into the 2nd generation, so you have
 * two parent, a sow (s) and a boar (s), and a litter of 4 pups 
 * (b,b,s,s). You wanted two bloodlines so
 * you bought a matching litter of 4 (s,s,b,b) and bread them all 
 * together.  Now you have 16 grandchildren! How do you keep track 
 * of them all? 
 */ 

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
function makeHerd() {
   let pigs = ["1-parent","2-parent","1-kid","2-kid"];
   let animal = confirm("Do you want ");
}
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

/* 3.herdAnalyzer
 * You've generated a random herd.  Now let's see what's going on 
 * there. Create a herdAnalyzer function that counts how many pig 
 * total, how many of each sex, and generate a report: "Your herd
 * has # pigs with # sows and # boars. 
 */
