const bubbleSort = nums => {
    let lengthOfArray = nums.length;
    let animations = [];
    for (let i = lengthOfArray - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            animations.push({ indexes: [j, j + 1], swap: false });
            if (nums[j] > nums[j + 1]) {
                animations[animations.length - 1].swap = true;
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return animations;
};

export default bubbleSort;
