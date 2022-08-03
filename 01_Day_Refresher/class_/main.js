// Tạo class có tên là animal
class Animal {
    constructor(names, age, color, foot) {
        this.names = names;
        this.age = age;
        this.color = color;
        this.foot = foot;
    }

    newOld() {
        var date = new Date();
        return `${this.names} is ${date.getFullYear() - this.age}`;
    }

    eat() {
        return `${this.names} eat cooking rice`;
    }
}

// Tạo lớp Dog và Cat từ Animal
// Dog
class Dog extends Animal {
    constructor(names, age, color, foot, hobby) {
        super(names, age, color, foot);
        this.hobby = hobby;
    }
    eat() {
        return `${this.names} eat cooking fishing`;
    }
}

// cat
class Cat extends Animal {
    constructor(names, age, color, foot) {
        super(names, age, color, foot);
    }
    eat() {
        return `${this.names} eat cooking mouser`;
    }
}

const personAnimal = new Animal("Animal", 2);
const dogAnimal = new Dog("Bec", 3);
const catAnimal = new Cat("Uc", 2);

console.log(personAnimal.eat());
console.log(dogAnimal.eat());
console.log(catAnimal.eat());

// Dữ liệu thống kê
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    count() {
        return 'Count: ' + ages.length;
    }
    sum() {
        return 'Sum: ' + ages.reduce((sum, element) => sum + element);
    }
    min() {
        return 'Min: ' + Math.min.apply(Math, ages);
        // return 'Min: ' + Math.min(...ages);
        // return "Min: " + ages.reduce((min, element) =>
        //      min < element ? min : element
        // ); 
    }
    max() {
        return 'Max: ' + Math.max.apply(Math, ages);
        // return 'Max: ' + Math.max(...ages);
        // return "Min: " + ages.reduce((max, element) =>
        //      max > element ? max : element
        // ); 
    }
    range() {

    }
    mean() {

    }
    median() {
        return 'Median: ' + Math.floor((ages.reduce((total, element) => total + element)) / (ages.length));
    }
    mode() {
        var count = 0;
        ages.forEach((element) => {
            if (element == 26) {
                count++;
            }
        });
        return `(26, ${count})`;
    }

}

const statistics = new Statistics();
// console.log(statistics.count());
// console.log(statistics.sum());
// console.log(statistics.min());
// console.log(statistics.max());
// console.log(statistics.median());
console.log(statistics.mode());