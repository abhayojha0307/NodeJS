const check=false

const promise=new Promise((resolve,reject)=>{
    if(check){
        resolve('done')
    }
    else{
        reject('Failed')
    }
})

promise.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})