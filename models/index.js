const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Questions = new Schema({
    answers_3: Array,
    answers_4: Array,
    answers_5: Array,
    answers_6: Array,
    answers_7: Array,
    fastMoney: Array,
    broken: Array
})

module.exports = mongoose.model('Questions', Questions)