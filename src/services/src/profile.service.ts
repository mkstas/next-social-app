import { Server } from '@/shared/server';

class Profile extends Server {
  async find() {
    return await this.server.get('profiles');
  }
}

export const profileService = new Profile();
