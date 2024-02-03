const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Restaurant = require('../model/restaurantModel');


//TASK 4
// router.get("/", (req, res) => {
//     Restaurant.find()
//         .then(restaurants => res.json(restaurants))
//         .catch(err =>{
//             res.status(500).json(err);
//         }) 
// })


// TASK 5
router.get('/cuisine/:cuisine',(req, res) => {
    const cuisine = req.params.cuisine;
    console.log(cuisine);
    Restaurant.find({cuisine})
        .then(restaurants => {
             res.json(restaurants);
        })
        .catch(err => {
             res.status(500).json(err);
        })

});


// TASK 6

router.get('/', (req, res) => {
    const sortOrder = req.query.sortBy === 'DESC' ? -1 : 1;

    console.log(req.query.sortBy)
    console.log(sortOrder)

    Restaurant.find()
       .sort({restaurant_id: sortOrder})
       .then(restaurants => {
            res.json(restaurants);
        })
       .catch(err => {
            res.status(500).json(err);
        })
})

// TASK 7 

router.get('/Delicatessen', (req, res) => {
    Restaurant.find({cuisine: "Delicatessen", "address.city": { $ne: 'Brooklyn' }})
        .then((restaurants) => {
            res.json({restaurants});
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})



module.exports = router;