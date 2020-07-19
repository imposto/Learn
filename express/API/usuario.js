function salvar(req, res){
    res.send('Usuario salvo')
}

function obter(req, res){
    res.send('Usuario > obter')
}


module.exports = {salvar, obter}