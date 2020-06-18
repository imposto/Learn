// json formato textual todas as linguagens consegue ler e gerar
// muito usado em comunicação entre sistemas
// string ify converte os compontentes e dados do objeto para texto


const obj = {a: 1, b:2, c: 3, d: 4, soma(){ return a + b + c +d}}
console.log(JSON.stringify(obj))


//console.log(JSON.parse "{a : 1, b: 2, c: 3, d: 4}")
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3, 'd':4"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": 4}'))
console.log(JSON.parse('{"a": 1, "b": "delicia" , "c": true, "d": {}, "e": [] }'))