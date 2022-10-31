import axios from 'axios'

export const __API__ = 'http://localhost:3000'

const axiosInstance = axios.create({
  baseURL: __API__,
});

export default axiosInstance