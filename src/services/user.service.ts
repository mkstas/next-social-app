import axios from 'axios';

export interface AuthData {
  email: string;
  password: string;
}

export interface RegisterData extends AuthData {
  userName: string;
}

class User {
  async login(data: AuthData) {
    return axios.post('api/auth/login', data);
  }

  async register(data: RegisterData) {
    return axios.post('api/auth/register', data);
  }

  async logout() {
    const instance = axios.create({ withCredentials: true });
    return instance.delete('api/auth/logout');
  }

  async getProfile() {
    const instance = axios.create({ withCredentials: true });

    instance.interceptors.response.use(
      config => config,
      async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._isRetry) {
          originalRequest._isRetry = true;
          try {
            await axios.get('api/auth/refresh', { withCredentials: true });
            return instance.request(originalRequest);
          } catch (error) {}
        }
      },
    );

    return instance.get('api/profiles');
  }
}

export const userService = new User();
