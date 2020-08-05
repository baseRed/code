// 75
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 注意:
// 不能使用代码库中的排序函数来解决这道题。

// 输入: [2,0,2,1,1,0]
// 输出: [0,0,1,1,2,2]

// var sortColors = function(nums) {
//     let count = [0,0,0]
//     for(let i in nums){
//         count[nums[i]] ++
//     }

//     let index = 0
//     for(let i=0;i<count[0];i++){
//         nums[index++] = 0
//     }

//     for(let i=0;i<count[1];i++){
//         nums[index++] = 1
//     }

//     for(let i=0;i<count[2];i++){
//         nums[index++] = 2
//     }

//     return nums

// };
// 如果数字种类100,1000个？

function swap(x,y,arr){
    let a = arr[x]
    arr[x] = arr[y]
    arr[y] = a
    return arr
    
}
var sortColors = function(nums) {
    let zero=-1,two=nums.length
    for(let i=0;i<two;){
        if(nums[i] === 1){
            i ++
        }else if(nums[i] === 2){
            two --
            swap(i,two,nums)
        }
        else{
            zero ++
            swap(zero,i,nums)
            i++
        }
    }

    return nums
};

// 练习88  215