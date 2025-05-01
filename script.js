/* COLOR WHEEL KATA */

/* Var Alert Prompt Conditional Switch 3 Functions */

/* FUNCTION main() 
 * create a variable called color and prompt the user for a primary or secondary color (they )
 * if checkColor(color) says false, say "must be primary or secondary" and call main again.
 * otherwise, display "the complementary color of [color] is [complementaryColor(color)]"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
   let color = prompt("Primary color?");
   if (!checkColor(color)) alert("must be primary or secondary");
   else alert("the complementary color of " + color + " is " + complementaryColor(color));
}
/* FUNCTION checkColor (color)
 * set boolean goodColor to false
 * use a compound conditional (or) to check for primary
 * if it's a primary color, set goodColor to true
 * otherwise, use a compound conditional (or) to check for secondary
 * if it's a secondary color, set goodColor to true
 * return goodColor
 * @param: color (string)
 * @return: goodColor (boolean)
 */
function checkColor(color) {
   let goodColor = false;

}

/* FUNCTION complementaryColor(color)
 * create a variable called complement, set to ""
 * use a switch function and switch on color
 * (look at this: https://www.canva.com/colors/color-wheel)
 * in the switch, assign the complementary color to complement
 * @param: color (string)
 * @return: complement (string)
 */
function complementaryColor(color) {
   let complement = "";
   checkColor(color);
   
}