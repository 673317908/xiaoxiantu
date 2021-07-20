import axios from 'axios';

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const myAxios = axios.create({
  baseURL,
  timeout: 10000
})

myAxios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

myAxios.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.status === 401) {
    console.log('错误')
  }
  return Promise.reject(err)
})

export default (url, method, data) => {
  return myAxios({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}