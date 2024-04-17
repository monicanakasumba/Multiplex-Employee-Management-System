const express = require("express")
const router = express.Router()
const attendanceSchema = require("../model/attendanceSchema")

// asynchronous runs one function after the other
// synchronous runs many functions at the same time
// req - request
// res - respond
router.post("/attendance", async(req, res)=>{
    const data = req.body


    try {
        const attendanceData = new attendanceSchema(data)
        await attendanceData.save()
    } catch (error) {
       res.send(error).status(400) 
    }
})


// GET method
// router.get("/attendance", async(req, res)=>{

//     try {
//         const allattendanceData = await attendanceSchema.find()
//         res.json(allattendanceData)
//     } catch (error) {
//         res.status(500).json({msg:err.message})
//     }
// })

// GET method (get by id)
router.get("/attendance", async(req, res)=>{

    try {
        const specificAttendanceData = await attendanceSchema.find(data)
        res.status(200).send(specificAttendanceData)
    } catch (error) {
        res.status(200).json({msg:err.message})
    }
})

module.exports = router