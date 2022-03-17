import { Model, DataType, Table, Column, AllowNull, HasOne, BelongsTo } from 'sequelize-typescript';
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
  member_leader?: Member
}

export default Sector;