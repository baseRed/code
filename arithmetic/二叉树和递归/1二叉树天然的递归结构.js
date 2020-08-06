
// 给定key，查找是否存在于二叉树

function contain(node,key){
    if(node === null){
        return false
    }

    if(key === node.key){
        return true
    }

    if(contain(node.left.key,key) || contain(node.right.key,key)){
        return true
    }

    return false
}

// 二叉树内存释放(清空二叉树)

function destory(node){
    if(node === null){
        return
    }

    destory(node.left)
    destory(node.right)


    node =null


}


// 104

// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

var maxDepth = function(root) {
    if(!root){
        return 0
    }

    let leftMaxDepth = maxDepth(root.left)
    let rightMaxDepth = maxDepth(root.right)
    return Math.max(leftMaxDepth,rightMaxDepth) + 1
};