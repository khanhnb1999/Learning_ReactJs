// Gán các mục mảng cho 1 biến

const language = ['PHP','JAVASCRIPT','HTML','REACT'];
const [php,javascript,html,react] = language;
console.log(php); // PHP

const [php1,,,react1] = language;
console.log(php1); //PHP
console.log(react1); // REACT

// 1 hàm trả về 1 mảng

const sumNumber = (a,b) => {
    const sum = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divisor =  a / b;
    return [sum, subtract, multiply, divisor];
}

const [sum,subtract,multiply,divisor] = sumNumber(10,2);
console.log(sum);// 12
console.log(subtract);// 8
console.log(multiply);// 20
console.log(divisor);// 5

// Sử dụng 1 đối tượng trong 1 hàm

const infoName = {
    firstName: "Khanh",
    lastName: "Nb",
    address: "Nghe An"
}

const getName = ({firstName, lastName,address}) => {
    return `Hello ${firstName} ${lastName} from ${address}`;
}

const result = getName(infoName);
console.log(result);

// Toán tử spared es6
// Toán tử spared javascript(...) cho phép sao chép tất cả hoặc 1 phần tử của 1 mảng
// hoặc đối tượng vào 1 mảng hoặc đối tượng khác

// Sao chép mảng
const numberOne = [1,2,3];
const numberTwo = [4,5,6];
const resultNumber = [...numberOne, ...numberTwo];
console.log(resultNumber); // (6) [1, 2, 3, 4, 5, 6]

const numberThree = [1,2,3,4,5,6];
const [one,two,...arr] = numberThree;
console.log(arr); // (4) [3, 4, 5, 6]

const car = {
    names: "Toyota",
    color: "red",
    weight: 6000
}

const model = {
    made: "Japan",
    date: "2022/3/4"
}

const personCar = {...car,...model};
console.log(personCar);
// {names: 'Toyota', color: 'red', weight: 6000, made: 'Japan', date: '2022/3/4'}

// Toán tử bậc 3

function renderApp() {
    console.log("Hello khanh nb");
}

function renderLogin() {
    console.log("Login form");
}

const result1 = true;

result1 ? renderApp() : renderLogin();
