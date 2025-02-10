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
    return this.instance.post('auth/register', data);
  }

  async login(data: AuthData) {
    return this.instance.post('auth/login', data);
  }

  async logout() {
    return this.server.delete('auth/logout');
  }

  async check() {
    return this.server.get('auth/check');
  }
}

export const authService = new Auth();
