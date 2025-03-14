const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    experience: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        required: true,
        trim: true
    },


}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
