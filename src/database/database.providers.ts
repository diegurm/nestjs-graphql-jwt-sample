import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'database.sqlite',
      });

      sequelize.addModels([User]);
      await sequelize.sync();

      return sequelize;
    },
  },
];
