const { EventEmitter} =require('events')

const eventEmitter=new EventEmitter();

eventEmitter.on('Greetings',(name)=>{
    console.log(`Hello ${name}`)
})

eventEmitter.on('Greetings',()=>{
    console.log(`Hello Bicky`)
})

eventEmitter.emit('Greetings','Abhay')

const http=require('http')

const server=http.createServer()

server.on('listening',()=>{
    console.log('Listening On')
})

// server.emit('listening')
server.listen(3000)