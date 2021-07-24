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

    const { data } = await axios.get('/api/users')


    return data
  } catch (error) {
    console.log(error)
  }
}

export async function registerUserAccount(username, password) {
  try {
    // Are we not expecting any sort of response here?
    await axios.post('/api/users/register', {username, password})

    return true
  } catch (error) {
    console.log(error)
  }
}
