//1: forEach
// Gọi 1 hàm cho mỗi phần tử trong 1 mảng
// Exercise
const number = [1,2,3,4,5]; 

// Cách 1.
var sum = 0;
number.forEach(function (element) {
     sum += element;
});
console.log(sum); // 15

// Cách 2.
var sumArr = 0;
number.forEach((element) => sumArr += element);
console.log(sumArr); //15


//2: map
// Tạo 1 mảng mới từ việc gọi 1 hàm cho mọi phần tử của mảng
// Cần lấy 1 mảng, biến đổi các phần tử đó đưa kết quả vào 1 mảng mới
const arrRadius = [23,3,5]; // Tính S hình tròn cho vào 1 mảng mới

// Cách 1: Hàm thông thường
var S = 0;
var newSRadius = [];
function sRadius(arr) {
     for(var i = 0; i < arr.length; i++) {
          S = Math.floor(Math.PI * arr[i] * arr[i]);
          newSRadius.push(S);
     }
     return newSRadius;
}
console.log(sRadius(arrRadius)); // [1661, 28, 78]


// Cách 2
const resultSRadius = arrRadius.map(function(element) {
    return Math.floor(Math.PI * element * element);
});
console.log(resultSRadius); // [1661, 28, 78]


// Cách 3
const SRadius = arrRadius.map((value) => Math.floor(Math.PI * value * value));
console.log(SRadius); // [1661, 28, 78]


const userName = ['khanh','nam','ha'];
userName.forEach(function (element){
     console.log(element.toUpperCase()); 
});


//3: filter
// Tạo thành 1 mảng mới chứa các phần tử phù hợp với điều kiện do hàm cung cấp
// -includes (Trả về true nếu 1 mảng chứa 1 giá trị được chỉ đinh, ngược lại thì trả về false)
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland'];

// Cách 1.
const countriesWidthLand =  countries.filter(function (country) {
     return  country.includes('land');
});
console.log(countriesWidthLand);  // ['Finland', 'Iceland']


// Cách 2.
const countriesWidthLand1 = countries.filter((element) => element.includes('land'));
console.log(countriesWidthLand1); // ['Finland', 'Iceland']


// Lọc ra thành phố không chứa các chuỗi con
const noCountriesWidthLand = countries.filter((element) => !(element.includes('land')));
console.log(noCountriesWidthLand);  // ['Estonia', 'Sweden', 'Norway']

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Lọc ra các số chẵn
const evenNumber = numbers.filter(function (num) {
     return num %2 === 0;
});
console.log(evenNumber); // [0, 2, 4, 6, 8, 10]


const oddNumber = numbers.filter((num) => num %2 !== 0);
console.log(oddNumber);  // [1, 3, 5, 7, 9]


//4: reduce
// Trả về 1 giá trị duy nhất, thực thi 1 hàm rút gọn cho phần tử mảng
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const resultNum = numbers1.reduce((acc, cur) => acc + cur);
console.log(resultNum);  // 55


const myName = ['Nguyen','Binh','Khanh'];
const fullName = myName.reduce((firstName, lastName) => firstName + ' ' + lastName);
console.log(fullName);  // Nguyen Binh Khanh


//5: find
// Trả về giá trị đầu tiên phù hợp với điều kiện, thực thi 1 hàm cho mỗi phần tử mảng
// Trả về giá trị đầu tiên trong mảng chia hết cho 2
const firstEventNumber = numbers1.find((num) => num%2 === 0);
console.log(firstEventNumber); // 2


// Trả về giá trị đầu tiên trong mảng không chia hết cho 2
const firstOddNumber = numbers1.find((num) => num%2 !== 0);
console.log(firstOddNumber); // 1


const newCity = ['Vinh','Thanh Hoa','Ninh Binh','Ha Noi','Thai Binh'];

// Tìm thành phố đầu tiên chứa chuỗi 'inh';
const firstNameCity = newCity.find((nameCity) => nameCity.includes('inh'));
console.log(firstNameCity); // Vinh


// Tìm thành phố đầu tiên có 6 kí tự
const firstNameLengthSix = newCity.find((city) => city.length === 6);
console.log(firstNameLengthSix); // Ha Noi


//6: findIndex
// Trả về chỉ số(Vị trí) của phần tử đầu tiên phù hợp với điều kiện

const findIndexNameCity = newCity.findIndex((value) => value.includes('Hoa'));
console.log(findIndexNameCity);  // 1


// 7: some
// Kiểm tra xem có bất kỳ phần tử mảng phù hợp với điều kiện trong hàm gọi lại
// Trả về kiểu dữ liệu boolean
// Trả về true nếu hàm = true và ngược lại
const ages = [3, 10, 18, 20];

const checkAge = ages.some((age) => age > 18);
console.log(checkAge); // true

const checkAgeEvent = ages.some((age) => age%7 === 0);
console.log(checkAgeEvent); // false


//8: every
// Thực thi 1 hàm cho mỗi phần tử mảng
// Trả về true nếu hàm trả về true cho (Tất cả các phần tử trong mảng phù hợp với điều kiện);
// Trả về false nếu hàm trả về false cho 1 phần tử

const listAge = ages.every((age) => age > 18); // Tất cả các phần tử phải phù hợp với điều kiện
console.log(listAge); //false

