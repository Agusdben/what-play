import axios from 'axios'

const getAllGames = async () => {
  const { data } = await axios.get('https://ancient-plains-66549.herokuapp.com')
  console.log(data)
  return data
}

const addGame = async (games) => {
  console.log(games)
  const { data } = await axios.post('https://ancient-plains-66549.herokuapp.com', games)
  return data
}

const exports = { getAllGames, addGame }

export default exports
