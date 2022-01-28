const axios = require('axios')
const express = require('express')
const app = express()
const bookRouter = require('express').Router()
const cors = require('cors')



app.use(cors())
app.use(express.json())


const http = require('http')
const baseUrl = "https://openlibrary.org/books/OL7353617M"

bookRouter.get('/', async (request, response) => {
    const books = await axios.get(`${baseUrl}`)
    if (books) {
        response.json(books.data)
    } else {
        response.status(404).end()
      }
})



app.use('/api/books', bookRouter)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)