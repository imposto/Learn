// se -a estiver precente dentro da lista de argumentos (argv) sera diferente de -1 claro e retornara true
// se a -a nao for passada na hora de chamar o processo ela vira false pois nao entrou na lista de argumentos
const anonimo = process.argv.indexOf('-a') !== -1



if(anonimo){
    // process é o node interpretando algo 
    process.stdout.write('Fala anonima! \n')
    //.exit no process mata o projeto
    process.exit()
}else {
    // process.stdout.write recebe um dado 
    process.stdout.write('Informe o seu nome: ')
    //stdi entrada padrao no caso teclado, -evento on data acontece quando vc digita algo e da "ENTER"
    // o enter tb é enviado para variavel data
    process.stdin.on('data', data =>{
        //const nome recebe o valor digitado que foi recebido como parametro na funcao
        // ocorre entao a conversao e a substituicao do Enter por nada
        // To string depois replace
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}