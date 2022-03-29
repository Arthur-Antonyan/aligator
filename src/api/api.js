import axios from 'axios'

const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/posts`,
})

const userApi = {
  getUsers(setDefaultState, setIsFetching, setError) {
    instance
      .get()
      .then((response) => {
        setDefaultState(response.data)
        setIsFetching(false)
      })
      .catch((err) => {
        setIsFetching(false)
        setError(true)
      })
  },
}
export default userApi
