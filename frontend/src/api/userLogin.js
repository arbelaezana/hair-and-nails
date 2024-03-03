import axios from 'axios';

export const getUserLogin = async () => {
    console.log('=>', 'GET');
    const options = {
        method: 'get',
        url: 'http://localhost:3007/userLogin'
    }
    const {data} = await axios.request(options)
    console.log('=>', 'result', data);
    return data
}