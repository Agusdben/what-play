import axios from 'axios'

const getAllGames = async () => {
  const { data } = await axios.get('https://ancient-plains-66549.herokuapp.com')
  return data
}

const exports = { getAllGames }

export default exports
