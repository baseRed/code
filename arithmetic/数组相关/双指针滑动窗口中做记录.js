// 3

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

var lengthOfLongestSubstring = function(s) {
    let freq = []
    freq.length = 256
    freq.fill(0,0,256)
    let l=0,r=-1
    let res = 0

    while(l < s.length){
        if(r+1<s.length && freq[s[r+1].charCodeAt()] ===0){
            freq[s[++r].charCodeAt()] ++
        }else{
            freq[s[l++].charCodeAt()] --
        }

        res = Math.max(res,r-l+1)
    }

    return res
};

console.log(lengthOfLongestSubstring('abcabcbb'));

// 练习 438  76
