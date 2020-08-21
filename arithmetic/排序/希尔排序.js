function sort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    var f = s = t = 0    
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        f++
        for (var i = gap; i < len; i++) {
            s++
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
                t ++
            }
            arr[j+gap] = temp;
        }
    }

    console.log(f,s,t);
    
    return arr;
}

let arr = [1,2,3,8,6]

console.log(sort(arr));

// 为历届