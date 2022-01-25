import axios from 'axios'

const API_URL = 'https://ancient-plains-66549.herokuapp.com/contact'

const sendEmail = async (data) => {
  await axios.post(API_URL, data)
}

const exports = { sendEmail }

export default exports
