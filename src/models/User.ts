import { Model, DataType, Table, Column, AllowNull } from 'sequelize-typescript';
import * as bcrypt from "bcryptjs";

@Table
class User extends Model {
  id?: number;

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


  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnEncryptedPasswordIsValid(unEncryptedPassword: string) {
    return bcrypt.compareSync(unEncryptedPassword, this.password);
  }
}

export default User;