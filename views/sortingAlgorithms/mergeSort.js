const mergeSort = nums => {
    const animations = [];
    let auxiliaryArray = [...nums];
    mergeSortHelper(nums, auxiliaryArray, 0, nums.length - 1, animations);
    return animations;
};

const mergeSortHelper = (nums, auxiliaryArray, startIndex, endIndex, animations) => {
    if (startIndex === endIndex) return;
    let middleIndex = Math.floor((startIndex + endIndex) / 2) + 1;
    mergeSortHelper(auxiliaryArray, nums, startIndex, middleIndex - 1, animations);
    mergeSortHelper(auxiliaryArray, nums, middleIndex, endIndex, animations);
    doMerge(nums, auxiliaryArray, startIndex, middleIndex, endIndex, animations);
};

const doMerge = (nums, auxiliaryArray, startIndex, middleIndex, endIndex, animations) => {
    let i = startIndex,
        j = middleIndex,
        k = startIndex;

    while (i < middleIndex && j <= endIndex) {
        animations.push([[i, j]]);
        if (auxiliaryArray[i] > auxiliaryArray[j]) {
            if (k != j) {
                animations[animations.length - 1].push([k, auxiliaryArray[j]]);
            }
            nums[k++] = auxiliaryArray[j++];
        } else {
            if (k != i) {
                animations[animations.length - 1].push([k, auxiliaryArray[i]]);
            }
            nums[k++] = auxiliaryArray[i++];
        }
    }

    while (i < middleIndex) {
        animations.push([[i, i]]);
        if (k != i) {
            animations[animations.length - 1].push([k, auxiliaryArray[i]]);
        }
        nums[k++] = auxiliaryArray[i++];
    }
    while (j <= endIndex) {
        animations.push([[j, j]]);
        if (k != j) {
            animations[animations.length - 1].push([k, auxiliaryArray[j]]);
        }
        nums[k++] = auxiliaryArray[j++];
    }
};

export default mergeSort;
