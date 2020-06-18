const port = 3003


var express = require('express')
const app = express()
const bodyParser =require('body-parser')
const bancoDeDados = require('./bancoDeDados')



// a partir de um use tudo depois sera padronizado com urlencoded body parser
app.use(bodyParser.urlencoded({ extended: true}))


//CRUD , CREATE, READ, UPDATE, DELETE

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produto/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produto/new', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({

        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.delete('/produto/delete/:id', (req, res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})





//app.use('/produtos', (req, res, next) =>{
   // res.send({nome: 'Notebook', preco: 1239.99},) // metodo sent converte automaticamente para JSON

//})

app.listen(port, () =>{
    console.log(`Servidor Ativo na porta indicada ${port}`)
})


