// acessar algo dentro do dono do codigo que esta sendo execultado no momento, this.

// arrow function tem um this que nao varia


const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar 
falar() // conflito entre paradigmas funcionais e oo

const falarDePessoa = pessoa.falar.bind(pessoa) // bind faz com que o this. seja sempre apontado ao referencial no parenteses do bind
falarDePessoa( )

 