class Person {
    name: string = ""
    constructor(name: string) { 
        this.name = name
    }
    sayHi(): void{
        console.log("Hello "+this.name);
    }
}

class Employee extends Person {
    salary: number = 0;
    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary;
    }
    sayHi(): void {
        super.sayHi();
        console.log("Salary "+this.salary);
    }
}
const employee = new Employee("Nut", 2000);
employee.sayHi();
