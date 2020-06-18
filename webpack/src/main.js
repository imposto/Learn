
import Pessoa from './pessoa' // WEBPACK RECONHECE
import './modulos/moduloA' // os arquivos dependentes podem estar direto no main.js ou dentro de cada arquivo que dependa, mas deve estar sempre exportado com import
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())