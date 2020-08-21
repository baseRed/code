// 合并两个有序数组
function merge(a, b) {
    let m = a && a.length
    let n = b && b.length
    let res = []
    let i=j=0

    while (i<m && j<n) {
        if (a[i] < b[j]) {
            res.push(a[i++])
        } else {
            res.push(b[j++])
        }
    }

    while (i<m) {
        res.push(a[i++])
    }

    while (j<n) {
        res.push(b[j++])
    }

    return res
}


function sort(arr) {
    if (arr.length === 1) {
        return arr

    }
    let mid = Math.floor(arr.length / 2)
    let lfet = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(sort(lfet), sort(right))
}

let arr = [10, 5, 3, 8, 6]

console.log(sort(arr));

// console.log(merge([1,3],[2,4]));
