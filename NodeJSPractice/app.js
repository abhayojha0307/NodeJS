const http=require('http')
const PORT=5050
const dbconnection=false

if(dbconnection){
    process.exit(1)
}

const server=http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.end(`
                <html>
                    <head>
                        <h1>Blank</h1>
                    </head>
                </html>
            `);
            break;
        case '/abhay':
            res.end(`
                <html>
                    <head>
                        <h1>Abhay</h1>
                    </head>
                </html>
            `);
            break;
        case '/admin':
            res.end(`
                <html>
                    <head>
                        <h1>admin</h1>
                    </head>
                </html>
            `);
            break;
        case '/user':
            res.end(`
                <html>
                    <head>
                        <h1>Abhay</h1>
                    </head>
                </html>
            `);
            break;
            case '/user':
                res.end(`
                    <html>
                        <head>
                            <h1>Abhay</h1>
                        </head>
                    </html>
                `);
                break;
        default:
            res.end(`Any default url`)
            break;
    }
})

server.listen(PORT,()=>{
    console.log(`Server Run on port no ${PORT}`)
})

