const router = requir("express").Router();
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

    const update = await User.findByIdAndUpdate(userId,userUpdate)

    res.status(200).send({status : "User updated",user:update})

})

//my name is chikkiiii cha cha chikkiii

module.exports = router;