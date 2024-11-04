import axios from 'axios';
import type { AxiosInstance } from 'axios';
let instance: AxiosInstance | null  = null;
function request(): AxiosInstance {
    if(instance) return instance;
    instance = axios.create({
        timeout: 5000
    });
    return instance;
};

export default request();