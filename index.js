let express = require('express')
let app = express();
// console.log(app,"app")
app.use(express.json())

app.get("/", (req, res) => {
    res.send({ status: 200, massage: "Hii this is home page api" })
})

app.post("/login", (req, res) => {
    console.log(req.query)

    res.send({ status: 200, userName: "sagar", pasword: "krishna", data: (req.body), querydata: req.query }) 
})

//dynamic params 

app.get("/me/:id",(req,res)=>{
    res.send({status:200,msg:"me api"})
})

app.listen(`8000`)