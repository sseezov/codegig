import express from 'express'
import expressHandlebars from 'express-handlebars'
import bodyParser from 'body-parser'
import path from 'path'
import db from './config/database.js'
import gigs from './routes/gigs.js'

const app = express();
const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => { console.log('db connected'); })
  .catch((e) => console.log(e))

app.use('/gigs', gigs)

app.get('/', (req, res) => {
  res.end('index');
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})