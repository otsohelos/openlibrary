const axios = require('axios')
const bookRouter = require('express').Router()

const http = require('http')
const baseUrl = "https://openlibrary.org/books/OL7353617M.json"


const app = http.createServer((request, response) => {
    axios.get(`${baseUrl}`).then(res => console.log(res.data))
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World')
})

commentsRouter.get('/', async (request, response) => {
    const books = await axios.get(`${baseUrl}`)
    response.json(comments.map(comm => comm.toJSON()))
  })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)