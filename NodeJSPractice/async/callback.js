const movies=require('./movies.json')
const reviews=require('./reviews.json')
const users=require('./users.json')

let getmovie=(id,cb)=>{
    setTimeout(()=>{
        const movie=movies.find((movie)=> movie.id===id)
        cb(movie)
    },1000)
};

let getreviews=(movieId,cb)=>{
    setTimeout(()=>{
        const review=reviews.find((review)=> review.movie_id=movieId)
        cb(review)
    },1000)
};

let getusers=(username,cb)=>{
    setTimeout(()=>{
        const user=users.find((user)=> user.name===username)
        cb(user)
    },1000)
};

getmovie(2,(movie)=>{
    getreviews(movie.id,(review)=>{
        getusers(review.reviewer,(user)=>{
            console.log(user)
        })
    })
})

