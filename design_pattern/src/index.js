class Person{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

let p = new Person('test')
alert(p.getName())