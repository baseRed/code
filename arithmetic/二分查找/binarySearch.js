function binarySearch(arr,target){
    let l = 0,r = arr.length - 1; //在[l...r]的范围里寻找target
    while(l <= r){  //当l=r时，区间[l...r]依然有效
        let mid = l + parseInt((r - l) / 2) //避免相加整型溢出
        if(arr[mid] === target){
            return mid
        }

        if(target > arr[mid]){
            l = mid + 1
        }

        if(target < arr[mid]){
            r = mid - 1
        }

    }

    return -1
}

function binarySearchDeep(arr,target){
    if(arr.length === 0){
        return -1
    }
    function find(arr,l,r,target){
        if(l > r){
            return -1
        }
        let mid = l + parseInt((r - l) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] > target){
            return find(arr,l,mid-1,target)
        }else{
            return find(arr,mid+1,r,target)
        }
    }

    return find(arr,0,arr.length-1,target)
    
}

let arr = [1,3,4,7,44,66]
console.log(binarySearchDeep(arr,3));
console.log(binarySearchDeep(arr,44));
console.log(binarySearchDeep(arr,55));


