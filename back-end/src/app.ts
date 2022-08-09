import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import client from './config/database.js';
import router from './routes/index.js'; 
//import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);  
//app.use(errorHandler);

async function main() {
    await client.$connect();
    console.log('Connected to the database');
}
main(); 

export default app;