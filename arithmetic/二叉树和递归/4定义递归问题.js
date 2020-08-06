// 257

// 给定一个二叉树，返回所有从根节点到叶子节点的路径。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]

// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    let result = []

    if(root === null){
        return result
    }

    if(root.left===null && root.right===null){
        result.push(root.val.toString())
        return result
    }

    let leftS = binaryTreePaths(root.left)
    for(let i in leftS){
        result.push(root.val.toString() + '->' + leftS[i])
    }

    let rightS = binaryTreePaths(root.right)
    for(let i in rightS){
        result.push(root.val.toString() + '->' + rightS[i])
    }

    return result

};


// 113 129 