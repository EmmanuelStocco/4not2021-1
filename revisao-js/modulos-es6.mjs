//ES6 -> Ecma versão 6, de 2016

//sempre q o arqv tem export sem dafult a importação precisa
//acontecer em chaves (desestruturação)
import {numeros} from './includes/dados.mjs'
import {somaVet, quadradoVet} from './includes/funcoes.mjs' //vc pode importar só o q vai usar, ambas func ou só o quadrado por exepmlo


//qunado existe export default no aqrv de origem a importação n tem chaves
import dobraVet from './includes/funcoes2.mjs'

console.log(somaVet(numeros))
//console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))