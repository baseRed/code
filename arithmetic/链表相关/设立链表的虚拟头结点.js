// 203

// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    // while(head && head.val === val){
    //     let deleteNode = head
    //     head = deleteNode.next
    // }

    // if(!head){
    //     return head
    // }

    // let cur = head

    let dummyHead = new ListNode()
    dummyHead.next = head

    let cur = dummyHead

    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }

        
    }

    // return head
    return dummyHead.next
};



let head = creatLinkList([1,1])

console.log(removeElements(head,1));



// 练习 82 21 