import livros from "../models/Livro.js";

class LivroController {
    static buscarLivros = (req, res) => {
        livros.find()
              .populate('autor')
              .exec((err, livros)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Livros não localizados`})
            }else{
                res.status(200).json(livros)
            }
        })
    }

    static buscarLivro = (req, res) => {
        let {id} = req.params;
        livros.findById(id)
              .populate('autor')
              .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Livro não localizado`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static criarLivro = (req, res)=>{
        let livro = new livros(req.body);
        livro.save((err)=>{
            if(err){
                res.status(500).send({ message: `${err.message} - Erro ao cadastrar o Livro! `});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static editarLivros = (req, res) => {
        let { id } = req.params;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: `Livro de ${id} foi atualizado com sucesso`})
            }else{
                res.status(500).send({message: `${err.message} Ocorreu um Erro ao Editar o Livro`})
            }
        })
    }
    static deletarLivros = (req, res) =>{
        let { id } = req.params;
        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Livro do id: ${id} deletado com sucesso! `})
            }else(
                res.status(400).send({message: `${err.message} - Ocorreu um error ao tentar deletar o Livro!!`})
            )
        })
    }
}

export default LivroController;


