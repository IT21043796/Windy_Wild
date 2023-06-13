const router = require("express").Router();
let Product = require ("../models/product.js");

//create.........
router.route("/addP").post((req,res)=>{

    const name = req.body.name;
    const price = req.body.price;

    const newProduct = new Product({
        name,
        price
    }) 
    
    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err); 
    })
})

//get all
router.route("/getAllP").get((req,res)=>{

    User.find().then((products)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })

})

//update
router.route("/updateP/:id").put(async (req,res)=>{
    const productId = req.params.id;
    const {name, price} = req.body;

    const productUpdate = {
        name,
        price
    }

    const update = await User.findByIdAndUpdate(productId,productUpdate).then(() => {
        res.status(200).send({status : "product updated",product:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error sending data", error: err.message});
    })
})
/*
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
})*/

module.exports = router;