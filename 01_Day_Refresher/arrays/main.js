// 1: Cách tạo mạng trống

// 1.1: Sử dụng phương thức khởi tạo
const arr1 = Array();
console.log(arr1);

// 1.2: Sử dụng dấu ngoặc vuông
const arr2 = [];
console.log(arr2);


// --------------- 2: Tạo mảng -----------------------
// 2.1: Cách tạo 1 mảng với các giá trị
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// 2.2 : Mảng có thể có các kiểu dữ liệu khác nhau
const arr3 = [
    "khanh nb",
    245,
    true,
    { country: "Nghe An", city: "vinh" },
    { skill: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'] }
];
console.log(arr3);


// --------------------3: Sử dụng phương thức split()---------------------
/*
    - Chia 1 chuỗi thành 1 mảng các chuỗi con
    - Trả về mảng mới
    - Không thay đổi chuỗi ban đầu
*/
var js = "javascript";
const charsInJavascript = js.split('');
console.log(charsInJavascript);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',');
console.log(companies);

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ');
console.log(words);


// --------------------4: Truy cập phần tử của mảng--------------------
const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0]
console.log(firstFruit) // banana

secondFruit = fruits1[1]
console.log(secondFruit) // orange

let lastFruit = fruits1[3]
console.log(lastFruit) // lemon

let lastIndex = fruits1.length - 1
lastFruit = fruits1[lastIndex]
console.log(lastFruit) // lemon


// -------------------5: Sửa đổi phần tử của mảng---------------------
const numbers1 = [1, 2, 3, 4, 5]
numbers1[0] = 10;
numbers1[1] = 20;
console.log(numbers1);


//---------------------6: Các phương thức thao tác với mảng-------------------

//6.1: -----Array() tạo 1 mảng-------
const arr4 = Array();
console.log(arr4);

const arrValue = Array(8);
console.log(arrValue);

//6.2: --------fill()-----------
/*
    - Điền vào các phần tử được chỉ định trong mảng với 1 giá trị
    - Ghi đè lên mảng ban đầu
*/
const arr = Array() // creates an an empty array
console.log(arr)

const eightValues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightValues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


//6.3 -------------concat()------------
/*
    - Nối 2 hoặc nhiều mảng
    - Trả về 1 mảng mới
    - không thay đổi các mảng hiện có
*/
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
var thirdList = firstList.concat(secondList);
console.log(thirdList);

//6.4: ---------------length-----------------
const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.length);


//6.5: -------------index of---------------
/*
    - Trả về chỉ mục đầu tiên (vị trí) của một giá trị được chỉ định.
    - Trả về -1 nếu không tìm thấy
    - Phân biệt chữ hoa với chữ thường
*/

const numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5.indexOf(5)); // -> 4
console.log(numbers5.indexOf(0)); // -> -1
console.log(numbers5.indexOf(1)); // -> 0
console.log(numbers5.indexOf(6)); // -> -1

// 6.5.1 : ---------------Kiểm tra các mục trong danh sách------------
const fruits5 = ['banana', 'orange', 'mango', 'lemon'];
let index = fruits5.indexOf('banana');
console.log(index);
var index1 = fruits5[0];
console.log(index1);

if (index != -1) {
    console.log(`Tồn tại giá trị ${index1} trong mảng`);
} else {
    console.log(`Không tồn tại giá trị ${index1} trong mảng`);

}

index != -1
    ? console.log(`Tồn tại giá trị ${index1} trong mảng`) :
    console.log(`Không tồn tại giá trị ${index1} trong mảng`);

// 6.6 -------------------lastIndexOf----------------
/*
    - Trả về vị trí của lần xuất hiện cuối cùng của 1 giá trị được chỉ định trong 1 chuỗi
    - Tìm kiếm từ cuối đến đầu
    - Trả về chỉ mục bắt đầu từ 0
    - Trả về -1 nếu không được tìm thấy
    - Phân biệt chữ hoa vs chữ thường
*/
const numbers6 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers6.lastIndexOf(2)); // 7
console.log(numbers6.lastIndexOf(0)); // -1
console.log(numbers6.lastIndexOf(1)); //  6
console.log(numbers6.lastIndexOf(4)); //  3
console.log(numbers6.lastIndexOf(6)); // -1

// 6.7 ---------------- isArray()-------------------
/*
    - Kiểm tra xem 1 đối tượng có phải là 1 mảng hay không
    - Trả về true nếu đối tượng đó là 1 mảng, ngược lại thì false
*/

const numbers7 = [1, 2, 3, 4, 5];
var numberValue = (Array.isArray(numbers7)); // true
numberValue ? console.log('Đây là 1 mảng') : console.log('Đây không phải là mảng');

// kiểm tra dữ liệu có phải là 1 mảng hay không
const number = 100
var checkNumber = (Array.isArray(number)); // false
checkNumber ? console.log("Đây là 1 mảng") : console.log("Đây không phải là 1 mảng");

// 6.7 ---------------- toString() ---------------
/*
    - Trả về 1 chuỗi dưới dạng 1 chuỗi
    - Không thay đổi chuỗi ban đầu
    - Chuyển 1 đối tượng thành 1 chuỗi
*/

const numbers8 = [1, 2, 3, 4, 5]
console.log(numbers8.toString()) // 1,2,3,4,5

const names = ['Awakened', 'Mathias', 'Elias', 'Brook'];
console.log(names.toString()); // Awakened,Mathias,Elias,Brook


// 6.8 ----------------- slice() ---------------
/*
    - Trả về phần tử đã chọn  dưới dạng 1 mảng mới
    - Chọn từ 1 điểm đầu nhất định tới 1 điểm cuối nhất định
    - Không thay đổi mảng ban đầu
*/

const numbers9 = [1, 2, 3, 4, 5];   

console.log(numbers9.slice()) // -> it copies all  item
console.log(numbers9.slice(0)) // -> it copies all  item
console.log(numbers9.slice(0, numbers.length)) // it copies all  item
console.log(numbers9.slice(1, 4)) // -> [2,3,4] 

// 6.9 ----------- push() -------------------
/*
    - Thêm các mục mới vào cuối 1 mảng
    - Thay đổi độ dài của mảng
    - Trả về độ dài mới
*/

const arr5 = ['item1', 'item2', 'item3']
arr5.push('new item');
console.log(arr5);

let fruits10 = ['banana', 'orange', 'mango', 'lemon'];
fruits10.push('apple');
console.log(fruits10);


// 6.10 ------------- pop()-------------
/*
    - Loại bỏ phần tử cuối cùng của 1 mảng
    - Thay đổi mảng ban đầu
    - Trả về phần tử bị loai bỏ
*/

const numbers11 = [1, 2, 3, 4, 5]
numbers11.pop() // -> remove one item from the end
console.log(numbers11) // -> [1,2,3,4]

const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.pop();
console.log(fruits11);

const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
var removed = fruits12.pop();
console.log(`Phần tử bị xóa vị trí cuối cùng là: ${removed}`);


// 6.11 ----------------- shift() -------------
/*
    - Loại bỏ mục đầu tiên của 1 mảng
    - Thay đổi mảng ban đầu
    - Trả về phẩn tử đã dịch chuyển
*/

const numbers13 = [1, 2, 3, 4, 5]
numbers13.shift() // -> remove one item from the beginning
console.log(numbers13) // -> [2,3,4,5]

const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
var removed1 = fruits13.shift();
console.log(`Phần tử bị xóa vị trí đầu tiên là: ${removed1}`);


// 6.12 ------------------ unShift() --------------
/*
- Thêm phần tử vào mảng ban đầu
- Ghi đè lên mảng ban đầu
*/

const numbers15 = [1, 2, 3, 4, 5]
numbers15.unshift(0) // -> add one item from the beginning

console.log(numbers15) // -> [0,1,2,3,4,5]


// 6.13 --------------------- reserve() ------------------
/*
    - Đảo ngược thứ tự của các phẩn tử trong mảng
    - Ghi đè lên mảng ban đầu
*/

const numbers16 = [1, 2, 3, 4, 5]
numbers16.reverse() // -> reverse array order

console.log(numbers16) // [5, 4, 3, 2, 1]

numbers16.reverse()
console.log(numbers16) // [1, 2, 3, 4, 5]


// 6.14 ------------------ sort() -------------
/*
    - Xếp các phần tử dưới dạng chuỗi và theo thứ tự bảng chữ cái tăng dần
    - Ghi đè lên mảng ban đầu
*/
const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

webTechs1.sort()
console.log(webTechs1) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs1.reverse() // after sorting we can reverse it
console.log(webTechs1) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


// 6.15 -------------- array of array------------------
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
    [1, 2, 3],
    [1, 2, 3],
]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
