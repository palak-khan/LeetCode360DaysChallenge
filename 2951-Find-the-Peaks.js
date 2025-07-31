// Date: 33-07-2025
// Problem: 162. Find Peak Element
// bruteforce approach 100% beat
var findPeaks = function(mountain) {
    let count = 0;
    let arr = []
    for(let i = 1; i < mountain.length - 1; i++){
       if(mountain[i] > mountain [ i - 1] && mountain[i] > mountain [ i + 1]){
         arr.push(i)
        }
    }
    return arr;
};