// 17

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 2 abc   3 def   4 ghi   5 jkl   6 mno   7 pqrs   8 tuv  9 wxyz  


// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


const letterMap = [
    ' ',
    '',
    'abc',//2
    'def',//3
    'ghi',//4
    'jkl',//5
    'mno',//6
    'pqrs',//7
    'tuv',//8
    'wxyz'//9

]
// s中保存了此时从digits[0...index-1]翻译得到的一个字母字符串
// 寻找和digits[index]匹配的字母，获得digits[0...index]翻译得到的字符串
function findCombination(digits,index,s,result) {
    if(index === digits.length){
        // 保存s
        result.push(s)
        return
    }
    let c = digits[index]
    let letters = letterMap[c-'0']

    for(let i in letters){
        findCombination(digits,index+1,s+letters[i],result)
    }

    return
}
var letterCombinations = function(digits) {
    let res = []
    if(digits === ''){
        return res
    }
    findCombination(digits,0,'',res)

    return res
};