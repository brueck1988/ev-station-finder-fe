import axios from 'axios';
import { getEnvironmentConfig } from 'modules/common/environment.config';

const config = getEnvironmentConfig();

const axiosHttpClient = axios.create({
  // BaseURL for the back-end API, all requests will be sent relative to this URL
  // This will need to be configurable based on it's environment
  // URL's can be found in their .env files by their respective environment
  baseURL: config.REACT_APP_API_BASE_URL,
  // Timeout if request takes longer than 6 seconds - may need to adjust if some endpoints are slow
  timeout: 6000,
});

export default axiosHttpClient;