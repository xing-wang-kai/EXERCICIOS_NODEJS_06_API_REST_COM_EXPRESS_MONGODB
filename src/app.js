import express from "express";
import db from "./config/dbconnect.js";
import chalk from  'chalk';
import livros from './models/Livro.js';

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', ()=> {
    console.log(chalk.bgMagentaBright.black('   conexão com o bd realizada com sucesso!!    '))
})

const app = express();
app.use(express.json())
/**
 * const livros = [
    { id: 1, titulo: 'O senhor dos Anéis'},
    { id: 2, titulo: "O hobbit"}
]
 */

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})
//method type get from mongdb using mongoose
app.get('/livros', (req, res) =>{
    livros.find((error, livros) =>{
        res.status(200).json(livros)
    })
})

app.get('/livros/:id', (req, res)=>{
    let index = buscaId(req.params.id);
    res.status(200).json(livros[index])
})

app.post('/livros', (req, res) =>{
    livros.push(req.body)
    res.status(200).send('Livro criado com sucesso!!!')
})

app.put('/livros/:id', (req, res) =>{
    let index = buscaId(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send('Livro Modificado com sucesso')
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaId(id);
    livros.splice(index, 1);
    res.status(200).json(livros)
})

function buscaId(id){
    return livros.findIndex( livro => livro.id === Number.parseInt(id))
}

export default app;