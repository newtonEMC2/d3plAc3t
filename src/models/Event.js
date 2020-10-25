const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Invoice user schema
const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
})

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)

module.exports = Event
