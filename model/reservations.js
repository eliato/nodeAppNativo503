const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    tripId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trips",
        required: [true, "Please select a Trip"]
    },
    fullName:{
        type: String,
        required: [true, "Please insert a name"]
    },
    customersQty:{
        type: Number,
        required: true
    },
    authorizationNmb:{
        type:String,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    idNumber:{
        type: String,
        required: true
    },
    pickupAddress:{
        type:String,
        required:true
    },
    reservationDate:{
        type: String,
        required: true
    },
    preferedLanguage:{
        type: String,
        required:true
    },
    originNation:{
        type:String,
        required: true
    },
    deseaseOrmedicine:{
        type: String,
        required: true
    },
    reservedDate: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Reservations', reservationSchema)