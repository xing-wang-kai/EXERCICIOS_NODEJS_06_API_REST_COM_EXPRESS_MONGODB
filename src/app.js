import express from "express";
import chalk from  'chalk';

import db from "./config/dbconnect.js";
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', ()=> {
    console.log(chalk.bgMagentaBright.black('            conexão com o bd realizada com sucesso!!            '))
})

const app = express();
app.use(express.json());

routes(app);

export default app;