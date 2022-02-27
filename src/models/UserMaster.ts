import { Model, DataType, Table, Column, AllowNull } from 'sequelize-typescript';

@Table
class User extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  phone: string;
}

export default User;