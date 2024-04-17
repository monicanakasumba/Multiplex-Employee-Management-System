const express = require("express") //express is a framework for javascript
const mongoose = require("mongoose") //package that helps us connect to the mongoose  database
const bodyParser = require("body-parser") //package that encodes and decodes 
const router =require("./src/routes/routes")
const cors = require("cors")

const app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const port = 7000 //or const port = process.env.PORT || 8080
//require("dotenv/config")
const url = "mongodb+srv://Nakasumba_monica:3lis1121@cluster0.8gse9xj.mongodb.net/employees"
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "./attendace_form.html")
})

app.use(express.json())
app.use("/", router) //middleware btn route and database
app.use(express.static("Frontend"))


mongoose.connect(url).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server running on port ${port}`)
    })
}).catch(error=>{
    console.log("error occured at: ", error)
})      