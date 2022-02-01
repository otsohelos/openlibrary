import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/books'

const findByKeyword = async (keyword) => {
  const res = await axios.get(`${baseUrl}/${keyword}`)
  console.log(res.data)
  return res.data
}

export default {
  findByKeyword
}