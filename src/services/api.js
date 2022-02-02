import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5432',
    headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${localStorage.getItem('@tokenG5T2Afya')}`
    }
})