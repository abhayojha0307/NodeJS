// const {createReadStream,createWriteStream}=require('fs')

// const readStream=createReadStream('./abhay.txt')

// const writeStream=createWriteStream('./abhay2.txt')

// readStream.pipe(writeStream)

const {createServer}=require('http')

const server=createServer()

server.listen(3000)

server.on('connection',(socket)=>{
    console.log(socket)
})