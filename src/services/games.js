import axios from 'axios'

const API_URL = 'https://ancient-plains-66549.herokuapp.com/games'

const getAllGames = async () => {
  const { data } = await axios.get(API_URL)
  console.log(data)
  return data
}

const addGame = async (games) => {
  console.log(games)
  const { data } = await axios.post(API_URL, games)
  return data
}

const exports = { getAllGames, addGame }

export default exports
