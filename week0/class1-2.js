// // 1)

// let name = "harsh";
// let surname = "vajani";
// let gender = "M";
// console.log(`hey...good morning ${name} ${surname} how are you`);

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
// }

//object
const allUsers = [
  {
    name: "harsh",
    gender: "male",
  },
  {
    name: "sweta",
    gender: "female",
  },
];

for(let user of allUsers)
{
    if(user.gender=="male")
    {
        console.log("hey buddy")
    }
    else{
        console.log("hey sis")
    }
}

