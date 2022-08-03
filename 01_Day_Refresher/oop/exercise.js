// const dogs = {};

// // In đối tượng
// // console.log(dogs);

// // Thêm các thuộc tính
// dogs.name = "Beck";
// dogs.foot = "Four";
// dogs.color = "Black";
// dogs.age = 12;
// dogs.bark = function() {
//      return "Woof Woof Woof";
// }



// // console.log(dogs);

// const users = {
//      Alex: {
//           email: 'alex@alex.com',
//           skills: ['HTML', 'CSS', 'JavaScript'],
//           age: 20,
//           isLoggedIn: false,
//           points: 30
//      },

//      Asab: {
//           email: 'asab@asab.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//           age: 25,
//           isLoggedIn: false,
//           points: 50
//      },

//      Brook: {
//           email: 'daniel@daniel.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//           age: 30,
//           isLoggedIn: true,
//           points: 50
//      },

//      Daniel: {
//           email: 'daniel@alex.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//           age: 20,
//           isLoggedIn: false,
//           points: 40
//      },

//      John: {
//           email: 'john@john.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//           age: 20,
//           isLoggedIn: true,
//           points: 50
//      },

//      Thomas: {
//           email: 'thomas@thomas.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//           age: 20,
//           isLoggedIn: false,
//           points: 40
//      },

//      Paul: {
//           email: 'paul@paul.com',
//           skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//           age: 20,
//           isLoggedIn: false,
//           points: 40
//      }
// }

// // Tìm user có nhiều skill nhất
// var countSkill = 0;
// var result = [];

// for(const key in users) {
//      var numberArr = (users[key].skills.length);
//      if(numberArr > countSkill) {
//           countSkill = numberArr;
//           result = users[key];
//      }
// }

// console.log(result, "Skill: " + countSkill);

// // Đếm người dùng đã đăng nhập

// var countUserLogin = 0;
// for(const userLogin in users) {
//      var listUser = users[userLogin].isLoggedIn;
//      if(listUser == true) {
//           countUserLogin++;
//      }
// }

// console.log(`Tổng số người dùng đã đăng nhập: ${countUserLogin}`);

// var countPoints = 0;
// for(const userPoint in users) {
//      var point = users[userPoint].points;
//      if(point >= 50) {
//           countPoints++;
//      }
// }

// console.log(`Tổng người dùng có điểm lơn hơn 50: ${countPoints}`);


// // Thêm tên của bạn vào users

// users.khanh = {
//      name: "Nguyen Binh Khanh"
// };
// console.log(users);

// // Nhận tất cả các khóa hoặc thuộc tính của đối tượng users
// const keyUser = Object.keys(users);
// console.log(keyUser);

// // Nhận tất cả giá trị của đối tượng người dùng
// const getKey = Object.values(users);
// console.log(getKey);

// // Tạo đối tượng

// const personAccount = {
//      firstName:"",
//      lastName: "",
//      incomes: "",
//      expenses: "",
//      totalIncome: function(){},
//      totalExpense: function(){},
//      accountInfo: function(){},
//      addIncome: function(){},
//      addExpense: function(){},
//      accountBalance: function(){},
// };

const users = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy'],
    },
]