// 1.import the express
const express =require('express')
const Food=require('./models')
const cors =require('cors')
const Signup=require('./model')
const Payment =require('./payment');
// const Food = require('./models')



// 2

const app=new express()

// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())







// api to add data to db
app.post('/add',async(req,res)=>{
    const result=await new Food(req.body);
    result.save();
    res.send("data added")
})
app.post('/Signup',async(req,res)=>{
    var result = await new Signup(req.body)
    result.save()
    res.send("data added")
})

app.get('/Update',async (req, res)=> {
    var data = await Food.find()
    res.json(data)
    console.log(data)
})
  
// Deleting a data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await Food.findByIdAndDelete(id);
    res.send("Deleted")

})

app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await Food.findByIdAndUpdate(id,req.body);
    res.send("updated")
    })
    

// delete


// Routes
app.post('/api/payments', async (req, res) => {
    const { fullName, address, location, phoneNumber } = req.body;
  
    try {
      const payment = new Payment({
        fullName,
        address,
        location,
        phoneNumber,
      });
  
      await payment.save();
      res.status(201).send('Payment data saved successfully');
    } catch (error) {
      console.error('Error saving payment data:', error);
      res.status(500).send('Error saving payment data');
    }
  });


//api for login
app.post("/login", (req, res) => {
    const { oname, opass } = req.body;
    Signup.findOne({ oname: oname })
        .then(user => {
            if (user) {
                if (user.opass === opass) {
                    res.json("success")
                } else {
                    res.json("password is incorrect")
                }
            } else {
                res.json("no data existed")
            }
        })
        .catch(err => console.log(err));
})

// api to view data from db
app.get('/view',async(req,res)=>{
    let result=await Food.find();
    res.json(result);
})
app.get('/view', async (req, res) => {
;
    let result = await Signup.find();
    res.json(result);
})
// 4.create a localhost port
app.listen(8080,()=>{
    console.log("port is running at 8080")
})