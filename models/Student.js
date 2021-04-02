const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    Name:String,
    Age:Number,
    Marks:Number
})

module.exports=mongoose.model('Student_tb',studentSchema);
//Student_tbs will be table name inside mongodb