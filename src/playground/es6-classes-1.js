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

const me = new Person();
console.log(me.getDescription());