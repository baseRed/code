// 24


// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

//  

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    let dummyHead = new ListNode()
    dummyHead.next = head

    let p = dummyHead

    

    while(p.next && p.next.next){
        let node1 = p.next
        let node2 = node1.next
        let next = node2.next

        node2.next = node1
        node1.next = next
        p.next = node2
        p = node1
    }

    return dummyHead.next



};

console.log(creatLinkList([1,2,3,4]));

console.log(swapPairs(creatLinkList([1,2,3,4])));


// 练习 25 147  148