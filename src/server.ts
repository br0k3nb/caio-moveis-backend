import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'

import routes from './routes/index';

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(`${process.env.MONGODB_URL}`), (err: unknown) => err && console.log(err);

app.use(bodyParser.json({ limit: '524288000' })); //seting a high limit just for testing purposes
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3002, () => console.log(`Server is running at port 3002`));

export default app;