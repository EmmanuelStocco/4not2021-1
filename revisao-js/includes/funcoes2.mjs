//Neste arqv há apenas um item sendo exportado, uma function
// nesse caso vou usar export default


export default function dobraVet(vet){
    //Cria novo vetor com elementos q são dobro do orginal
    let res = []
    for(let n of vet) res.push(n * 2)
    return res
}