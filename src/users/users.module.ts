import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../database';

@Module({
  providers: [
    UsersService,
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
