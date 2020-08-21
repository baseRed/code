function sort(arr){

    for(let i=0;i<arr.length;i++){
        let min = arr[i+1]
        let minIndex = i + 1
        for(let k=i+1;k<arr.length;k++){
            if(arr[k]<min){
                min = arr[k]
                minIndex = k
            }
        }
        console.log(min);
        
        if(arr[i]>min){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }

    return arr

}

let arr = [10,5,3,8,6]

console.log(sort(arr));