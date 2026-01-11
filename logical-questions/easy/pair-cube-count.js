function pair_cube_count(n){
    if(typeof n !== "number" || n <= 0){
        console.log("Wrong Input");
        return 0;
    }
    let count = 0;
    for(let i = 1; i*i*i < n; i++){
        for(let j = 1; j*j*j < n; j++){
            if(i*i*i + j*j*j === n){
                count++;
            }
        }
    }
    return count;

}
let result = pair_cube_count(9);
console.log(result);