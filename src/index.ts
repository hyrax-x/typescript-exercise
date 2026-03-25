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