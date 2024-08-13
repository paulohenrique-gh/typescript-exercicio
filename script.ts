// Exercício 1
function printDescription(
  studentName: string,
  age: number,
  isMusician: boolean,
  favoriteLanguages: string[]
): string {
  return `${studentName} is ${age} years old${
    isMusician ? ", plays an instrument, " : ""
  }and their favorite languages are ${favoriteLanguages.join(", ")}`;
}

let studentName: string = "Honster Munter";
let age: number = 32;
let playsInstrument: boolean = true;
let languages: string[] = ["Java", "TypeScript"];

console.log(printDescription(studentName, age, playsInstrument, languages));

// Exercício 2
interface Book {
  title: string;
  author: string;
  numPages: number;
  isAvailable: boolean;
}

function describeBook(book: Book): string {
  return `The book ${book.title}, written by ${book.author}, is ${
    book.numPages
  } pages long and is currently ${
    book.isAvailable ? "available" : "unavailable"
  }`;
}

let book = {
  title: "The Way of Kings",
  author: "Brandon Sanderson",
  numPages: 1258,
  isAvailable: true,
};

console.log(describeBook(book));

// Exercício 3
function calculateCircleArea(radius: number = 1): number {
  return Math.PI * (radius * radius);
}

console.log(calculateCircleArea(4));
console.log(calculateCircleArea());

// Exercício 4
function repeatString(str: string, times: number = 2): void {
  console.log(str.repeat(times));
}

repeatString("card");
repeatString("bow", 22);

// Exercício 5
interface Person {
  name: string;
  age: number;
  profession: string;
}

function describePerson(person: Person): string {
  return `${person.name} is a ${person.age} years old ${person.profession}`;
}

let person: Person = {
  name: "Wit",
  age: 100,
  profession: "Hopper",
};

console.log(describePerson(person));

// Exercício 6
interface Product {
  name: string;
  price: number;
  category: string;
}

function filterEletronicProducts(products: Product[]): Product[] {
  return products.filter((product) => product.category === "electronic");
}

let products: Product[] = [
  {
    name: "TV",
    price: 2000,
    category: "electronic",
  },
  {
    name: "Desk",
    price: 900,
    category: "furniture",
  },
  {
    name: "Keyboard",
    price: 250,
    category: "electronic",
  },
];

console.log(filterEletronicProducts(products));

// Exercícios 7 e 8
class Car {
  make: string;
  model: string;
  year: number;

  static carCount: number = 0;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    Car.carCount++;
  }

  public describe(): void {
    console.log(`${this.make} ${this.model}, year ${this.year}`);
  }

  public static getCarCount(): number {
    return Car.carCount;
  }
}

let car1: Car = new Car("Toyota", "Corolla", 2005);
car1.describe();
let car2: Car = new Car("Honda", "Civic", 2011);
console.log(Car.getCarCount());

// Exercício 9
class Animal {
  makeSound(): string {
    return "The animal makes a sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "The dog barks";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "The cat meows";
  }
}

let myAnimal: Animal = new Animal();
let myDog: Dog = new Dog();
let myCat: Cat = new Cat();

console.log(myAnimal.makeSound());
console.log(myDog.makeSound());
console.log(myCat.makeSound());

// Exercício 10
class Employee {
  name: string;
  annualSalary: number;

  constructor(name: string, annualSalary: number) {
    this.name = name;
    this.annualSalary = annualSalary;
  }

  calculateSalary(): number {
    return this.annualSalary;
  }
}

class HourlyPaidEmployee extends Employee {
  calculateSalary(): number {
    return this.annualSalary / 12 / 22 / 8;
  }
}

class MonthlyPaidEmployee extends Employee {
  calculateSalary(): number {
    return this.annualSalary / 12;
  }
}

let paidAnnualy: Employee = new Employee("Tadeu", 50000);
let paidHourly: Employee = new HourlyPaidEmployee("Renata", 45000);
let paidMonthly: Employee = new MonthlyPaidEmployee("Rubens", 60000);
console.log(paidAnnualy.calculateSalary());
console.log(paidHourly.calculateSalary());
console.log(paidMonthly.calculateSalary());

// Exercício 11
function getFirstElement<T>(elements: T[]): T | undefined {
  if (elements.length) {
    return elements[0];
  }
  return undefined;
}

let words: string[] = ["big", "bang", "combo"];
let numbers: number[] = [2, 43, 89];
let objects: object[] = [{ name: "object 1" }, { name: "object 2" }];

