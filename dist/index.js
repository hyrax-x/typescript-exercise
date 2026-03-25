"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 30;
let firstName = "Mario";
let isFictional = true;
age = 31;
firstName = "Luigi";
isFictional = false;
let planet = "Earth";
let moons = 1;
let isLarge = true;
planet = "saturn";
moons = 82;
isLarge = true;
let something;
let anotherThing;
something = null;
anotherThing = undefined;
console.log(planet);
//array
let names = ["mario", "luigi", "peach"];
let ages = [30, 28, 26];
let things = [1, true, "hello"];
names.push("bowser");
ages.push(35);
const n = names[1];
const a = ages[0];
const t = things[2];
//obj
let user = {
  name: "mario",
  age: 30,
  id: 1,
};
user.name = "peach";
// type inference with objects literals
let person = {
  name: "luigi",
  age: 28,
  isFictional: true,
};
// functions
function addTwoNumbers(a, b) {
  return a + b;
}
console.log(addTwoNumbers(5, 10));
//# sourceMappingURL=index.js.map
