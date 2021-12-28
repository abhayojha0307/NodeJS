const {pbkdf2}=require('crypto')

const start= Date.now()
const {createServer}=require('http')


const hash=()=>{
    pbkdf2('mypass','myverysecret',10000,1000,'sha256',()=>{
        console.log('Hash',Date.now()-start)
    })
}

const lis=()=>{
    createServer().listen(3000,()=>{
        console.log(`server start at port no 3000`,Date.now()-start)
    })
}



hash();
hash();
hash();
hash();
lis();