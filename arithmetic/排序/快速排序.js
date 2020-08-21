function sort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0]; 
    array.forEach(item => {
        if (item < pivot) {  
            left.push(item); 
        } else {  
            right.push(item);
        }
    });
    
    return sort(left).concat(pivot, sort(right));  
}