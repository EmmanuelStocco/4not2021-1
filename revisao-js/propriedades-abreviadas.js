 //Criando um objeto cujo valor das propriedades vem de variaveis


 let usuario = 'joao'
 let senha = 'Deus123'
 let name = 'João das Couves'
 let lastLogin = '2021-02-08 n22:49:28'

 let userInfo = {
     login: usuario,
     password: senha,
     name, //propriedade abreviada (name:name)
     lastLogin  //propriedade abreviada (lastLogin: lastLogin)
 }

 console.log(userInfo)

 let info = 'isto é um teste'
 console.log(info)
 console.log({info})