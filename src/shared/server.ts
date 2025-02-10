import axios from 'axios';

export class Server {
  readonly instance = axios.create({ withCredentials: true, baseURL: 'api' });
  readonly server = axios.create({ withCredentials: true, baseURL: 'api' });

  constructor() {
    this.server.interceptors.response.use(
      config => config,
      async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._isRetry) {
          originalRequest._isRetry = true;
          try {
            await this.instance.get('auth/refresh');
            return this.server.request(originalRequest);
          } catch (error) {}
        }
      },
    );
  }
}
