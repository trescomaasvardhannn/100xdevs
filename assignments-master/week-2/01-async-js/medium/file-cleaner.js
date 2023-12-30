const fs = require("fs");

// let finalRes = "";
// function toCompFirst() {
//   const p = new Promise(function (resolve) {
//     fs.readFile("tset.txt", "utf-8", function (err, data) {
//       finalRes = data.split(" ").filter(Boolean).join(" ");
//       console.log(finalRes);
//     });
//     resolve();
//   });
//   return p;
// }
// toCompFirst().then(function () {
//   fs.writeFile("tset.txt", finalRes, function (err) {
//     if (err) console.log("obtained error is " + err);
//   });
// });



// Reading file synchronously
try {
    let finalRes = fs.readFileSync("tset.txt", "utf-8");
    
    // Removing extra spaces
    finalRes = finalRes.split(" ").filter(Boolean).join(" ");
    console.log(finalRes);

    // Writing file asynchronously
    fs.writeFile("tset.txt",finalRes,"utf-8",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("successfully written")
        }
    })
} catch (err) {
    console.error(err);
}
