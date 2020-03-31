const mergeSort = nums => {
    if (nums.length === 1) return nums;

    let mid = Math.floor(nums.length / 2);

    const leftArray = mergeSort(nums.slice(0, mid));
    const rightArray = mergeSort(nums.slice(mid));
    const resultantArray = [];

    let i = 0,
        j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            resultantArray.push(leftArray[i]);
            i++;
        } else {
            resultantArray.push(rightArray[j]);
            j++;
        }
    }

    while (i < leftArray.length) {
        resultantArray.push(leftArray[i]);
        i++;
    }

    while (j < rightArray.length) {
        resultantArray.push(rightArray[j]);
        j++;
    }

    return resultantArray;
};

export default mergeSort;
