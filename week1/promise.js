//creating an async function on top of fs
//ugly way.... pretty way is to use promises
const fs=require('fs');
// function func(cb)
// {
//     fs.readFile("a.txt","utf-8",function(err,data){
//         if(err){
//             console.error(err)
//         }
//         cb(data);
//     })
// }

// function reading(data){
//     console.log(data);
    
// }

// func(reading)
// console.log("am i first")



//pretty way
// function myownasync(){
//     console.log("inside myownsync")
//     return new Promise(function(resolve){
//         console.log("inside promise")
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before resolve")
//             resolve(data);
//         });
//     })
// }

// function reading(data){
//     console.log(data);
// }

// var a=myownasync();
// a.then(reading)

// console.log("will i")


// function myownasync(){
//     console.log("inside myownsync")
//     let p= new Promise(function(resolve){
//         console.log("inside promise")
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before resolve")
//             resolve(data);
//         });
//     })
//     return p;
// }

// function reading(data){
//     console.log(data);
// }

// myownasync().then(reading);

// console.log("will i")

