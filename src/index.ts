import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './API';
 
const app = express();
const port = 3000;

app.use(cors());

app.use("/", routes); //Load API
 
app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);