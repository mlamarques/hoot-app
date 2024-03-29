import axios from 'axios'

export const api = axios.create({
    // baseURL: 'http://localhost:5432',
    baseURL: 'https://hoot-api.herokuapp.com/',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    transformRequest: [(data, headers) => {
        // You may modify the headers object here
        headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
        // Do not change data
        return data;
      }, ...axios.defaults.transformRequest]
})