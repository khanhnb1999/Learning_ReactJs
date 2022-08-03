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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

// ----------------------------- exercise----------------------------

//1 : Khai báo mảng trống
const arr = Array();
const arr1 = [];
console.log(arr);
console.log(arr1);

//2: Khai báo 1 mảng có nhiều hơn 5 số phẩn tử
const fullStack = ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'PYTHON', 'JQUERY', 'NODE', 'REACT'];
console.log(`Độ dài mảng là: ${fullStack.length}`);

//3: Mục đầu tiên,giữa,cuối cùng của mảng.
//3.1: Mục đầu tiên
console.log(`Chỉ mục đầu tiên của mảng: ${fullStack[0]}`);

//3.2: Mục cuối cùng
console.log(`Chỉ mục cuối cùng của mảng: ${fullStack[fullStack.length - 1]}`);

//3.3: Mục giữa
var middle = fullStack.length / 2;
console.log(`Mục cuối cùng của mảng: ${fullStack[middle]}`);


/* 4:
    Khai báo một mảng có tên là MixedDataTypes , đặt các kiểu dữ liệu khác nhau vào mảng và tìm độ dài của mảng. 
    Kích thước mảng phải lớn hơn 5 
*/

const MixedDataTypes = ['HTML', 1999, 5.34, 'Hello word', 'PHP', 34];
console.log(`Độ dài của mảng là: ${MixedDataTypes.length}`);

//6: Khai báo tên biến mảng itCompanies và gán giá trị ban đầu Facebook, Google, Microsoft, Apple, IBM, Oracle và Amazon
// 6.1: In mảng bằng console.log();
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);

//6.2: Số lượng phần tử trong mảng
console.log(`Số lượng phần tử trong mảng: ${itCompanies.length}`);

//6.3: Công ty đầu tiên
console.log(`Công ty đầu tiên: ${itCompanies[0]}`);

//6.4: Công ty cuối cùng
console.log(`Công ty cuối cùng : ${itCompanies[itCompanies.length - 1]}`);

//6.5: Công ty ở giữa
var middleCompany = parseInt(itCompanies.length / 2);
console.log(`Công ty ở giữa: ${itCompanies[middleCompany]}`);

//6.5: In ra từng Cty
console.log(itCompanies.join('--'));

// 6.6: Thay đổi tên từng công ty thành chữ in hoa và in ra
console.log(itCompanies.toString().toUpperCase());

//6.7: In mảng như một câu: Facebook, Google, Microsoft, Apple, IBM, Oracle và Amazon là những công ty CNTT lớn.
console.log(`${itCompanies.join(',')} và ${itCompanies[itCompanies.length - 1]} là những công ty CNTT lớn. `);

// 6.8: Kiểm tra phần tử có tồn tại trong mảng hay không
var element1 = itCompanies.indexOf('Google');

//6.8.1:
if (element1 != -1) {
    console.log(`Tồn tại phần tử ${itCompanies[element1]} trong mảng`);
} else {
    console.log(`Không tồn tại phần tử ${itCompanies[element1]} trong mảng`);
}

element1 != -1 ? console.log(`Tồn tại phần tử ${itCompanies[element1]} trong mảng`) :
    console.log(`Không tồn tại phần tử ${itCompanies[element1]} trong mảng`);

// 6.8.2: 

function check_arr(element) {
    var count = 0;
    for (var i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i] == element) {
            count++;
            break;
        }
    }
    return (count > 0) ? true : false;
}

if (check_arr('Microsoft') == true) {
    console.log(`Tồn tại phần tử Microsoft trong mảng`);
} else {
    console.log(`Không tồn tại phần tử Microsoft trong mảng`);

}

// 7: Sắp xếp mảng bằng phương thức sort ()
console.log(itCompanies.sort().join('-'));

//8: Đảo ngược mảng bằng phương thức reverse ()
console.log(itCompanies.reverse().join('-'));

// 9: Loại bỏ 3 công ty đầu tiên khỏi mảng
console.log(`Phần tử bị xóa là: ${itCompanies.splice(0, 3)}`);
console.log(itCompanies);

// 9: Loại bỏ 3 công ty cuối cùng khỏi mảng
console.log(`Phần tử bị xóa là: ${itCompanies.splice(-1,3)}`);
console.log(itCompanies);

