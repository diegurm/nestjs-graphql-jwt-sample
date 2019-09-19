import {
  Model,
  Column,
  DataType,
  BeforeCreate,
  BeforeUpdate,
  Table,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table({ modelName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id?: number;

  @Column({ type: DataType.STRING(40), allowNull: false })
  name: string;

  @Column({ type: DataType.STRING(80), allowNull: false })
  email: string;

  @Column({ type: DataType.STRING(64), allowNull: false })
  password: string;

  @Column({ type: DataType.DATE })
  public createdAt: Date;

  @Column({ type: DataType.DATE })
  public updatedAt: Date;

  @BeforeCreate
  static async beforeCreateUser(userInstance: any) {
    const salt = bcrypt.genSaltSync(8);
    userInstance.password = await bcrypt.hashSync(userInstance.password, salt);
  }

  @BeforeUpdate
  static async beforeUpdateUser(userInstance: any) {
    if (userInstance.changed('password')) {
      const salt = bcrypt.genSaltSync(8);
      userInstance.password = await bcrypt.hashSync(
        userInstance.password,
        salt,
      );
    }
  }

  public static isPassword = (
    encondePassword: string,
    password: string,
  ): boolean => {
    return bcrypt.compareSync(password, encondePassword);
  }
}
