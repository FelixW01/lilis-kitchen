const express = require('express');
const router = express.Router();
const Food = require("../../models/Food.js");

// Define your API endpoints here
router.get('/food', async (req, res) => {
    // Handle GET request for /api/food
    try {
        const food = await Food.find();
        res.send(food);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
    res.send(food);
});

router.post("/food", async (req, res) => {
    const {name, price, count, weight, quantity, img, description, ingridients} = req.body;
	const newFood = new Food({
		name,
        price,
        count,
        weight,
        quantity,
        img,
        description,
        ingridients
	});
	await newFood.save((err, food) => {
		if (err) {
			res.send(err);
		} else {
			res.send(food);
		}
	})	
});

router.get('/food/:id', (req, res) => {
    // Handle GET request for /api/food/:id
    const userId = req.params.id;
    res.send(`Get user with ID ${userId}`);
});

router.put('/food/:id', (req, res) => {
    // Handle PUT request for /api/food/:id
    const userId = req.params.id;
    res.send(`Update user with ID ${userId}`);
});

router.delete('/food/:id', (req, res) => {
    // Handle DELETE request for /api/food/:id
    const userId = req.params.id;
    res.send(`Delete user with ID ${userId}`);
});

// Export the router
module.exports = router;