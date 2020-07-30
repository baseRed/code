Function.prototype.mybind = function (context) {

    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    let self = this
    let args = [...arguments].slice(0)
    let fn = function(){}

    let resultFn = function(){
        self.apply(this instanceof self ? this : context,[...args,...arguments])
    }

    fn.prototype = this.prototype

    resultFn.prototype = new fn()

    return resultFn

}



Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    fBound.prototype = this.prototype;
    return fBound;
}


function bar() {}

var bindFoo = bar.bind2(null);

bindFoo.prototype.value = 1;

console.log(bar.prototype.value) // 1