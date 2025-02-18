/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Drink from "./Drink.js";

const everydayPack = new Backpack (
    "everyday",
    10,
    "purple",
    3,
    15,
    26,
    26,
    false
)

console.log(everydayPack);

const matchDrink = new Drink (
    "matcha latte",
    "iced",
    24
)

console.log(matchDrink);