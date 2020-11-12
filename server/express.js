import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import Template from './../template'
 import userRouters from './routers/user.routers'



const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true }))

app.use(cookieParser())

app.use(compress())

app.use(helmet());

app.use(cors())

app.get('/', (req, res) =>{
  res.status(200).send(Template())
})
app.use('/',userRouters)









export default app;
