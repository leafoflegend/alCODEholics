import axios from 'axios';

export async function getDemAlcohols() {
  try {
    const { data: {alcohol} } = await axios.get('/api/alcohol')

    return alcohol
  } catch (error) {
    console.log(error)
  }
}

export async function getDemUsers() {
  try {
    const {data: {users}} = await axios.get('/api/users')

    return users
  } catch (error) {
    console.log(error)
  }
}

