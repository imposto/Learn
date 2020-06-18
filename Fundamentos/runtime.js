let a = 3

globalThis.b = 123
this.c = 890

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports)


// abc = 3 nao fazer 


module.exports = {c: 4567, f: 2323, g: 1231}