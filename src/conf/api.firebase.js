import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://films-9a30f.firebaseio.com/'
});

export default apiFirebase;