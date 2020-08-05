function ListNode(val) {
    this.val = val;
    this.next = null;
}

function creatLinkList(arr){
    if(arr.length === 0){
        return null
    }

    let head = new ListNode(arr[0])

    let curNode = head

    for(let i = 1;i<arr.length;i++){
        curNode.next = new ListNode(arr[i])

        curNode = curNode.next
    }

    return head
}

// let arr = [1,2,3,4,5]
// let linkList = creatLinkList(arr)

// while (linkList){
//     console.log(linkList.val);
//     linkList = linkList.next
    
// }