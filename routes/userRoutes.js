const express = require("express");
const userData = require("../modals/about");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await userData.find({});
        res.status(200).json({ data });
    }
    catch (err) {
        console.log("Some thing error can not find users")
        res.status(500).json({ err: "can not find users" })
    }
});
router.get("/:Name", async (req, res) => {
    try{
        const Name = req.params.Name;
        console.log(Name)
        const findData = await userData.find({name: Name})
        console.log(findData)
        res.status(200).json({"user": findData})
    }
    catch(err){
        console.log(err)
        res.status(500).json({err})    
    }
})
router.post("/about", async (req, res) => {
    try {
        const data = req.body
        const newPerson = new userData(data)

        const personData = await newPerson.save();
        res.status(200).json({"user submitted": personData })
    }
    catch (err) {
        console.log("Data Error")
        res.status(500).json({ err: "Internal server Error" });
    }
})

router.put("/:id", async (req, res) => {
    try{
        const userId = req.params.id;
        const updatedData = req.body;

        const responce = await userData.findByIdAndUpdate(userId, updatedData,{
        new:true,
        newValidators: true,
    })
    console.log("user updated")
    res.status(200).json({responce});
    }catch(err){
        console.log(err)
        res.status(500).json({"update unsuccessful": err})
    }
})

router.delete("/:id", async (req, res) => {
    const userId = req.params.id;

    const deleteUser = await userData.findByIdAndDelete(userId)
    res.status(200).json("Deleted Successfully")
})


module.exports = router;