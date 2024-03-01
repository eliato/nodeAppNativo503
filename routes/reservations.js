const express = require('express');

const router = express.Router();
const Model = require('../model/reservations');

module.exports = router;

//method to post a trip
router.post('/postReservation', async (req,res) => {
    const data = new Model({
        tripId: req.body.tripId,
        fullName: req.body.fullName,
        customersQty: req.body.customersQty,
        authorizationNmb: req.body.authorizationNmb,
        total: req.body.total,
        phoneNumber: req.body.phoneNumber,
        idNumber: req.body.idNumber,
        pickupAddress: req.body.pickupAddress,
        reservationDate: req.body.reservationDate,
        preferedLanguage: req.body.preferedLanguage,
        originNation: req.body.originNation,
        deseaseOrmedicine: req.body.deseaseOrmedicine
    })

    //console.log(data)

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get All data
router.get('/getAllReservations', async (req, res) => {
    try{
        const data = await Model.find().populate('tripId');
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//TODO: Get data using date filter String format
//Get reservations by date
/*router.get('/getreservationsByDate/:date', async (req, res) => {
    try{

        const data = await Model;
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})*/

//Get by ID Method
router.get('/getOneReservation/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/updateReservation/:id', async (req, res) => {
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

//Delete by ID Method
router.delete('/deleteReservation/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

