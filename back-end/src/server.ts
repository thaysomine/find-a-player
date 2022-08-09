import app from './app.js';
import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT || 5000, () => console.log(`Server started at port ${process.env.PORT}`));