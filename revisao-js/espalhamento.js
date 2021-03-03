console.log(Math.min(14, 7, -3, 23, 34))
console.log(Math.max(14, 7, -3, 23, 34))

let numeros = [14, 7, -3, 23, 34]
//como achar o max e min de valores em um vetor?
//tem q desmontar o vetor
//usando espaçhamento
console.log(Math.min(...numeros))//os 3 pontinhos pegam o vetor e espalham em numeros soltos
console.log(Math.max(...numeros))

let Numeros = [4, 0, 11, numeros, 8, 19, 26]
console.log(Numeros)

let maisNumeros = [4, 0, 11, ...numeros, 8, 19, 26]
console.log(maisNumeros)

//Função com paratro ou argumento de resto - os 3 pontinhos pegam os numros soltos e colocam em vetos
function somaTudo(...nums){
    let soma = 0
    for (let n of nums) soma += n //={soma += n}
    return soma
}

console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

//Argumento convencionar + argumento de resto (primeiro o convencional deps de resto)
function calcular(oper, ...nums){
    let res
    switch(oper){
        case'+':
            //res = 0
            //for(let n of nums) soma += n
            res = somaTudo(...nums)
            break

        case '*':
            res = 1
            for(let n of nums) res *= n
    }
    return res
}

console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 76, -2, 41, 19, 11, 22, 30))

//Como chamar a função somaTudo() para processar o vetor maisNumeros?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+', ...maisNumeros))