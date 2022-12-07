import axios from 'axios'

 const instance = axios.create({
    baseURL: 'http://192.168.0.17:3000/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type' : 'application/json'
    }
  });
  
  export default instance;