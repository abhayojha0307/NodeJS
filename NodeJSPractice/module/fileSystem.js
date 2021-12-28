const {opendir , stat, open,readFile,writeFile, write}=require('fs')

const {promisify}=require('util')

const oDir=promisify(opendir)

const getStat=promisify(stat)

// oDir('./').then(async(dir)=>{
//     for await(let direct of dir){
//         console.log(direct.name)
//     }
// }).catch((err)=>{
//     console.log(err)
// })
// getStat('./eventEmitter.js')
// .then((stat)=>{
//     console.log(stat)
// })
// .catch((err)=>{
//     console.log(err)
// })

// open('eventEmitter.js',(err,fc)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
// })

// readFile('../async/movies.json','utf-8',(err,fc)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(fc)
//     }
// })

readFile('abhay.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})