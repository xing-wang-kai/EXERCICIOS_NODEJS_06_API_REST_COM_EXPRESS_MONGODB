import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    nascionalidade: {type: String, required: true}
},
{
    versionKey: false
})

const autores = mongoose.model('autores', AutorSchema);

export default autores;