console.log(getFirstElement(words));
console.log(getFirstElement(numbers));
console.log(getFirstElement(objects));

// Exercício 12
class Box<T> {
  elements: T[] = [];

  add(element: T): void {
    this.elements.push(element);
  }

  getElements(): T[] {
    return this.elements;
  }
}

let strValue: string = "Theater";
let objValue: object = { name: "Object" };

let numberBox: Box<number> = new Box();
numberBox.add(44);
numberBox.add(55);
console.log(numberBox.getElements());

let stringBox: Box<string> = new Box();
stringBox.add("Dream");
stringBox.add("Theater");
console.log(stringBox.getElements());

let objectBox: Box<object> = new Box();
objectBox.add({ name: "Object 1" });
objectBox.add({ name: "Object 2" });
console.log(objectBox.getElements());

// Exercício 13
type Coordinates = [number, number];

function calculateDistance(coordinates: Coordinates): number {
  let [x, y] = coordinates;
  let result = Math.sqrt(x * x + y * y);
  return result;
}

console.log(calculateDistance([4, -4]));

// Exercício 14
enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function weekdayOrWeekend(day: Days): string {
  if (day === Days.SATURDAY || day === Days.SUNDAY) {
    return "weekend";
  }

  return "weekday";
}

console.log(weekdayOrWeekend(Days.TUESDAY));
console.log(weekdayOrWeekend(Days.SUNDAY));

// Exercício 15
function getMinAndMaxNumbers(numbers: number[]): [number, number] {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return [min, max];
}

console.log(getMinAndMaxNumbers([43, 84, 3, 99, 300, 78]));

// Exercício 16
function filterProductsByPrice(
  products: Product[],
  minPrice: number
): Product[] {
  return products.filter((product) => product.price > minPrice);
}

let products2: Product[] = [
  {
    name: "Product 1",
    price: 1014,
    category: "Furniture",
  },
  {
    name: "Product 2",
    price: 871,
    category: "Furniture",
  },
  {
    name: "Product 3",
    price: 939,
    category: "Furniture",
  },
];

console.log(filterProductsByPrice(products2, 900));

// Exercício 17
function reverseWordOrder(str: string): string {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWordOrder("train of thought is a great album"));

// Exercício 18
function countVowels(str: string) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str.split("").reduce((acc, cur) => {
    if (vowels.includes(cur)) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

console.log(countVowels("once upon a time"));

// Exercício 19
function getData(): Promise<string> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.5) return resolve("Exercise 19: Ok!");
      return reject("Exercise 19: Fail!");
    }, 500)
  );
}

async function printResult(): Promise<void> {
  try {
    console.log(await getData());
  } catch (e) {
    console.error(e);
  }
}

printResult();

// Exercício 20
let promise1: Promise<string> = new Promise((resolve) =>
  setTimeout(() => resolve("Exercise 20, promise 1 resolved"), 300)
);
let promise2: Promise<string> = new Promise((resolve) =>
  setTimeout(() => resolve("Exercise 20, promise 2 resolved"), 400)
);

interface PromiseResult {
  results: string[];
}

let values: Promise<PromiseResult> = Promise.all([promise1, promise2]).then(
  (results) => ({ results })
);

async function printValues(): Promise<void> {
  try {
    console.log(await values);
  } catch (e) {
    console.error(e);
  }
}

printValues();

// Exercício 21 e 22 no arquivo script-ex-21-22.ts

// Exercício 25
interface Profession {
  name: string;
  salary: number;
}

interface Address {
  streetName: string;
  number: number;
}

enum Roles {
  USER = "User",
  ADMIN = "Admin"
}

type User = {
  name: string;
  profession: Profession;
  address?: Address;
  role: Roles
}

let profession: Profession = {
  name: "Developer",
  salary: 5000
}
let address: Address = {
  streetName: "Carpet Street",
  number: 123
}
let role: Roles = Roles.USER;
let user: User = {name: "Peter", profession, address, role};
console.log(user.name);
console.log(user.profession);
console.log(user.address);
console.log(user.role);

// Exercício 26
function getObjectValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const student = {name: "Peter", age: 21}
console.log(getObjectValue(student, "age"));

//error TS2345: Argument of type '"lastName"' is not assignable to parameter of type '"name" | "age"'
// console.log(getObjectValue(student, "lastName")); 

// Exercício 27
function getTypeMessage(value: string | number) {
  return typeof value === "string" ? "It's a string" : "It's a number";
}

console.log(getTypeMessage("ABCD"));
console.log(getTypeMessage(123));