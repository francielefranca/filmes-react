import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3/

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d167ca8a3cb54ed4cbaa9f9737a5a732

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;