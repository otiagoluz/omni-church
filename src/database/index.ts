import { Sequelize } from 'sequelize-typescript'
import User from '../models/UserMaster';
import * as dotenv from "dotenv";
import Church from '../models/Church';
import Address from '../models/Address';
import Sector from '../models/Sector';
import Member from '../models/Member';
import Congregation from '../models/Congregation';
const dbConfig = require('../config/database');

dotenv.config();

const models = [
  User, 
  Address, 
  Church, 
  Sector, 
  Member, 
  Congregation
]

const dbConnection = new Sequelize({ ...dbConfig, models });

export default dbConnection;