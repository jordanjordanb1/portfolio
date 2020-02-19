const mongoose = require('mongoose'),
    Schema = mongoose.Schema


const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    technology: {
        type: [String],
        required: true
    },
    isHeroku: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema)