// Exercise1:

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Khanh", "Nb"));

const fullName1 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName1("Trung", "Nv"));


function sumNumber(num1, num2) {
    return num1 + num2;
}
console.log(sumNumber(4, 5));

const sumNumber1 = (a, b) => a + b;
console.log(sumNumber1(4, 5));

function sCircle(r) {
    const PI = 3.14;
    return r * 2 * PI;
}
console.log(sCircle(4));

const sCircle1 = (r, PI = 3.14) => r * 2 * PI;
console.log(sCircle1(5));


function temperature(oC) {
    const oF = (oC * 9 / 5) + 32;
    return `OF= ${oF}`;
}
console.log(temperature(23));


const temperature1 = (oC) => `OF= ${(oC * 9/5) + 32}`;
console.log(temperature1(23));


function mediumWeight(weight, height) {
    const BMI = parseInt(weight / height);
    if (BMI < 18.5) {
        console.log("Thiếu cân");
    } else if ((18.5 <= BMI) && (BMI <= 24.9)) {
        console.log("Cân nặng bình thường");
    } else if ((25 < BMI) && (BMI <= 29.9)) {
        console.log("Thừa cân");
    } else {
        console.log("Béo phì");
    }
}

mediumWeight(50, 1.72);


const mediumWeight1 = (weight, height) => {
    const BMI = parseInt(weight / height);
    if (BMI < 18.5) {
        console.log("Thiếu cân");
    } else if ((18.5 <= BMI) && (BMI <= 24.9)) {
        console.log("Cân nặng bình thường");
    } else if ((25 < BMI) && (BMI <= 29.9)) {
        console.log("Thừa cân");
    } else {
        console.log("Béo phì");
    }
}

mediumWeight1(10, 1.34);


function checkSeason(month) {
    if ((month >= 3) && (month < 6)) {
        console.log("Spring");
    } else if ((month >= 6) && (month < 9)) {
        console.log("Summer");
    } else if ((month >= 9) && (month < 12)) {
        console.log("Autumn");
    } else if (month == 12) {
        console.log("Winter");
    } else {
        console.log("Tháng không hợp lệ");
    }
}

checkSeason(5);


function quadraticEquation(a, b, c) {
    var delta = b * 2 - (4 * a * c);
    if (delta < 0) {
        console.log("PT vô nghiệm ");
    } else if (delta == 0) {
        console.log(`PT có 2 nghiệm phân kép: x1 = x2 = ${(-b)/2*a}`);
    } else if (delta > 0) {
        console.log(`PT có 2 nghiệm phân biệt:\n x1 = ${(((-b) - Math.sqrt(delta))/(2*a))} \n x2 = ${(((-b) + Math.sqrt(delta))/(2*a))}`);
    }
}

quadraticEquation(1, 2, 1);

function printArray(arr) {
    for (const element of arr) {
        console.log(element);
    }
}

const userName = ['khanh', 'trung', 'nam'];
printArray(userName);

const printArray1 = (arr) => {
    for (const element of arr) {
        console.log(element);
    }
}

printArray1(userName);


function showDateTime() {
    var date = new Date();
    console.log(date);
}
showDateTime();

const showDate = (date = new Date()) => console.log(date);
showDate();


function swapValues(x, y) {
    console.log(`${x} => ${y} ${y} => ${x} \n`);
}
swapValues(3, 4);

const swapValues1 = (x, y) => console.log(`${x} => ${y} ${y} => ${x} \n`);
swapValues1(5, 6);

function reverseArray(arr) {
    const result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result);
}

reverseArray([4, 6, 8, 10]);

function capitalizeArray(arr) {
    return arr;
}

console.log(capitalizeArray(['a', 'b', 'c']));

function addItem(item) {
    const itemArr = [];
    for (var i = 0; i < item.length; i++) {
        itemArr.push(item[i]);
    }
    console.log(itemArr);
}

addItem("khanh");


const removeItem = (index) => {
    const indexArr = [];
    for (var i = 0; i < index.length; i++) {
        indexArr.push(index[i]);
        break;
    }
    console.log(indexArr);
}

removeItem("khanh");

const sum = (...args) => {
    var num = 0;
    for (var i = 0; i < args.length; i++) {
        num += args[i];
    }
    return num;
}

console.log(sum(1, 2, 3, 4));


function resultNumber(...args) {
    var result = 0;
    for (const element of args) {
        result += element;
    }
    return result;
}
console.log(resultNumber(2, 3, 4, 5));


const listNum = [4, 5, 6, 7];

const result = (arr) => {
    var sum = 0;
    const callBack = (element) => {
        sum += element;
    }

    arr.forEach(callBack);
    return sum
}
console.log(result(listNum));


const info = ['khanh', 'thanh', 'nam'];

function demo(arr) {
    var html = '';

    function val(element) {
        html += element + " ";
    }
    arr.forEach(val);
    return html;
}

console.log(demo(info));

const listNumber = [1, 2, 3, 4, 5];

var html = 0;
listNumber.forEach((value) => (html += value));
console.log(html);

const result1 = (value) => {
    var b = 0;
    for (const a of value) {
        b += a
    }
    return b;
}
console.log(result1(listNumber));

const city = ['Vinh', 'Ha Noi', 'Thanh Hoa', 'Ha Tinh'];

const cityVal = city.map((list) => (list.length));
console.log(cityVal);