import Person, { isPerson } from '../src/Person.js';
import * as Person1 from '../src/Person.js';

describe('Person test suite', () => {
  it('test static module import', () => {
    const person = new Person('John', 42);
    console.log(person.toString());
    console.log(`isPerson: ${isPerson}`);
  });

  it('test dynamic module import', async () => {
    const Person2 = await import('../src/Person.js');
    const person = new Person2.default('John', 42);
    console.log(person.toString());
    console.log(`isPerson: ${Person2.isPerson}`);

    console.log(Person1 === Person2);
  });
});
