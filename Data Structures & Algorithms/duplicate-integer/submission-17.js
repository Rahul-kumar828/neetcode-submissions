class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const data = [...new Set(nums)].length
        if(nums.length === data){
            return false
        } else {
            return true
        }
    }
}
