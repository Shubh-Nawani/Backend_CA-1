const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')

app.get("/", (req, res) => {
    try {
        return res.status(200).send("Backend is running...")
    } catch (err) {
        return res.status(500).send("Internal Server Error!")
    }
})


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    try {
        connectDB()
        console.log(`Server is listening on http://localhost:${PORT}`)
    } catch (err) {
        console.error(err.message)
    }
})