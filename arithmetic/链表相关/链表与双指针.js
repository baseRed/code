// 19

// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


//  方法一  遍历链表长度 计算删除正数第几个


var removeNthFromEnd = function(head, n) {
    let dummyhead = new ListNode()
    dummyhead.next = head

    let p = dummyhead
    let q = dummyhead

    for(let i=0;i<n+1;i++){
        q = q.next
    }

    while(q !== null){
        p = p.next
        q = q.next
    }

    let delnode = p.next
    p.next = delnode.next

    return dummyhead.next
};

// 练习 61  143 