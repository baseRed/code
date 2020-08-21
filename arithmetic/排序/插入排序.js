// 扑克牌
function sort(arr){

    let len = arr.length
    let preIndex,current 

    for(let i=1;i<len;i++){
        preIndex = i - 1
        current = arr[i]

        while(preIndex > -1 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex]
            preIndex --
        }

        arr[preIndex+1] = current
    }

    return arr

}


let arr = [10,5,3,8,6]

console.log(sort(arr));


 