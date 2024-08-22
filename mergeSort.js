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