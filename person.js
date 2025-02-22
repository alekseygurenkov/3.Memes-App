class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(this.name);
    }
}

const sergey = new Person('sergey', 20);
const pavel = new Person('pavel', 30);

pavel.sayHi();