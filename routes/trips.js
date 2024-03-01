const express = require('express');

const router = express.Router();
const Model = require('../model/trips');

module.exports = router;

//method to post a trip
router.post('/postTrip', async (req,res) => {
    const data = new Model({
        images: req.body.images,
        destTitle: req.body.destTitle,
        location: req.body.location,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        include: req.body.include
    })

    console.log(data)

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get All data
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update commentary
router.put('/updateCommentary/:id', async (req, res) => {
    try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await Model.findOneAndUpdate(
       { "_id": id },
       {
        $push: {"reviews": updatedData}
       }
    )
    res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

