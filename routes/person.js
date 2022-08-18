const express = require('express')
const router = express.Router()

const CreateBody = require('../models/create')
const InsertBody = require('../models/insert')
const DeleteBody = require('../models/delete')


router.get('/person', async (req, res) => {
    res.send()
})

// create members
router.post('/person', async (req, res) => {
    let create = new CreateBody()
    
    await create.createData()
    console.log('Tabela criada')
    res.send()
})

router.post('/person/insert', async (req, res) => {
    let insert = new InsertBody()
    
    await insert.insertData(req.body)
    console.log('Dados inseridos')
    res.send()
})

// UPDATE
router.put('/person', async (req, res) => {
    res.send()
})

// DELETE
router.delete('/person', async (req, res) => {
    let deleteitem = new DeleteBody()

    await deleteitem.deleteAll()
    console.log('delete feito')
    res.send()
})


module.exports = router

