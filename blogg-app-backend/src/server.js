import express from 'express'

const app= express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello');
})
app.listen(4000,()=>{
    console.log('server is listening to 4000')
});