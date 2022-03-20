import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: String, required: true},
    NumeroPaginas: {type: Number}
})

const livros = mongoose.model('livros', LivroSchema);

export default livros;