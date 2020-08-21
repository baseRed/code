function sort(arr){

    for(let i=0;i<arr.length;i++){
        for(let k=1;k<arr.length - i -1;k++){
            if(arr[k] > arr[k+1]){
                [arr[k],arr[k+1]] = [arr[k+1],arr[k]]
            }
        }
    }

    return arr

}

let arr = [1,5,3,8,6]

console.log(sort(arr));
