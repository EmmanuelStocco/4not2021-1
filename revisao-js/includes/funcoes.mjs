//Exportar as func para uso em outro arqvc

export function somaVet(vet){
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

//Cria um novo vetor com  cada elemento do vetor original
//elevendado ao quadrado
export function quadradoVet(vet){
    let res = []
    for(let n of vet) res.push(n** 2) //pega do vetor original e coloca no vetor vazio ao quadrado
    return res
}