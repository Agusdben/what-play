import axios from 'axios'

const API_URL = 'https://ancient-plains-66549.herokuapp.com/games'

const getAllGames = async () => {
  const { data } = await axios.get(API_URL)
  return data
}

const addGame = async (gameToAdd) => {
  const { data } = await axios.post(API_URL, gameToAdd)
  return data
}

const updateGame = async (gameId, gameToUpdate) => {
  await axios.put(`${API_URL}/${gameId}`, gameToUpdate)
}

const deleteGame = async (gameId) => {
  await axios.delete(`${API_URL}/${gameId}`)
}
const exports = { getAllGames, addGame, updateGame, deleteGame }

export default exports
