import { Model, DataType, Table, Column, AllowNull, HasOne, BelongsTo, HasMany } from 'sequelize-typescript';
import Congregation from './Congregation';
import Member from './Member';

@Table
class Sector extends Model {
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(true)
  @Column(DataType.NUMBER)
  number?: number;

  @BelongsTo(() => Member, 'id')
  member_leader?: Member;

  @HasMany(() => Congregation, 'sector_id')
  congregations: Congregation[];
}

export default Sector;