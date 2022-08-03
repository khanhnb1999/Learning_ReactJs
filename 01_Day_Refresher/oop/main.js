const fruits = {
    name: "Banana",
    color: "Yellow",
    weight: 12,
    width: 24,
    eat: function () {
        return `I like ${this.name}`;
    }
};

// Thêm thuộc tính
fruits.from = "Canada";

// Thêm thuộc tính
fruits.getFruit = function () {
    return `I am ${this.name}, I have ${this.color} and ${this.weight} kg`;
};

// Sao chép 1 đối tượng
const copyFruits = Object.assign({}, fruits);

// Lấy các khóa đối tượng(Trả về 1 mảng chứa các tên thuộc tính)
const key = Object.keys(fruits);
console.log(key);


// Nhận các giá trị của đối tượng
const value = Object.values(fruits);
console.log(value);

// Nhận các khóa và giá trị
const keyValue = Object.entries(fruits);
console.log(keyValue);

// (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Banana']
// 1: (2) ['color', 'Yellow']
// 2: (2) ['weight', 12]
// 3: (2) ['width', 24]
// 4: (2) ['eat', ƒ]
// 5: (2) ['from', 'Canada']
// 6: (2) ['getFruit', ƒ]

console.log(fruits.hasOwnProperty("name"));