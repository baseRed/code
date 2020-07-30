Function.prototype.mycall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var context = context || window
    context.fn = this

    // var args = Array.prototype.slice.call(arguments,1)
    let args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }

    let result = eval('context.fn(' + args + ')')

    delete context.fn

    return result



}


Function.prototype.mycall2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    let args = [...arguments].slice(1)
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}


var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.mycall2(null); // 2

console.log(bar.mycall2(obj, 'kevin', 18));
// 1
