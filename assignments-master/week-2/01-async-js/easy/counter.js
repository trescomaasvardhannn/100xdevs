// let val=0;

// function timer(){
//     console.log(val);
//     val++;
// }

// setInterval(timer,1000);

//now doing without using setinterval
let val = 2;
function timer() {
  console.log(val);
  if (val != 0) {
    val--;
    setTimeout(timer, 1000);
  }
}

timer();