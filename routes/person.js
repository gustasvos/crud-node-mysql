const express = require('express')
const router = express.Router()

const CreateBody = require('../models/create')
const InsertBody = require('../models/insert')


router.get('/person', async (req, res) => {
    res.send()
})

// create members
router.post('/person', async (req, res) => {
    let create = new CreateBody()
    
    await create.CreateData()
    console.log('aaa')
    res.send()
})

router.post('/person/insert', async (req, res) => {
    let insert = new InsertBody()
    
    await insert.InsertData()
    console.log('aaa')
    res.send()
})

// UPDATE
router.put('/person', async (req, res) => {
    res.send()
})

// DELETE
router.delete('/produt', async (req, res) => {
    res.send()
})


module.exports = router
