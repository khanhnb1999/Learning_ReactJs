const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Thêm 'Meat' vào đầu mảng.
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// Thêm sugar vào cuối mảng
shoppingCart.push('Sugar');
console.log(shoppingCart);

// Xóa phần tử 'Honey' trong mảng
for (var i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] == 'Honey') {
        shoppingCart.splice(i, 1);
    }
}

console.log(shoppingCart);

// Sửa đổi 'Tea' thành 'Green Tea'

for (var i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] == 'Tea') {
        shoppingCart.splice(i, 1, 'Green Tea');
    }
}
console.log(shoppingCart);

// Kiểm tra 'Ethiopia' tồn tại trong mảng country hay không,
// Nếu tồn tại thì in ra phần tử, nếu không tồn tại thì thêm vào

for (var i = 0; i < countries.length; i++) {
    if (countries[i] == 'Ethiopia') {
        console.log("Tồn tại mảng Ethiopia trong mảng");
    } else {
        countries.push('Ethiopia');
    }
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

// Nối 2 biến mảng và lưu trong biến fullStack
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sắp xếp mảng
console.log(ages.sort());

// Tuổi lớn nhất trong mảng
var numberMax = ages.reduce(function (accumulator, element) {
    return accumulator > element ? accumulator : element;
});

console.log(`Number max: ${numberMax}`);


var numberMin = ages.reduce(function (accumulator, element) {
    return accumulator < element ? accumulator : element;
});

console.log(`Number min: ${numberMin}`);

//Tìm tuổi trung bình
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(sumArray(ages));


// Tuổi trung bình
console.log(`Tuổi trung bình trong mảng ages là: ${(sumArray(ages))/(ages.length)}`);

// So sánh tuổi trung bình vs các phần tử min và max
var ageTb = (sumArray(ages)) / (ages.length);
numberMax > ageTb ? console.log(`${numberMax} > ${ageTb}`) : console.log(`${numberMax} < ${ageTb}`);

// if(numberMax > ageTb) {
//      console.log(`${numberMax} > ${ageTb}`);
// } else {
//      console.log(`${numberMax} < ${ageTb}`);
// }


const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
];


// Tìm quốc gia nằm giữa
function countryMiddle(arr) {
    var lengthTb = arr[(arr.length) / 2];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == lengthTb) {
            var index = arr[i];
        }
    }
    return index;
}

// console.log(countryMiddle(countries1));

console.log(`Phần tử nằm giữa trong mảng countries là: ${countryMiddle(countries1)}`);

// Chia mảng countries1 thành 2 mảng bằng nhau

function checkArr(arr) {
    item = [];
    if ((arr.length) % 2 == 0) {
        n = 2; // Chia thành 2 mảng
        item = arr.splice(0, (arr.length) / n);
    }
    return item;
}

console.log(checkArr(countries1));
console.log(countries1);