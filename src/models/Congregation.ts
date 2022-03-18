import { Model, DataType, Table, Column, AllowNull, HasOne, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import Address from './Address';
import Member from './Member';
import Sector from './Sector';

@Table
class Congregation extends Model {
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  is_sector_head: boolean;

  @ForeignKey(() => Sector)
  sector_id?: number

  @BelongsTo(() => Member, 'id')
  member_leader: Member

  @HasOne(() => Address, 'congregation_id')
  address: Address;

  @HasMany(() => Member, 'id')
  members: Member[];
}

export default Congregation;