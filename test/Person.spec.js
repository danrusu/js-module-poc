import fs from 'node:fs/promises';
import { expect } from 'chai';

import Person, { isPerson } from '../src/Person.js';
import * as Person1 from '../src/Person.js';

describe('Module test suite', () => {
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
    expect(Person1).equals(Person2);

    console.log(`Module prototype: ${Object.getPrototypeOf(Person2)}`); // prototype is null
    expect(Object.getPrototypeOf(Person2)).to.be.null;
  });

  it('test import.meta', async () => {
    console.log(import.meta);

    // ES module: use URLs rather than filesystem paths for working with files
    const fileURL = new URL('../resources/message.txt', import.meta.url);
    const message = await fs.readFile(fileURL, 'utf8');
    expect(message).equals('Hello world!');
  });
});
