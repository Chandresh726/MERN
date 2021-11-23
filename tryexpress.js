const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.get('/akshat',(req,res)=>{
    res.send('helloa world');
});
app.get('/chandresh',(req,res)=>{
    res.send('helloc world');
});
app.listen(port,()=>{
    console.log(`${port}`)
});