export default class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `${this.name}: ${this.age}`;
  }
}

export const isPerson = true;
