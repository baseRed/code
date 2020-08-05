// 283题


// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

 
// var moveZeroes = function(nums) {
//     // 时间复杂度：O(n)
//     // 空间复杂度：O(n)
//     let nonZeroElements = []
//     for(let i in nums){
//         if(nums[i] !== 0){
//             nonZeroElements.push(nums[i])
//         }
//     }

//     for(let i in nonZeroElements){
//         nums[i] = nonZeroElements[i]
//     }

//     for(let i = nonZeroElements.length;i<nums.length;i++){
//         nums[i] = 0
//     }

//     return nums
// };

// var moveZeroes = function(nums) {
//     // 时间复杂度：O(n)
//     // 空间复杂度：O(1)
//    let k = 0; //nums中,[0...k)的元素均为非0元素
//    for(let i in nums){
//        if(nums[i] !== 0){
//            nums[k++] = nums[i]
//        }
//    }

//    for(let i=k;i<nums.length;i++){
//        nums[i] = 0
//    }

//     return nums
// };

function swap(x,y,arr){
    let a = arr[x]
    arr[x] = arr[y]
    arr[y] = a
    return arr
    
}
var moveZeroes = function(nums) {
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)
   let k = 0; //nums中,[0...k)的元素均为非0元素
   for(let i in nums){
       if(nums[i] !== 0){
            if(i !== k){
                swap(k++,i,nums)
            }else{
                k++
            }
       }
   }

   
    return nums
};

console.log(moveZeroes([0,1,0,3,12]));


// 练习 27 26  80
