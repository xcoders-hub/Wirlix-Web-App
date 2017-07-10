const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const debatesSchema = mongoose.Schema({
    challenger: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    challengee: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    topic: {
        type: ObjectId,
        ref: 'Topic',
        required: true,
    },
    created: {
        type: Date,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    rational: {
        type: Number,
        default: 0,
    },
    emotional: {
        type: Number,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
    subscribers: [
        {type: ObjectId, ref: 'User'}
    ],
});

module.exports = mongoose.model('Debate', debatesSchema);