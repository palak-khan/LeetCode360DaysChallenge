let a = 1;
let b = 2;
console.log("a = " + a,"b = " + b);

let temp = a;
a = b;
b = temp;
[b,a] = [a,b]

a = a + b; //3
b = a - b //1
a = a - b
console.log("a = " + a, "b = " + b);