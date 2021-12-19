const express = require('express')
const router = express.Router()
const Questions = require('../models')

router.get('/', async(req, res) => {
    Questions.findById("61bf62da53a4655cff1fb8ce", (err, questions) => {
        const newQuestions = {
            answers_3: questions["answers_3"],
            answers_4: questions["answers_4"],
            answers_5: questions["answers_5"],
            answers_6: questions["answers_6"],
            answers_7: questions["answers_7"],
            fastMoney: questions["fastMoney"],
            broken: questions["broken"]
        }
        if(questions) res.status(200).json(newQuestions)
        res.status(500)
    })
})


router.get('/:option', async(req, res) => {
    try {
        const option = req.params.option
        if(option) {
            Questions.findById("61bf62da53a4655cff1fb8ce", (err, questions) => {
                if(questions) res.status(200).json(questions[option])
                res.status(500)
            })
        }
    } catch (error) {
        res.status(500)
    }
})

module.exports = router 