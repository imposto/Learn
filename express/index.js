const express = require ('express')
const app = express()

app.use('/opa', (req, resp, next) =>{
    console.log('Antes')
    next()
})

app.get('/opa', (req, resp, next)=>{
    resp.json({
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

app.use('/opa', (req, resp) =>{
    console.log('Depois')
})

app.listen(3001, () =>{
    console.log('Back eND eXecultando...')
})