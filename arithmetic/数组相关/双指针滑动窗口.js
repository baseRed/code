// 209

// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

//  

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 方法一
// 暴力解法：遍历所有的连续子数组【i...j】
// 计算其和sum,验证sum》=s
// 时间复杂度O(n^3)
// 优化为O(n^2)


var minSubArrayLen = function(s, nums) {
    let l=0,r=-1,sum=0,res=nums.length + 1
    while(l < nums.length){
        if(r+1 < nums.length && sum < s){
            sum += nums[++r]
        }else{
            sum -= nums[l++]
        }

        if(sum >= s){
            res = Math.min(res,r-l+1)
        }

        
    }

    if(res === nums.length + 1){
        return 0
    }

    return res
};