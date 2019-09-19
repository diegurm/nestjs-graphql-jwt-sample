import { Injectable, Inject } from '@nestjs/common';
import { User } from '../database';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: typeof User,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async create(user: any): Promise<User | null> {
    return await this.userRepository.create(user);
  }
}
