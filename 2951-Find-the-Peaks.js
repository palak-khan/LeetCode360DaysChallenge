// Date: 31-07-2025
// Problem: 162. Find Peak Element
// bruteforce approach 100% beat
// var findPeaks = function(mountain) {
//     let count = 0;
//     let arr = []
//     for(let i = 1; i < mountain.length - 1; i++){
//        if(mountain[i] > mountain [ i - 1] && mountain[i] > mountain [ i + 1]){
//          arr.push(i)
//         }
//     }
//     return arr;
// };

//shift 0 at left side
let arr = [1, 2, 0, 1, 3, 5, 0, 0, -5, 6, 0];
let zeroCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    zeroCount++;
  }
}
for (let i = 0; i < zeroCount; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] == 0) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

