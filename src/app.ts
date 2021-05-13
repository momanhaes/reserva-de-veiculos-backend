import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoute from './users/user.route';
import vehiclesRoute from './vehicles/vehicles.route';
import MongoConnectionProvider from './configuration/mongo';

const provider = MongoConnectionProvider.getInstance();
provider.connect();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoute);
app.use('/vehicles', vehiclesRoute);
app.get('/', (req, res) => res.status(404));

export { app };