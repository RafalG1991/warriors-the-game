import { createPool } from 'mysql2/promise';
import config from './config.js';

export const pool = createPool(config);