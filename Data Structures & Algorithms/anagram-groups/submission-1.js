class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const length = strs.length
        const map = {}
        for(let i=0 ;i<length ; i++) {
            const data = strs[i].split('').sort().join('')

            if (!map[data]) {
                map[data] = [];
            }

            map[data].push(strs[i])
        }
        return  Object.values(map)
    }
}
