import axios from 'axios'
import userService from './user'
const baseUrl = '/api/blogs'

// let token = null

const config = () => {
  return {
    headers: {
      Authorization: `bearer ${userService.getToken()}`,
    },
  }
}

// const setToken = (newToken) => {
//   token = `bearer ${newToken}`
// }


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config())
  return response.data
}

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then((response) => response.data)
// }

const like = async (blog) => {

  const response = await axios.put(
    `${baseUrl}/${blog.id}`,
    { ...blog, likes: blog.likes + 1 },
    config(),
  )
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config())
  return response.data
}

export default { getAll, create, like, remove }
