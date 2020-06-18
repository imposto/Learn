const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//middleware é uma funcao que execulta quando uma requisiçao chegar // pode ser por um padrapo de url ou todas
//prove para todos os arquivos staticos 
app.use(express.static('.'))

//pode chamar com uma url especifica
app.use('/teste', bodyParser.urlencoded({extended: true}))
//ou generica para todoas
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//quando houver uma requisicao do tipo get nessa url /teste chame essa funão que retorna um Ok 
//funcao middleware
app.get('/teste', (req, res) => res.send('Ok'))


//-------------------------uPLOAD DE ARQUIVOS
const multer = require('multer') 

const storage = multer.diskStorage({
    destination: function (req, file, callback){
    // onde vou salvar o arquivo 2 parametro
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `Arquivo salvo em ${Date.now()}_${file.originalname}`)
    }

})
const upload = multer({storage}).single('arquivo')

//funcao middleware
app.post('/upload', (req, res)=>{
    upload(req, res, err =>{
        if(err){    
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    })
})

app.post('/formulario', (req, res)=> {
    res.send({
        ...req.body,
        id: 200
    })
})


app.get('/parOuImpar', (req, res)=>{
    // req.body
    // req.query /parOuImpar?numero
    // req.params /parOuImpar#:numero
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})




app.listen(8080, () => console.log('Execultado...'))