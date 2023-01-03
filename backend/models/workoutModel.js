//Schema file

const mongoose = require('mongoose')
const { stringify } = require('querystring')

//Schema function
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type:Number,
        required: true
    },
    weight:{
        type:Number,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    user_id:{
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)