function cats(arr){

class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    meow () {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

for (const el of arr) {
    const [name, age] = el.split(' ');
    const newArrToObj = new Cat(name, age);
    newArrToObj.meow();
}



}
cats(['Mellow 2', 'Tom 5']);
//cats(['Candy 1', 'Poppy 3', 'Nyx 2']);