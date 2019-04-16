import axios from 'axios';

const KEY = 'AIzaSyCff5ERfAEFCCRAYs5IbOfKOfv6xvMLYNU';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});