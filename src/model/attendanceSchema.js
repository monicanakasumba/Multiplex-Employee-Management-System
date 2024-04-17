const mongoose = require("mongoose")
const schema = mongoose.Schema

const employeeAttendanceSchema = new schema({

    fullName:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    time_in:{
        type:"string",
        required:true
    }
})

const employeeAttandance = mongoose.model("EmployeeAttandance", employeeAttendanceSchema) //creating a studentRegistration model
module.exports = employeeAttandance
