const heapSort = nums => {
    let lengthOfArray = nums.length;
    let animations = [];
    let startIndex = Math.floor((lengthOfArray - 2) / 2);
    for (let i = startIndex; i >= 0; i--) {
        heapify(nums, i, nums.length, animations);
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        animations.push([0, i]);
        let tmp = nums[0];
        nums[0] = nums[i];
        nums[i] = tmp;
        heapify(nums, 0, i, animations);
    }
    return animations;
};

const heapify = (nums, idx, maxLength, animations) => {
    while (idx < maxLength) {
        let largest = idx;
        let firstChild = idx * 2 + 1;
        let secondChild = idx * 2 + 2;
        if (firstChild < maxLength && nums[firstChild] > nums[largest]) {
            largest = firstChild;
        }
        if (secondChild < maxLength && nums[secondChild] > nums[largest]) {
            largest = secondChild;
        }
        if (largest != idx) {
            animations.push([idx, largest]);
            let tmp = nums[largest];
            nums[largest] = nums[idx];
            nums[idx] = tmp;
            idx = largest;
        } else {
            break;
        }
    }
};

export default heapSort;
