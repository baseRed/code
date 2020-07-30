Function.prototype.myapply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(args)
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

bar.myapply(null); // 2

console.log(bar.myapply(obj, ['kevin', 18]));
// 1