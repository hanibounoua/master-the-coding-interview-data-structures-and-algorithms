// Tow sums index:

function twoSum(nums: number[], target: number): number[] {
    let complement: number;
    let complements_index: { [key: number]: number } = {};

    for (let i: number = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (complements_index.hasOwnProperty(complement)) {
            return [complements_index[complement], i];
        }
        complements_index[nums[i]] = i;
    }
    return [];
};

function sum(nums: number[]): number{
    let theSum: number = 0;
    for (let i:number = 0; i < nums.length; i++) {
        theSum += nums[i];
    }
    return theSum;
}

function maxSubArray(nums: number[]): number {
    let max_subarray: number[] = [];
    let max_subarray_sum: number = sum(nums);

    

    return max_subarray_sum;
};

let nums: number[] = [-2,1,-3,4,-1,2,1,-5,4];
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
console.log(maxSubArray(nums));