import { Model, DataType, Table, Column, AllowNull, HasOne } from 'sequelize-typescript';
import Address from './Address';

@Table
class Church extends Model {
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  cnpj: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  phone: string;

  @HasOne(() => Address, 'church_id')
  address: Address
}

export default Church;