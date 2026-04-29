class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false
        }
        const isValid = s.split('').sort().join('') === t.split('').sort().join('')
        if(isValid) {
            return true
        }else {
            return false
        }
    }
}
