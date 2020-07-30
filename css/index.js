function findIndex(arr, val) {
    let index = -1
    let result = false
    let startIndex = 0


    function find(arr1, val,startIndex) {
        let len = arr1.length
        if (len === 0) {
            return -1
        }
        if(len === 1){
            result = true
            index = arr1[0] === val ? startIndex : -1
            return startIndex
        }
        let mid = Math.floor(len / 2)
        let leftArr = arr1.slice(0, mid)
        let rightArr = arr1.slice(mid, len)

        if (val === arr1[mid]) {
            index = mid + startIndex
            result = true
            return index
        } else if (val > arr1[mid]) {
            startIndex += mid
            find(rightArr, val, startIndex)
        } else {
            startIndex += mid - leftArr.length
            find(leftArr, val, startIndex)
        }
    }

    find(arr, val,startIndex)

    return index
}