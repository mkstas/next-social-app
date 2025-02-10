import { Server } from '@/shared/server';

export interface AuthData {
  email: string;
  password: string;
}

export interface RegisterData extends AuthData {
  userName: string;
}

class Auth extends Server {
  async register(data: RegisterData) {
    return await this.instance.post('auth/register', data);
  }

  async login(data: AuthData) {
    return await this.instance.post('auth/login', data);
  }

  async logout() {
    return await this.server.delete('auth/logout');
  }

  async check() {
    return await this.server.get('auth/check');
  }
}

export const authService = new Auth();
