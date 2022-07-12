const express = require('express')
const app = express()
const port = 4000

const productRoutes = require('./routes/product')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(productRoutes)

// 404
app.use(async (req,res) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

