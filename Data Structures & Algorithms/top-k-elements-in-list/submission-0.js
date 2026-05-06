class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map= {}
        for(let num of nums){
            map[num]=(map[num]||0)+1
        }
        const data =Object.entries(map).sort((a,b)=>b[1]-a[1])
        const reuired = []
        for(let i=0; i<k ;i++ ){
            reuired.push(Number(data[i][0]))
        }
        return reuired

    }
}
