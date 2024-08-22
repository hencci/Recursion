function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const median = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, median));
    const rightHalf = mergeSort(arr.slice(median));
}

function merge(L, R) {
    const sortedArray = [];
    let LIndex = 0;
    let RIndex = 0;
}