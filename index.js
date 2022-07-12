const express = require('express')
const app = express()
const port = 4000

const personRoutes = require('./routes/person')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(personRoutes)

// 404
app.use(async (req,res) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

