function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const median = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, median));
    const rightHalf = mergeSort(arr.slice(median));

    return merge(leftHalf, rightHalf);
}

function merge(L, R) {
    const sortedArray = [];
    let LIndex = 0;
    let RIndex = 0;

    while (LIndex < L.length && RIndex < R.length) {
        if (L[LIndex] < R[RIndex]) {
            sortedArray.push(L[LIndex]);
            LIndex++;
        } else {
            sortedArray.push(R[RIndex]);
            RIndex++;
        }
    }

    return sortedArray.concat(L.slice(LIndex)).concat(R.slice(RIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));          // Output: [79, 100, 105, 110]