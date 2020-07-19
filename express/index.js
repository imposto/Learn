const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require ('./saudacaomid')
const usuarioApi = require('./API/usuario')


//require('./API/produtos')(app, 'com param!')
const produtoApi = require('./API/produtos')
produtoApi(app, 'com param!')


app.get('/usuario', usuarioApi.obter)
app.post('/usuario', usuarioApi.salvar)


app.use(bodyParser.text()) // corpos de texto
app.use(bodyParser.json()) // json 
app.use(bodyParser.urlencoded({extended: true})) // url enconderd
app.use(saudacao('Delicia'))


app.use('/opa', (req, res, next) =>{
    console.log('Antes')
    next()
})
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente rellatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) =>{
    // let corpo = ''
    // req.on('data', function(parte){ // enquanto recebe dados como um streming por exemplo
    //     corpo += parte
    // })

    // req.on('end', function() { // quando terminar de receber dados
    //     resp.send(corpo)
    // })


    res.send(req.body)
})

app.get('/clientes/:id', (req, res) =>{
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next)=>{
    res.json({
        data: [
            { "name": 'Ipad 102s',
            "price": 2833,
            "discount" : 0.12},
            {"id": 1, "name": "Analice", "salary": 2833},
            {"id": 1, "name": "Analice", "salary": 2833},
            {"id": 1, "name": "Analice", "salary": 2833},
            {"id": 1, "name": "Analice", "salary": 2833}
        ]
    })
    //res.send('HTML HTMÇ')
    console.log('durante')
    next()
})

app.use('/opa', (req, res) =>{
    console.log('Depois')
})

app.listen(3001, () =>{
    console.log('Back eND eXecultando...')
})