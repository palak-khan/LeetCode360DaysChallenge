function diceProblem(n) {
  if (typeof n !== "number" || n < 1 || n > 6) {
    console.log("Invalid Input");
    return;
  }
  let ans = 7 - n;
  return ans;
//   switch (n) {
//     case 1:
//       return 6;
//     case 2:
//       return 5;
//     case 3:
//       return 4;
//     case 4:
//       return 3;
//     case 5:
//       return 2;
//     case 6:
//       return 1;
//   }
}

console.log(diceProblem(2)); 
