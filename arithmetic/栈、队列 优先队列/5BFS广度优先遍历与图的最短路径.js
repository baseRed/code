// 279

// 给定正整数 n，找到若干个完全平方数
// （比如 1, 4, 9, 16, ...）使得它们的和等于 n。
// 你需要让组成和的完全平方数的个数最少。

// 示例 1:

// 输入: n = 12
// 输出: 3 
// 解释: 12 = 4 + 4 + 4.
// 示例 2:

// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9.


var numSquares = function(n) {
    let queue = [] 

    queue.push([n,0])

    // 
    let visited = []
    visited.length = n+1
    visited.fill(false,0,n)
    visited[n] = true

    while(queue.length !== 0){
        let num = queue[0][0]
        let step = queue[0][1]
        queue.shift()

        for(let i=1;;i++){
            let a = num - i*i
            if(a<0){
                break
            }
            if(a===0){
                return step + 1
            }
            if(!visited[a]){
                queue.push([a,step+1])
                visited[a] = true
            }
            
        }
    }
};


// 127 126 