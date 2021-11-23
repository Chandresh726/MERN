const http=require("http");
const hostname="127.0.0.1";
const port=8000;
const htt = http.createServer((req,res)=>{
    res.writeHead(200,{'Content_Type':'text/plain'})
    res.end('hello')
});
htt.listen(port,()=>{
    console.log("server at 8000");
});