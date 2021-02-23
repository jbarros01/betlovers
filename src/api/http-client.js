import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const MAX_REQUEST_PER_SECOND_LIMIT_VALUE = 24;

export class HttpClient {
  constructor({ baseURL = process.env.REACT_APP_API_FOOTBALL_URL, timeout = 20000 } = {}) {
    if (!HttpClient.instance) {
      HttpClient.instance = rateLimit(axios.create({ baseURL, timeout }), {
        maxRPS: MAX_REQUEST_PER_SECOND_LIMIT_VALUE
      });

      HttpClient.instance.interceptors.request.use(
        config => ({ ...config, headers: { 'x-rapidapi-key': process.env.REACT_APP_API_KEY } })
      );

      Object.freeze(HttpClient.instance);
    }
  }

  setGateway(apiFootballUrl) {
    HttpClient.instance.interceptors.request.use(config => {
      config.baseURL = apiFootballUrl;

      return config;
    });
  }

  getInstance() {
    return HttpClient.instance;
  }
}

const httpClient = new HttpClient();

export default httpClient;
