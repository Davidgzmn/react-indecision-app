class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    sayName() {
        return `my name is ${this.name}`;
    }
    getGreeting(){
        return `Hello there, my name is ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} ${this.age == 1 ? "year" : "years"} old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;  
    }
    getDescription(){
        let description = super.getDescription();
        if(this.major){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student("David", 28, "Animation and Digital Art");
const me2 = new Traveler("David", 28, "Guadalajara, Jalisco" );
const me3 = new Student("Brian", 29);
console.log(me);
console.log(me2);