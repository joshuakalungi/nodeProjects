// console.log("first task");

// setTimeout(()=>{
//     console.log("finished first task");
// },200)

// console.log("start second task");

// working with Promises
const { Console } = require('console')
const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


// const getText = (path) => {
//     return new Promise((resolve, reject)=> {
//         readFile(path,"utf8",(err, data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./context/text.txt')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))


// using async await
const start = async() => {
    try{
        const first = await readFilePromise('./context/text.txt','utf8')
        const second = await readFilePromise('./context/second.txt','utf8')
        await writeFilePromise('./context/final.txt',`This is the result: ${first},${second}`)
    }catch(error){
        console.log(error)
    }
    
}

start()