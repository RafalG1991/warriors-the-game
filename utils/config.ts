import 'dotenv/config';

export default {
    port: Number(process.env.PORT),
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    namedPlaceholders: true,
    decimalNumbers: true,
    connectionLimit: 20,
    waitForConnections: true,
}