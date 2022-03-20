import express from 'express';
import LivroController from '../controller/livrosController.js';

const router = express.Router()

router
    .get('/livros', LivroController.buscarLivros)
    .get('/livros/:id', LivroController.buscarLivro)
    .post('/livros', LivroController.criarLivro)
    .put('/livros/:id', LivroController.editarLivros)
    .delete('/livros/:id', LivroController.deletarLivros)

export default router;