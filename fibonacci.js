// Iteration method

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




// Recursion method

function fibsRec(n) {
    if(n <= 0) return [];
    if(n === 1) return [0];
    if(n === 2) return [0, 1];

    const currFib = fibsRec(n - 1);
    const nextFib = currFib[currFib.length - 1] + currFib[currFib.length - 2];
    currFib.push(nextFib);

    return currFib;
}

console.log(fibsRec(8));