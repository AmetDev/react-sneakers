import axios from 'axios'

export const fetchedData = async () => {
  try {
    const data = await axios.get('https://65eb231e43ce164189335127.mockapi.io/sneakers/sneakers')
    return data.data
  } catch (error) {
    return error
  }
}
