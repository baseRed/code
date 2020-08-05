// 队列的基本应用-广度优先遍历
// 树:  层序遍历
// 图:  无权图的最短路径

// 102

// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//  

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []

    if(!root){
        return res
    }

    let queue = []

    queue.push([root,0])

    while(queue.length !== 0){
        let node = queue[0][0]
        let level = queue[0][1]

        queue.shift()

        // 还不存在
        if(level === res.length){
            res.push([])
        }
        console.log(res,level);
        
        res[level].push(node.val)

        if(node.left){
            queue.push([node.left,level+1])
        }

        if(node.right){
            queue.push([node.right],level+1)
        }

    }

    return res
};


// 107 103 199