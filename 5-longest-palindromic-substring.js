var arr = [1, 1, 2, 2, 3, 3, 4,4,50, 65, 65];


let start = 0;
let end = arr.length - 1;

while (end > start) {
  let mid = start + Math.floor((end - start) / 2);

  if(mid % 2 == 1)mid--;

  if(arr[mid] == arr[mid + 1]) start = mid + 2;
  else end = mid;   



//   if (arr[mid] == target) {
//     return console.log(mid,arr[mid]);
//   } else if (arr[mid] > target) {
//     end = mid - 1;
//   } else {
//     start = mid + 1;
//   }
}
console.log(arr[start], " at index ", start);


