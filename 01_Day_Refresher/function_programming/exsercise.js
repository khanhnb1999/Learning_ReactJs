const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ''
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    },
]

//1: In ra từng sản phẩm bằng foreach

// Cách 1
for (var i = 0; i < products.length; i++) {
    console.log(products[i].price);
}

// Cách 2.
function getPriceProduct(arr) {
    arr.forEach(function (element) {
        console.log(element.price);
    });
}
(getPriceProduct(products));

// Cách 3.
products.forEach((element) => console.log(element.price));

//2: In các mục sản phẩm như sau bằng forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.

// Cách 1.
for (var i = 0; i < products.length; i++) {
    if (products[i].price === "") {
        console.log(`The price of ${products[i].product} is unknown`);
    } else {
        console.log(`The price of ${products[i].product} is ${products[i].price} euros`);
    }
}

// Cách 2.
function getUnknown(arr) {
    arr.forEach(function (element) {
        if (element.price === "") {
            console.log(`The price of ${element.product} is unknown`);
        } else {
            console.log(`The price of ${element.product} is ${element.price} euros`);
        }
    });
}
getUnknown(products);

// Cách 3.
products.forEach((item) =>
    item.price === "" ?
    console.log(`The price of ${item.product} is unknown`) :
    console.log(`The price of ${item.product} is ${item.price} euros`)
);

// Cách 4.
for (const item of products) {
    if (item.price === "") {
        console.log(`The price of ${item.product} is unknown`);
    } else {
        console.log(`The price of ${item.product} is ${item.price} euros`);
    }
}

// Cách 5.
products.forEach((item) => {
    if (item.price === "") {
        console.log(`The price of ${item.product} is unknown`);
    } else {
        console.log(`The price of ${item.product} is ${item.price} euros`);
    }
});

//3: Tính tổng của tất cả các mức giá bằng forEach

var sumPrice = 0;
products.forEach((item) => {
    if (item.price === "") {
        item.price = 0;
    }
    sumPrice += item.price;
    return sumPrice;
});
console.log(sumPrice);

//4: Tạo 1 mảng price bằng cách sử dụng map
// Cách 1.
const newPrice1 = products.map(function (item) {
    return item.price;
});
console.log(newPrice1);

// Cách 2.
const newPrice = products.map((item) => item.price);
console.log(newPrice);

// Cách 3.
const newPrice3 = [];
for (var i = 0; i < products.length; i++) {
    newPrice3.push(products[i].price);
}
console.log(newPrice3);

// Cách 4.
const newPrice4 = [];
for (const item of products) {
    newPrice4.push(item.price);
}
console.log(newPrice4);

//5: Lọc sản phẩm với giá cả
// Cách 1.
const newPriceFilter = products.filter((item) => item.price > 0);
console.log(newPriceFilter);

// Cách 2.
function newPriceFilterOne(arr) {
    return arr.filter((item) => item.price > 0);
}
console.log(newPriceFilterOne(products));

//6: Sử dụng map(),filter(),some() để tính tổng giá.
//6.1: map().

var newSumPrice = 0;
products.map((item) => {
    if (item.price === "") {
        item.price = 0; 
    }
    newSumPrice += item.price;
    return newSumPrice;
});

console.log(newSumPrice);

//6.2: filter().

const newSumPriceFilter = products.filter((item) => item.price >= 0);
var resultNewSumPriceFilter = 0;

for (const pr of newSumPriceFilter) {
    resultNewSumPriceFilter += pr.price;
}
console.log(resultNewSumPriceFilter);

// 6.3. reduce();
// Muốn sử dụng reduce thì phải đưa về 1 mảng 
function resultReduce(arr) {
    const newResultPrice = arr.map((item) => item.price);
    const resultReducePrice = newResultPrice.reduce((acc, cur) => acc + cur);
    return resultReducePrice;

}
console.log(resultReduce(products));


//7 Tính tổng tất cả các price chỉ sử dụng reduce().

function getPrice(arr) {
    const setPrice = [];
    arr.reduce((firstElement, item, index, arr) => {
        setPrice.push(item.price);
    }, arr[0].price);
    return setPrice.reduce((firstValue, value) => firstValue + value);
}
console.log(getPrice(products));

const sum = products.map(({
    price
}) => price).reduce((a, b) => a + b, 0);
console.log(sum);


//8 Tìm sản phẩm đầu tiên không có giá trị
const firstNameProduct = products.find((pr) => pr.price == "");
console.log(firstNameProduct);

//9 Tìm chỉ số sản phẩm đầu tiên không có giá trị
const findIndex = products.findIndex((index) => index.price == "");
console.log(findIndex);

const z = products.findIndex(function (index) {
    if ((index.price == "") || (index.product == "")) {
        return index;
    }
});

console.log(z);


function findIndexProduct(arr) {
    const result = arr.findIndex(function (index) {
        if ((index.price == "") || (index.product == "")) {
            return index;
        }
    });
    return result;
}
console.log(findIndexProduct(products));

//10 Kiểm tra xem 1 số sản phẩm không có giá trị

function checkProductEmpty(arr) {
    arr.forEach((item) => {
        if ((item.price == "") || (item.product == "")) {
            console.log(item);
        }
    });
}
checkProductEmpty(products);

//11: Kiểm tra tất cả sản phẩm có giá trị về giá không

function checkProductPrice(arr) {
    arr.forEach((priceVal) => {
        if (priceVal.price == "") {
            console.log("Một số sản phẩm không có giá trị trong mảng");
        }
    });
}
checkProductPrice(products);