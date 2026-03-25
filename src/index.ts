let age: number = 30
let firstName: string = 'Mario'
let isFictional: boolean = true

age = 31
firstName = 'Luigi'
isFictional = false

let planet = 'Earth'
let moons = 1
let isLarge = true

planet = 'saturn'
moons = 82
isLarge = true

let something: null
let anotherThing: undefined

something = null
anotherThing = undefined
console.log(planet)

//array

let names: string[] = ['mario','luigi','peach']
let ages: number[] = [30,28,26]
let things = [1, true, 'hello']

names.push('bowser')
ages.push(35)

const n = names[1]
const a =ages[0]
const t = things[2]

//obj

let user: {name: string, age: number, id: number} = {
    name: 'mario',
    age: 30,
    id: 1
}
user.name = "peach"

// type inference with objects literals

let person = {
    name: "luigi",
    age: 28,
    isFictional: true
}

// functions 

function addTwoNumbers(a: number, b: number):number {
    return a + b
}

const subTwoNumbers = (a:number, b:number):number => {
    return a - b
}
console.log(addTwoNumbers(5, 10), subTwoNumbers(10, 5))

function addAllNumbers(items: number[]) {
    const total:number = items.reduce((a, c)=> a + c, 0)
    console.log(total)
}
addAllNumbers([1,2,3,4,5,56])

// return type inference

function formatGreeting(name:string, greeting:string):string {
    return `${greeting}, ${name}`
}
console.log(formatGreeting(`mario`,`hi`))

//any type

let car: any

car = `honda`
car = true

//any type in array

let cars: any[]

cars = [12, `honda`, true]
cars.push(null)
console.log(cars)

function anyTogether(value: any):any {
    return value + value
}
const resultOne: string = anyTogether(`hi`)
const resultTwo = anyTogether(1)

// tuples

let character: [string, number, boolean] = [`mario`, 20, true]

let hsla: [number, string, string, number]
hsla = [200, `100%`, `50%`, 1]

let cord: [number, number]

cord = [83, 92]

// name tuples

let newUser: [name: string, age: number]
newUser = [`peach`, 25]
console.log(newUser[0])

//interface 

interface Author {
    name: string,
    avatar: string
}
const authorOne: Author = {
    name:`mario`, 
    avatar: `/img/mario.png`
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: `first post`,
    body: `hi`,
    tags: [`post`, `greeting`],
    create_at: new Date(),
    author: authorOne
}

function createPost(post: Post): void {
    console.log(`created post: ${post.title} by ${post.author.name}`)
}
createPost(newPost)

// interface with array

let posts: Post[] = []

posts.push(newPost)

//type aliases
//ex1- tuple
type RGB = [number,number,number]
function getRandomColor(): RGB {
    const r = Math.floor(Math.random() *255)
    const g = Math.floor(Math.random() *255)
    const b = Math.floor(Math.random() *255)
    return [r,g,b]
}
const colorOne = getRandomColor()
console.log(colorOne)

//ex2 - obj literal

type User = {
    name: string
    score: number
}
const userOne: User = {
    name: `Mario`,
    score: 32
}
function formatUser(user: User) {
    return `${user.name} has a score of ${user.score}`
}
console.log(formatUser(userOne))

// union types

let someID: number | string

someID = 1
someID = `2`

let email: string | null = null
email = `example@gmail.com`
email = null

type ID = number | string

let anotherID:ID
anotherID = `2398479823owier`
anotherID = 9812

//union type pitfall

function swapIDType(id:ID):ID {
    parseInt(`2`) //! error with `2` replace with id
    return (id)
}
swapIDType(`5`)

//tagged interfaces

function swapIDTypeTwo(id:ID):ID {
    if (typeof id === `string`) {
        //can use string method
        return parseInt(id)
    } else {
        //can use number method
        return id.toString()
    }
}
const idOne = swapIDTypeTwo(1)
const idTwo = swapIDTypeTwo(`2`)
console.log(idOne, idTwo)

// tagged interface

interface UserTwo {
    type: `user`
    username: string
    email: string
    id: ID
}

interface Person {
    type: `person`
    firstName: string
    age: number
    id: ID
}

function logDetails (value: UserTwo | Person) {
    if (value.type === `user`) {
        return console.log(value.email, value.username)
    }
    return console.log(value.age, value.firstName)
}
