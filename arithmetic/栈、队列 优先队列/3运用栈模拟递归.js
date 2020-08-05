// 144

// 给定一个二叉树，返回它的 前序 遍历。

//  示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 

// 输出: [1,2,3]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 class Command{
     constructor(s,node){
        this.s = s
        this.node = node
     }
 }

var preorderTraversal = function(root) {
    let res = []

    if(root === null){
        return res
    }

    let stack = []
    stack.push(new Command('go',root))
    
    while(stack.length !== 0){
        let command = stack.pop()

        if(command.s === 'print'){
            res.push(command.node.val)
        }else{
            if(command.node.right){
                stack.push(new Command('go',command.node.right))
            }

            if(command.node.left){
                stack.push(new Command('go',command.node.left))
            }

            stack.push(new Command('print',command.node))
        }
    }

    return res

    


};

// 练习341
