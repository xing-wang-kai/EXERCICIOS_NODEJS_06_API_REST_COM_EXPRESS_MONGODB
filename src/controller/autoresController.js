import autores from "../models/Autor.js";

class AutoresController {
    static buscarAutores = (req, res) => {
        autores.find((err, autores) => {
            if(!err){
                res.status(200).send(autores)
            }else{
                res.status(400).send({message: `${err.message} - Dados não localizado`})
            }
        })
    }
    static bucarAutor = (req, res) => {
        let { id }  = req.params;
        autores.findById(id, (err, autor) => {
            if(!err) {
                res.status(200).send(autor);
            }else{
                res.status(400).send({message: `${err.message} - Autor não localizado!! `})
            }
        })
    }
    static criarAutor = (req, res) => {
        const autor = new autores(req.body);
        autor.save((err)=>{
            if(!err){
                res.status(200).send({message: `O autor foi criado com sucesso!! `})
            }else{
                res.status(400).send({message: `${err.message} - Ocorreu um erro ao Tentar criar o Autor`})
            }

        })
    }
    static editarAutor = (req, res) => {
        const { id }  = req.params;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(201).send({message: `O autor foi Editado com sucesso!! `})
            } else {
                res.status(400).send({message: `Error ao tentar Editar o Autor`})
            }
        })
    }
    static deletarAutor = (req, res) => {
        const { id }  = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `O Autor de Id ${id} foi deletado com sucesso!! `})
            }else {
                res.status(400).send({message: `${err.message} - O Autor informado não foi localizado `})
            }
        })
    }
}

export default AutoresController;