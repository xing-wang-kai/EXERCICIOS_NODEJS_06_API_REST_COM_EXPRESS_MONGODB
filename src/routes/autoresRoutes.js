import express from "express";
import AutoresController from '../controller/autoresController.js'

const router = express.Router();


router
    .get('/autor', AutoresController.buscarAutores)
    .get('/autor/:id', AutoresController.bucarAutor)
    .post('/autor', AutoresController.criarAutor)
    .put('/autor/:id', AutoresController.editarAutor)
    .delete('/autor/:id', AutoresController.deletarAutor)

export default router;
