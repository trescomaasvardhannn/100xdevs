/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p= new Promise(function(resolve)
    {
        setTimeout(()=>{
            console.log(`printing after ${n} seconds`);
            resolve();
            
        },n*1000)
    })
    return p;

    //directly return new Promise
    
}

module.exports = wait;
