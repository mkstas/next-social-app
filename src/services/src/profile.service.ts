import { Server } from '@/shared/server';

class Profile extends Server {
  async find() {
    return this.server.get('profiles');
  }
}

export const profileService = new Profile();
