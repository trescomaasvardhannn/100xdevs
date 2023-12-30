function func() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });
  return p;
}

async function main() {
  {
    let value = await func();
    console.log("hey babes1");
    console.log(value);
    console.log("hey babes2");
  }

  //same as
//   func.then(function(){
//     console.log("hey babes1");
//     console.log(value);
//     console.log("hey babes2");
//   })
}
main();
console.log("hola amigo");


