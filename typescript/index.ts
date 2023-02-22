// function sum(x:number, y:number):number{
//     return x + y
// }
// console.log(sum(4,5))


class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    info(){
        console.log(this.name,this.age);
    }
}

let p1 = new Person("jhon doe",69);
p1.info()