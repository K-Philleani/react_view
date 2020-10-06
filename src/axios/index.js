import axios from 'axios'
import qs from 'querystring'
import * as Cookies from 'js-cookie'


axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(
    config => {
      let token = Cookies.get('token')
      if (token) {
        config.headers.Authorization = "Bearer " + token;
        console.log('interceptors config=',config)
      }      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
      }
      return config
    },
    err => {
      return Promise.reject()
    }
)

axios.interceptors.response.use(
    response => {
      if (response.data.token) {
        Cookies.set('token', response.data.token)
      }
      return response.data
    },
    err => {
      return Promise.reject()
    }
)


export default axios
