const movies=require('./movies.json')
const reviews=require('./reviews.json')
const users=require('./users.json')

let getmovie=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const movie=movies.find((movie)=> movie.id===id)
            if(movie){
                resolve(movie)
            }else{
                reject('Movie Not Found')
            }
        },1000)
    })  
};

let getreviews=(movieId)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const review=reviews.find((review)=> review.movie_id=movieId)
        if(review){
            resolve(review)
        }
        else{
            reject('Review Not Found')
        }
    },1000)
})
};

let getusers=(username)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const user=users.find((user)=> user.name===username)
        if(user){
            resolve(user)
        }
        else{
            reject('User Not Found')
        }
    },1000)
})
};

// getmovie(2)
//     .then((res)=>{
//         getreviews(res.id)
//             .then((res)=>{
//                 getusers(res.reviewer)
//                     .then((res)=>{
//                         console.log(res)
//                     })
//             })
//     })
//     .catch((rej)=>{
//         console.log(rej)
// })

(
    async()=>{
        try{
        const movie=await getmovie(1)
        const review = await getreviews(movie.id)
        const user= await getusers(review.reviewer)
        console.log(user)
        }
        catch(err){
            console.log(err)
        }
    }
)();
