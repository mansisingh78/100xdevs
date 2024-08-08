// function greet(name) {
//   return "hello, " + name;
// }

// console.log(greet("mansi"));

// sum

// function sum(a, b) {
//   let totalSum = a + b;
//   return totalSum;
// }
// console.log(sum(1, 2));

//Array

// let users = ["harkirat", "raman", "diljeet"];
// // console.log(users[0]);
// // console.log(users[1]);
// for (let i = 0; i < 4; i++) {
//   console.log(users[i]);
// }
// let totalUsers = users.length;
// for (let i = 0; i < totalUsers; i++) {
//   console.log(users[i]);
// }

// object

// let users1 = {
//   name: "harkirat",
//   age: 20,
//   gender: "male",
// };
// console.log(users1.name);
// console.log(users1.age);
// console.log(users1["gender"]);

// string concatenation

// function greet(user) {
//   console.log("hii " + user.name + " your age is " + user.age);
// }
// let user = {
//   name: "raman",
//   age: 16,
// };
// greet(user);

// array of object

// let arr = [
//   "harkirat",
//   21,
//   {
//     name: "harkirat",
//     age: 21,
//     cities: [
//       "delhi",
//       "chandigarh",
//       "banglore",
//       {
//         city: "kuaia lampur",
//         country: "malasia",
//       },
//     ],
//   },
// ];
// console.log(arr[2].cities[3].city);

function solve(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      //   console.log(arr[i].age);

      arr2.push(arr[i]);
    }
  }
  return arr2;
}

const users = [
  {
    name: "harkirat",
    age: 21,
    gender: "male",
  },
  {
    name: "priya",
    age: 17,
    gender: "female",
  },
];
const getArr = solve(users);
console.log(getArr);
