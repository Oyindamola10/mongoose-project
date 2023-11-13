const express = require('express')

const Staff = require('./modules/Staff')

const router = express.Router();

router.get('/staffs', async (req,res) =>{
    const posts = await Staff.find();
    res.status(200).json(posts);
})

router.post('/staffs', async (req,res) => {
    const{first_name, last_name, age, gender, marital_status,role} = req.body

    const staff = new Staff({
        first_name,
        last_name,
        age,
        gender,
        marital_status,
        role

    })
    await staff.save()

    if (!staff){
        res.status(500).json({error:"Error creating staff"})
    }
    res.status(200).json({message: "Staff created succesfully",staff})
})

module.exports = router;