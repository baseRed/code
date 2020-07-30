const isFunction = fn => typeof fn === 'function'
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('type error')
        }

        this._status = PENDING
        this._value = undefined
        this._fulfilledQueues = []
        this._rejectedQueues = []

        try {
            handle(this._fulfill.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    _fulfill(val) {
        const run = () => {
            if (this._status !== PENDING) return
            this._status = FULFILLED

            const runFulfilled = value => {
                let cb
                while (cb = this._fulfilledQueues.shift()) {
                    cb(value)
                }
            }

            const runRejected = error => {
                let cb
                while (cb = this._rejectedQueues.shift()) {
                    cb(error)
                }
            }

            if (val instanceof MyPromise) {
                val.then(res => {
                    this._value = res
                    runFulfilled(res)

                }, err => {
                    this._value = err
                    runRejected(err)
                })
            } else {
                this._value = val
                runFulfilled(val)
            }



        }

        setTimeout(run, 0)

    }
    _reject(err) {
        if (this._status !== PENDING) return
        const runRejected = () => {
            this._status = REJECTED
            this._value = err
            let cb
            while (cb = this._rejectedQueues.shift()) {
                cb(err)
            }
        }

        setTimeout(runRejected, 0)

    }

    then(onFulFilled, onRejected) {
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
            let fulfilled = value => {
                try {
                    if (!isFunction(onFulFilled)) {
                        onFulfilledNext(value)
                    } else {
                        let res = onFulFilled(value)
                        if (res instanceof MyPromise) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }

            }

            let rejected = value => {
                try {
                    if (!isFunction(onRejected)) {
                        onRejectedNext(value)
                    } else {
                        let res = onRejected(value)
                        if (res instanceof MyPromise) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (error) {
                    onRejectedNext(error)
                }
            }

            switch (this._status) {
                case PENDING:
                    this._fulfilledQueues.push(fulfilled)
                    this._rejectedQueues.push(rejected)
                    break;
                case FULFILLED:
                    fulfilled(this._value)
                    break;
                case REJECTED:
                    rejected(this._value)
                    break;
                default:
                    break;
            }

        })


    }

    catch(onRejected) {
        this.then(undefined, onRejected)
    }

    static resolve(value) {
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve, reject) => {
            resolve(value)
        })
    }

    static reject(value) {
        return new MyPromise((resolve, reject) => {
            return reject(value)
        })
    }

    static all(list) {
        return new MyPromise((resolve, reject) => {
            let values = []
            let count = 0

            for (let i = 0; i < list.length; i++) {

                this.resolve(list[i]).then(res => {
                    values.push(res)
                    count++
                    if (count === list.length) {
                        resolve(values)
                    }
                }, err => {
                    reject(err)
                })

            }
        })
    }

    static race(list){
        return new MyPromise((resolve,reject)=>{
            for(let i=0;i<list.length;i++){
                this.resolve(list[i]).then(res=>{
                    resolve(res)
                },err=>{
                    reject(err)
                })
            }
        })
    }

    finally(cb){
        return this.then(res=>{
            return MyPromise.resolve(cb()).then(()=>res)
        },err=>{
            return MyPromise.resolve(cb()).then(()=>{throw err})
        })
    }
}


// let p = new MyPromise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(666)
//     },300)
// })

// p.then(res=>{
//     console.log(res);

// },err=>{
//     console.log(err);

// })

// MyPromise.resolve(1).then(res=>{
//     console.log(res);

// })

// MyPromise.reject(new Error(1)).then(res=>{
//     console.log(res);

// },err=>{
//     console.log(err);

// })

let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 1000);
})

let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2000)
    }, 2000);
})

let p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(3000)
    }, 3000);
})
let arr = [p1, p2, p3]
MyPromise.all(arr).then(res => {
    console.log('all', res);

})

MyPromise.race(arr).then(res => {
    console.log('race', res);

})