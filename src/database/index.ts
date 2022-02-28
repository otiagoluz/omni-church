import { Sequelize } from 'sequelize-typescript'
import User from '../models/UserMaster';
import * as dotenv from "dotenv";
import Church from '../models/Church';
import Address from '../models/Address';
const dbConfig = require('../config/database');

dotenv.config();

const dbConnection = new Sequelize({ ...dbConfig, models: [User, Address, Church] });

export default dbConnection;