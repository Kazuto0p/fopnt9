const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://umamahesh9447230:kazuto14@cluster0.eoieac4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Payment Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema
const PaymentSchema= new mongoSchema({
    fullName: String,
    address: String,
    location: String,
    phoneNumber: Number,
})

var Payment=mongoose.model("Payment",PaymentSchema)
module.exports=Payment