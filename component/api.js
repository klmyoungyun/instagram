import axios from 'axios';

const callApi = async (method , path, data) => {
    const baseUrl = 'http://121.129.210.83:8080/';
    const fullUrl = `${baseUrl}${path}`
    if(method === 'post'){
        return axios.post(fullUrl, data);
    }
}
export default{
    createAccount: form => callApi('post', '/signUp/v1/members', form),
    login: form => callApi('post', '/signIn/v1/members', form),
}