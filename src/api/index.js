import axios from 'axios';

export async function getDemAlcohols() {
  try {
    const { data } = await axios.get('/api/alcohol')

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getDemUsers() {
  try {

    const { data } = await axios.get('/api/users')


    return data
  } catch (error) {
    console.log(error)
  }
}

export async function registerUserAccount(username, password) {
  try {
    await axios.post('/api/users/register', {username, password})

    return true
  } catch (error) {
    console.log(error)
  }
}
