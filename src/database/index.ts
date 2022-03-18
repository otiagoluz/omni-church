import { Sequelize } from 'sequelize-typescript'
import User from '../models/User';
import * as dotenv from "dotenv";
import Church from '../models/Church';
import Address from '../models/Address';
import Sector from '../models/Sector';
import Member from '../models/Member';
import Congregation from '../models/Congregation';

dotenv.config();

const models = [
  User, 
  Address, 
  Church, 
  Sector, 
  Member, 
  Congregation
]

const dbConnection = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: true,
    underscored: true
  },
  models
});

export default dbConnection;