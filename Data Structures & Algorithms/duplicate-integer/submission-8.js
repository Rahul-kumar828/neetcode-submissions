class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const length = nums.length;
         const data = [...new Set(nums)].length
         if (length > data) {
            return true
         } else {
            return false
         }
    }
}
