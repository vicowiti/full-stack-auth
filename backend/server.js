import express from 'express'
import dotenv from 'dotenv'


dotenv.config()
const PORT = process.env.PORT
// Initialize app
const app = express()

// Test endpoint

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'We up'
    })
})

app.listen(PORT, console.log(`App running on port: ${PORT}`))

