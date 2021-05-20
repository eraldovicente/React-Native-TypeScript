import axios from 'axios';

const baseURL = 'http://10.0.0.242:8080/api';

const cafeApi = axios.create({ baseURL });

export default cafeApi;