import axios from "axios";

const api = axios.create({
    baseURL: 'https://run.mocky.io/v3/8de626ff-6c73-45f5-b871-afdc68c66ec8',
});

export default api;
