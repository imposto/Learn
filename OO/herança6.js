function Aula(nome, videoID){
    this.nome = nome
    this.videoID =videoID
}

const aula1= new Aula ('Bem vindo', 1234)
const aula2= new Aula ('ate vindo', 1234)

console.log(aula1, aula2)

//Simulando new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}


const aula3 = novo(Aula, 'Bem vindo', 123)

const aula4 = novo(Aula, 'Ate breve', 123)

console.log(aula4)