let o1 = {x:1}
const copy1 = {...o1}
o1.x = 2
console.log(copy1);//1



let o2 = {x:1}
const copy2 = Object.assign({},o2)
o2.x = 2
console.log(copy2);

