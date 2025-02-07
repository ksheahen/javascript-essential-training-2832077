/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const backpack = {
  color: "grey",
  size: "small",
  strapLength: {
    left: 35,
    right: 30,
  },
  pockets: "2",
};

const drink = {
  type: "iced",
  flavor: "matcha latte",
  size: "large",
};

const computer = {
  cpu: "intel",
  gpu: "nvidia 4080",
  psu: "corsair 600W",
  ram: 32,
  mobo: "msi whatever",
  monitor: {
    width: 27,
    name: "dell whtever",
  },
};

console.log("the backpack: ", backpack);
console.log("drink: ", drink.type, drink.flavor);
console.log("computer monitor: ", computer.monitor.name);
