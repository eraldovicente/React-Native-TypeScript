import axios from 'axios';

const movieDB = axios.create({
     baseURL: 'https://api.themoviedb.org/3/movie',
     params: {
          api_key: '5439ed2042ffca5b21f1de70cb9fa15e',
          language: 'es-ES'
     }
});

export default movieDB;