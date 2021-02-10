let  vetor = [10,20,30]

let obj = {
    nome: 'Maria', 
    idade: 34,
    naturalidade: 'Franca/SP',   
}

// destruturação do vetor: as var do let podem ter qqr nome
let [x,y,z] = vetor 
console.log(x)
console.log(y)
console.log(z)

//Destruturação de objetos - as var do let devem ter os mesmos nomes
//das propriedades nao importa a ordem
let {naturalidade, nome, idade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 = {
    marca: 'Volkswagem',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

//Desestruturação parcial de um objeto
let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)

let vet2 = ['laranja', 'maça', 'pera']

//n da certo - desestruturação parcial de vetor
//let [undefined, fruta2, undefined] = vet2
//console.log(fruta2)

//mas é possivel ignorar os ultimos elementos
let [fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

//ignorando o primeiro elemento (deixe uma virgula na posição a ignorar)
let [, f2, f3] = vet2
console.log(f2)
console.log(f3)