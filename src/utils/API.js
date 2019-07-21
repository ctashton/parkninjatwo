import axios from 'axios';

export default {
    search: function(){
        return axios.get({
            URL: `http://192.168.1.160:3001/rides`,
            headers: {
              'Access-Control-Allow-Origin': '*',
            }})
    }
}