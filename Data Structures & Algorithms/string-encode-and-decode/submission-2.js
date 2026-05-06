class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let stringData = ''
        for(let str of strs){
        stringData +=str.length + '#' + str
        }
        return stringData
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
    let i = 0

    while (i < str.length) {

        let num = ""
        while (str[i] !== '#') {
            num += str[i]
            i++
        }

        let len = Number(num)

        i++

        res.push(str.slice(i, i + len))

        i += len
    }

    return res
    }
}
