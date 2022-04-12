const variable = [50, 60, 70, 80];
console.log('value is', variable);

variable.push(10);
console.log('value is', variable);

variable.unshift(20);
console.log('value is', variable);


/** Special assignment operator ??= , where RHS will be assigned only if LHS is null or undefined */
let x;
let z = 15;
const y = 10;
x ??= y;
z ??= y;

console.log(x, y, z);