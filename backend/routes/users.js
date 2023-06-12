const router = require("express").Router();
let User = require ("../models/user.js");

//create.........
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;

    const newUser = new User({
        name,
        age,
        address
    }) 
    
    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err); 
    })
})

//get all
router.route("/").get((req,res)=>{

    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name, age, address} = req.body;

    const userUpdate = {
        name,
        age,
        address
    }

    const update = await User.findByIdAndUpdate(userId,userUpdate).then(() => {
        res.status(200).send({status : "User updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error sending data", error: err.message});
    })
})

//delete
router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status : "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error removing data", error: err.message});
    })
})

//fetch single record......
router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    const user = await User.findById(userId).then(() => {
        res.status(200).send({status : "User fetched"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error fetching data", error: err.message});
    })
})

module.exports = router;