const express=require('express')
const mongoose=require('mongoose')
const app=express()

//database url
const url="mongodb+srv://Myuser:JAITLEy41@dharmendra.lfsnb.mongodb.net/Mydatabase?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
const con=mongoose.connection;
con.on('open',(req,res)=>{
    console.log("Connected to database");
})



app.use(express.json());
const studentrouter=require('./Routes/StudentRouter');
app.use('/student',studentrouter);

app.listen(5000)