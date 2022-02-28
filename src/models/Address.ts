import { Model, DataType, Table, Column, AllowNull, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Church from './Church';

@Table
class Address extends Model {  
  @ForeignKey(() => Church)
  church_id?: number

  @AllowNull(false)
  @Column(DataType.STRING)
  street: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  number: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  apartment: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  zip_code: string;
  
  @AllowNull(true)
  @Column(DataType.STRING)
  district: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  city: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  state: string;

  @BelongsTo(() => Church)
  church: Church
}

export default Address;