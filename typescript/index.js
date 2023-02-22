// function sum(x:number, y:number):number{
//     return x + y
// }
// console.log(sum(4,5))
var P = /** @class */ (function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.info = function () {
    console.log(this.name, this.age);
  };
  return Person;
})();

var p1 = new P("jhon doe", 6);
p1.info();
