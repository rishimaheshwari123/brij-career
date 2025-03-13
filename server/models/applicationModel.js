const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        trim: true
    },
    applicationFor: {
        type: String,
        required: true,
        trim: true
    },
    resumeUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
