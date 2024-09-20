// const users = [
//   { Id: 1, name: "anbu", active: true },
//   { Id: 2, name: "somu", active: false },
//   { Id: 3, name: "rajesh", active: true },
//   { Id: 4, name: "aravindh", active: false },
//   { Id: 5, name: "sanjay", active: true },
// ];

// // nums.map((num, i) => (nums[i] = num + 1));

// let eligilestatus = users.map((user) => ({
//   ...user,
//   status: user.active ? "eligible " : "not eligible",
// }));

// console.log(eligilestatus);

// let h2 = document.querySelector("h2");

// let init = 0;

// let counter = setInterval(() => {
//   h2.innerText = init;
//   init++;
//   if (init == 6) {
//     clearInterval(counter);
//   }
// }, 1000);

// data

// let today = new Date();
// let data = ["sunday", "monday", "tuesday", "wed", "thruday", "friday", "sat"];
// let day = today.getDay();
// console.log(data[day]);
// console.log(today.toLocaleDateString());

// console.log(g);
// g = 43;

// let remove = nums.splice(2, 0, (3, 6, 7

// ));
// console.log(nums);

let name1 = {
  name: "arun",
  age: 21,
  fulldetails: function name(district, place) {
    console.log(
      `${this.name} ${this.age} place is ${place} distruct :${district}`
    );
  },
};

// let name2 = { name: "raju", age: 23 };

// // console.log(name1.fulldetails.call(name2, "erode", "truchy"));

// let nums = [4, 1, 3, 4, 5, 6, 6, 7, 7, 8, 8, 2, 9];

// nums.sort((a, b) => {
//   return a - b;
// });

// console.log(nums);

let num = [1, 2, 3, 4, 4, 5, 6];

for (let i = num.length; i < num[0]; i--) {
  console.log(num[i]);
}
