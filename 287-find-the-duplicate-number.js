// Date: 1-11-2025
//  Problem: 287. Find the Duplicate Number
//  Difficulty: Medium
// Time Complexity o(n)
//         0  1  2  3  4

// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];
//   if (mySet.has(value)) {
//     console.log(arr[i]);
//     break;
//   } else {
//     console.log(mySet.add(value));
//   }
// }

// for(const n of arr){
//     if(mySet.has(n)) return console.log(n);
//     mySet.add(n)
// }

let bit = Array(10).fill(0);
let arr = [1, 3, 4, 2, 2];
for (a of arr) {
  if (bit[a] != 1) bit[a] += 1;
  else{return a}
}
console.log(bit);
