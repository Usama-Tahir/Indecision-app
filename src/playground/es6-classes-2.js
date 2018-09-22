class Person {
    constructor(name = 'default user', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return [this.name, this.age];
    }
    getDescription() {
        return ` Hello my name is ${this.name} and I am ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major;
    }

    hasMajor() {
        return [this.major ? 'Yes Papa' : 'No Papa', !!this.major];
    }
    getDescription() {
        let description =  super.getDescription();
        if(this.hasMajor()) {
            description += `. My major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let data = super.getGreeting();
        if(this.hasHomeLocation()) {
            data += `.My home location is: ${this.homeLocation}. Tada!`; 
        }
        return data;
    }

}
const me = new Traveler('Usama Tahir', 23, 'Switzerland');
console.log(me.getGreeting());