// Q1 ==========================================================
// function delayedGreet(name, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello: " + name);
//         }, delay);
//     });
// }
// delayedGreet("Moshe", 1000).then(res => {
//     console.log(res);
// })


// Q2 ==================================================================
// import fs from "fs";

// function readFileContent(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// }
// readFileContent("./db.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// Q3 ======================================================
// function randomOperation(){
//     return new Promise((res, rej)=>{
//         const rand = Math.random();
//         if(rand > 0.5) res("Success!")
//         else rej("Failure!")
//     })
// }
// randomOperation()
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej));

// Q4 ===========================================================

function raceTimers(timeA,timeB){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Timer A finished!")
        }, timeA);
        setTimeout(() => {
            res("Timer B finished!")
        }, timeB);
    })
}

raceTimers(3000,2000).then(res => {
    console.log(res);
}).catch(rej => {
    console.log(rej);
})