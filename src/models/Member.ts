import { Model, DataType, Table, Column, AllowNull, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Address from './Address';
import Congregation from './Congregation';
import Sector from './Sector';

@Table
class Member extends Model {
  @ForeignKey(() => Congregation)
  @ForeignKey(() => Sector)
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @HasOne(() => Address, 'member_id')
  address: Address;

  @AllowNull(true)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  born_date: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  baptism_date: Date;

  @AllowNull(true)
  @Column(DataType.STRING)
  phone: string;
  
  @ForeignKey(() => Congregation)
  @AllowNull(false)
  @Column(DataType.NUMBER)
  congregation_id: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  civil_state: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  spouse_name: string;

  //TODO - create relations
  // @AllowNull(true)
  // @Column(DataType.NUMBER)
  // spouse_id: number;

  //TODO ecclesiastical office
  //TODO last ordenate
  //TODO ecclesiastical office
}

export default Member;