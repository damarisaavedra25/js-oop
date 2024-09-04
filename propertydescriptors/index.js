let person = { name: 'damaris'};
// console.log(person);

// let descriptor = Object.getOwnPropertyDescriptors(person, 'name');
// console.log(descriptor)
Object.defineProperty(person, 'name', {
    value: 'Travels',
    writable: false,
    enumerable: false,
    configurable: false,
})
console.log(person);

person.name = 'damaris'