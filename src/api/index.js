import axios from 'axios';



export async function getDemUsers() {
  try {
    const {data: {user}} = await axios.get('/api/users')

    return user
  } catch (error) {
    console.log(error)
  }
}