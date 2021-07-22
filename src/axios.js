import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fashion-shop-9d589-default-rtdb.firebaseio.com/'
})

export default instance