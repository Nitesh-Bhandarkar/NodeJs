Data types in JS:
--> String
--> Number
--> Boolean
--> Undefined
--> Null
--> Symbol

Object type in JS

const car = {}

**** Cloning an Object ****

const obj1 = Object.assign({}, obj2);

Obj2 is cloned as obj1

**** Array Operations ****

const fruitBasket = ['apple','banana','orange']
// get the length of the Array
console.log(fruitBasket.length);
// 3

// add a new value at the end of the array
fruitBasket.push('pear')
console.log(fruitBasket);
// ["apple", "banana", "orange", "pear"]

// add a new value at the beginning of the array
fruitBasket.unshift('melon')
console.log(fruitBasket);
// ["melon", "apple", "banana", "orange", "pear"]

// remove a value from the end of the array
fruitBasket.pop()
console.log(fruitBasket);
// ["melon", "apple", "banana", "orange"]

// remove a value from the beginning of the array
fruitBasket.shift()
console.log(fruitBasket);
// ["apple", "banana", "orange"]