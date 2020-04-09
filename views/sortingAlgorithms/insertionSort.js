const insertionSort = nums => {
    let lengthOfArray = nums.length;
    let animations = [];
    for (let i = 1; i < lengthOfArray; i++) {
        let tmp = nums[i],
            j;
        for (j = i - 1; j >= 0; j--) {
            if (nums[j] > tmp) {
                nums[j + 1] = nums[j];
            } else {
                break;
            }
        }
        nums[j + 1] = tmp;
    }
    return nums;
};

export default insertionSort;
