

/*----------------------------------1 Problem Solving Start------------------------------------
 /* 
* 1. ES6 Destructuring
*Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.
 */

// 👇👇👇👇👇👇👇
  const person = {
    name : "Md Shakil Hossain",
    age : 18
  }

  let {name, age} = person;
  console.log(name); // Md Shakil Hosssain
console.log(age); // 18
/*----------------------------------1 Problem Solving End------------------------------------





/*----------------------------------2 Problem Solving Start----------------------------------*/
 /*
*2. ES6 Module
* Problem: Create a module that exports a function to calculate the area of a circle and import it into another file. */

// 👇👇👇👇👇👇👇

import { circle } from "./module.js";
circle();

/*----------------------------------2 Problem Solving End----------------------------------*/


/*----------------------------------3 Problem Solving Start----------------------------------*/

class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return this.height * this.width;
    }
}
const Area = new Rectangle(25,18);
console.log(Area.calculateArea());
/*----------------------------------3 Problem Solving End----------------------------------*/




/*----------------------------------4 Problem Solving Start----------------------------------*/

const Person = {
    firstName: "Md Shakil",
    lastName: "Hossain",
    fullname: "",
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    set fname(fullname){
       this.fullname = fullname;
    }
}
Person.fname = "Mehedi Hasan";
console.log(Person.fullName + "\n" + Person.fullname);

/*----------------------------------4 Problem Solving End----------------------------------*/


/*----------------------------------5 Problem Solving Start----------------------------------*/

let Circle = class{
    constructor(z){
        this.radius = z;
    }
    circumference(){
        let res = 2 * Math.PI * this.radius;
        return res.toFixed(2);
    }
}
const radius = new Circle(2);
console.log(radius.circumference());
/*----------------------------------5 Problem Solving End----------------------------------*/




/*--------------------------------  6 Problem Solving Start----------------------------------*/

//NO- 6 {Computed Properties}
let firstName = "fname";
let lastName = "lname";
let profession = "prof";
const userInfo = {
    [firstName]: "Md Shakil",
    [lastName]: "Hosssain",
    [profession]: "programmer and SEO Expert"
}
console.log(`Hey My name is ${userInfo.fname} ${userInfo.lname} and I'm a ${userInfo.prof}`);

/*---------------------------------- Problem Solving End----------------------------------*/


/*---------------------------------- Problem Solving Start----------------------------------*/

class cat {

    constructor(animalName){
        this.animalName = animalName;
    }
    result(){
        return `This animal name is ${this.animalName}`
    }
}

class Animal extends cat {

    constructor(animalName,animalOld){
        super(animalName);
        this.animalOld = animalOld;
    }
    show(){
        return `${this.result()} and ${this.animalName} is ${this.animalOld} years old.` 
    }
}

const animalName1 = new Animal("dog",25);
console.log(animalName1.show());

/*---------------------------------7 Problem Solving Start----------------------------------*/


/*---------------------------------8 Problem Solving Start----------------------------------*/
class Shapes {
    constructor(name) {
      if (!new.target.name) {
          throw 'Must use new operator';
        }
        console.log(this.name = name)
    }
}
let Shakil = new Shapes("Shakil");

/*---------------------------------8 Problem Solving Start----------------------------------*/



/*---------------------------------8 Problem Solving Start----------------------------------*/
class MathUtil {
   static square(m){
    return m * m;
   }
}
console.log(MathUtil.square(10));

/*---------------------------------9 Problem Solving Start----------------------------------*/


/*---------------------------------10 Problem Solving Start----------------------------------*/

const sym = Symbol();
const obj = {
    [sym] : "Md Shakil"
}
console.log(obj[sym]);
/*---------------------------------10 Problem Solving Start----------------------------------*/
