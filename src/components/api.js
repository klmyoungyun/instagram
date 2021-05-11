import axios from 'axios';

const callApi = async (method , path, data) => {
    const baseUrl = '';
    const fullUrl = `${baseUrl}${path}`
    if(method === 'post'){
        return axios.post(fullUrl, data);
    }
    else if(method === 'get'){
        return axios.get(fullUrl, data);
    }
}
export default{
    createAccount: form => callApi('post', '/signUp/v1/members', form),
    login: form => callApi('post', '/signIn/v1/members', form),
    getProfile: form => callApi('get',' ',form),
    getFeedList : form => callApi('get',' ',form),
    getStory: form => callApi('get',' ',form),
    getHomeFeed : form => callApi('get',' ',form),
}
