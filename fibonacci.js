//Iteration method

function fibs(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        if (i===0 || i===1){
            arr.push(i);
        }
        else{
            let result = arr[i-1] + arr[i-2];
            arr.push(result);
        }
    }
    console.log(arr);
}
fibs(8);