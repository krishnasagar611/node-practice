// let express = require('express')
// let app = express();
// // console.log(app,"app")
// app.use(express.json())

// app.get("/", (req, res) => {
//     res.send({ status: 200, massage: "Hii this is home page api" })
// })

// app.post("/login", (req, res) => {
//     console.log(req.query)

//     res.send({ status: 200, userName: "sagar", pasword: "krishna", data: (req.body), querydata: req.query }) 
// })

// //dynamic params 

// app.get("/me/:id",(req,res)=>{
//     res.send({status:200,msg:"me api"})
// })




// app.listen(`8000`)

//closure 

// function outerFunction() {
//   let a = "sagar"
//   function innerFuntion(){
//     console.log("inner:--",a)
//   }
//   innerFuntion()
// }
// outerFunction()


//  const  outerFunction  = () => {
//     let a = "sagar"
//     const innerFuntion = () => {
//         console.log(a)
//     }
//     return innerFuntion();

// }
// outerFunction();

// async function foo() {
//     await console.log("asasa");
//   }
//   foo()

//   function foo() {
//     return Promise.resolve(1).then(() => undefined);
//   }

// let text =10
// function name1(text) {
//     console.log(text)
// }
// name1(text)


let obj = {
  name:"sagar",
  age:10
}

let PrintFullData = function(state,city){
    // console.log("My name is ",this.name +" and my age is "+ this.age + " from " + state , city )
}
PrintFullData.call(obj)


let obj2 = {
    name:"krishna",
    age:24
  }
//call
PrintFullData.call(obj2,"mumbai","bandra")

// apply

PrintFullData.apply(obj2,["odisha","bhadrak"])

// bind

let BindFn = PrintFullData.bind(obj2,"mumbai","bandra")
// console.log(BindFn)
BindFn()

let arr = [1,3,4454,64,33]
























