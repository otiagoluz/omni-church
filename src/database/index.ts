import { Sequelize } from 'sequelize-typescript'
import User from '../models/UserMaster';
import * as dotenv from "dotenv";
const dbConfig = require('../config/database');

dotenv.config();

const dbConnection = new Sequelize({ ...dbConfig, models: [User] });

export default dbConnection;