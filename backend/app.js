import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/index.js';

import connectDB from './config/dbConnection.js';

const app = express();
dotenv.config();

const db = await connectDB();

app.use('/api/v1/', mainRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening in on port ${process.env.PORT}!`);
})