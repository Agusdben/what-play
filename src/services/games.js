import axios from 'axios'

const API_URL = 'https://ancient-plains-66549.herokuapp.com/games'

const getAllGames = async () => {
  const { data } = await axios.get(API_URL)
  return data
}
const exports = { getAllGames }

export default exports
