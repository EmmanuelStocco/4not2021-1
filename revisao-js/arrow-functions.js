//função para fins ilustrativos
function quadrado(n){
    return n * n
}

//agr em arrow
// 1 Os parentes em torno do argumentos são omitidos 
// 2 a palavra function antes do argumento é substituido pelo simbolo  =>
// 3 Após o argumentos
// 4 As chaves são omitidas
// 5 o return pe otimido
const quadrado2 = n => n * n
console.log(quadrado(8), quadrado2(8))


//função com mais de 1 argumento
function potencial(b, e){ //b = base, e = expoente
    return b ** e
}

//com 1+ argumentos, os parentes em volta deles devem retornar
let potencia2 = (b,e) => b**e
console.log(potencia(2,6), potencia2(2,6))


//função sem argumentos
function megasena(){
    //Retorna um numero aleatorio entre 1 e 60
    //Math.random() retorna um numero aleatorio entre 0 e 1
    //multiplicando por 60 temos 1 numero aleatorio entre 0 e 59 fracionado
    //soma 1 ajusta a faixa entre 1 e 60
    // fkiir() retira as casas decimais
    return Math.floor(Math.random() * 60 + 1).floor()
}

console.log(megasena(), megasena(), megasena())

//quando n a argunmentos, ops parentes marcam lugar deles
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2())

//função com mais de uma linha de código no corpo
function somaTudo (...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

//Arrow func para corpos com mais de uma linha
//voltam as chaves
//os parentes em torno do argumneto sao necessarios para tratar o argumento de resto
let somaTudo2 = (...nums) => {
    let soma = 0
    for(let n of nums) soma +=n
    return soma
}

//Conclusão o formato arrow function é indicado quando a func se resolve 
//em apenas uma lina(ou pocas linhas)