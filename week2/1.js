// function myasync(){
//     let p= new Promise(function(resolve){
//         setTimeout(resolve,2000)
//         })
//         console.log("kk")
//     return p;
// };

// myasync().then(function(){
//     console.log("jj");
// })

function PmyOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(()=>{
        console.log('i am here')
        resolve();
    }, duration);
    
  });
  return p;
}

const a=PmyOwnSetTimeout(1000)
a.then(function () {
  console.log("after settlement");
});


