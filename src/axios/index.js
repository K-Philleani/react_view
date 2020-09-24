import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(
    config => {
      console.log(config)
      return config
    },
    err => {
      return Promise.reject()
    }
)

axios.interceptors.response.use(
    response => {
      return response.data
    },
    err => {
      return Promise.reject()
    }
)


export default axios
