"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 30;
let firstName = 'Mario';
let isFictional = true;
age = 31;
firstName = 'Luigi';
isFictional = false;
let planet = 'Earth';
let moons = 1;
let isLarge = true;
planet = 'saturn';
moons = 82;
isLarge = true;
let something;
let anotherThing;
something = null;
anotherThing = undefined;
console.log(planet);
//array
let names = ['mario', 'luigi', 'peach'];
let ages = [30, 28, 26];
let things = [1, true, 'hello'];
names.push('bowser');
ages.push(35);
const n = names[1];
const a = ages[0];
const t = things[2];
//obj
let user = {
    name: 'mario',
    age: 30,
    id: 1
};
user.name = "peach";
// type inference with objects literals
let person = {
    name: "luigi",
    age: 28,
    isFictional: true
};
// functions 
function addTwoNumbers(a, b) {
    return a + b;
}
const subTwoNumbers = (a, b) => {
    return a - b;
};
console.log(addTwoNumbers(5, 10), subTwoNumbers(10, 5));
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5, 56]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
console.log(formatGreeting(`mario`, `hi`));
//any type
let car;
car = `honda`;
car = true;
//any type in array
let cars;
cars = [12, `honda`, true];
cars.push(null);
console.log(cars);
function anyTogether(value) {
    return value + value;
}
const resultOne = anyTogether(`hi`);
const resultTwo = anyTogether(1);
// tuples
let character = [`mario`, 20, true];
let hsla;
hsla = [200, `100%`, `50%`, 1];
let cord;
cord = [83, 92];
// name tuples
let newUser;
newUser = [`peach`, 25];
console.log(newUser[0]);
const authorOne = {
    name: `mario`,
    avatar: `/img/mario.png`
};
const newPost = {
    title: `first post`,
    body: `hi`,
    tags: [`post`, `greeting`],
    create_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// interface with array
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
console.log(colorOne);
const userOne = {
    name: `Mario`,
    score: 32
};
function formatUser(user) {
    return `${user.name} has a score of ${user.score}`;
}
console.log(formatUser(userOne));
// union types
let someID;
someID = 1;
someID = `2`;
let email = null;
email = `example@gmail.com`;
email = null;
let anotherID;
anotherID = `2398479823owier`;
anotherID = 9812;
//union type pitfall
function swapIDType(id) {
    parseInt(`2`); //! error with `2` replace with id
    return (id);
}
swapIDType(`5`);
//# sourceMappingURL=index.js.map