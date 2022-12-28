class Human {
    name: string = '';
    age: number = 0;

    sayHello(){
        console.log(`Hello, ${this.name}. age: ${this.age}`);
    }
}

var human = new Human();
human.name = "Nut";
human.age = 20;
human.sayHello();