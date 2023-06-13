const express = require('express')
const router = express.Router()
const expenceController = require('../controller/expence')
module.exports = router

router.get('/',expenceController.getExpenceData)

router.post('/',expenceController.postExpenceData )

router.put('/:id' , expenceController.editExpenseData)

router.delete('/:id', expenceController.deleteExpenseData)