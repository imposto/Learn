// index js é o enter point no web pack para ser trabalhado
// Arquivo SASS sendo importado,
import "./scss/index.scss"



// Dependencias
import 'jquery' // sem extensao ele supoe que é um arquivo js, caso tenha a extensao ele utiliza aqueles loaders que fizemos com regex para carregar o arquivo.
import 'bootstrap'


//Meus arquivos
import "./js/core/includes"
import "./js/plugins/cityButtons"