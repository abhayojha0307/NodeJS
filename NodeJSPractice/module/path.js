const path=require('path')

const mod=require('./subModule/mod')

const {readFile}=require('fs')

// // console.log(__dirname)

// // console.log(__filename)

// // console.log(process.cwd())
// console.log(__filename)

// const base=path.basename(__filename)

// const ext=path.extname(__filename)

// const parse=path.parse(__filename)

// console.log(parse)

readFile(path.join(__dirname,'subModule','mod.js'),'utf-8',(err,data)=>{
    console.log(data)
})