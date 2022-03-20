//const http = require('http');
import app from './src/app.js'
import chalk from 'chalk';

const port = process.env.PORT || 3000;

/*
const router = {
    '/': 'Cursos De Node',
    '/livros': 'Entrando na página de livros',
    '/autores': 'Página de autores',
    '/editora': 'Página da editora',
    '/sobre': 'informações sobre o projeto'
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(router[req.url])
})

*/


app.listen(port, ()=>{
    console.log(chalk.bgGreen.black(`   Servidor Rodando com sucesso na porta ${port}  `));
})