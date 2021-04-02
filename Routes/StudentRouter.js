const express=require('express')
const mongoose=require('mongoose')
const Student = require('../models/Student')
const router=express.Router()

//for inserting data into database
router.post('/save', async (req,res)=>{
    const student=new Student(
    {
        Name:req.body.Name,
        Age:req.body.Age,
        Marks:req.body.Marks
    }
    )

    try {
        //let response=student.save();
        res.json(await student.save());
    } catch (error) {
        res.json(error);
    }
})

//Get all data from database
router.get('/',async (req,res)=>{
    try {
        res.json(await Student.find())
    } catch (error) {
        res.json(error)
    }
})


//Get all data from database in sorting order by Age
router.get('/sort',async (req,res)=>{
    try {
        let response=await Student.find();
        //res.json(await Student.find())
        response.sort((a,b)=>{
           return a.Age-b.Age
        })
        res.json(response);
    } catch (error) {
        res.json(error)
    }
})

//get sum of marks
router.get('/marks',async (req,res)=>{
    try {
        let response=await Student.find();
        let sum=0;
       response.map((Student)=>{
           sum=sum + Student.Marks;
       })
       res.json("Sum of Marks is: "+ sum);
    } catch (error) {
        res.json(error)
    }
})

module.exports=router;