const letterMap = [
    ' ',
    '',
    'abc',//2
    'def',//3
    'ghi',//4
    'jkl',//5
    'mno',//6
    'pqrs',//7
    'tuv',//8
    'wxyz'//9

]
// s中保存了此时从digits[0...index-1]翻译得到的一个字母字符串
// 寻找和digits[index]匹配的字母，获得digits[0...index]翻译得到的字符串
function findCombination(digits,index,s,result) {
    console.log(index,s);
    
    if(index === digits.length){
        // 保存s
        result.push(s)
        console.log('get',s,',return');
        
        return
    }
    let c = digits[index]
    let letters = letterMap[c-'0']

    for(let i in letters){
        console.log('digits[',index,']=',c,',use',letters[i]);
        
        findCombination(digits,index+1,s+letters[i],result)
    }

    console.log('digits[',index,']=',c,'complete,return');
    
    return
}
var letterCombinations = function(digits) {
    let res = []
    if(digits === ''){
        return res
    }
    findCombination(digits,0,'',res)

    return res
};

let res = letterCombinations('234')

for(let i in res){
    console.log(res[i]);
    
}


// 93 131 