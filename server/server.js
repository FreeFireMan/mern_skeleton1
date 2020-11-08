import config from './../config/config'
import app from "./express";
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser : true,
  useCreateIndex : true,
  useUnifiedTopology: true
})

mongoose.connection.on('error', ()=>{
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err)=>{
  err
      ? console.error(err)
      : console.info('Server listening on port %s.',config.port);
})
