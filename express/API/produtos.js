module.exports = (app, texto) =>{ // assim da pra receber parametros dentro do modulo
    function salvar(req, res){
        res.send('Produtos > Salvar ' + texto)
    }

    function obter(req, res){
        res.send('Produtos > obter ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter } // se eu quiser usar em outro contexto
}

