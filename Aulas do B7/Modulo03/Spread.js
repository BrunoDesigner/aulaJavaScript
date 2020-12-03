/*let numeros = [1,2,3,4]
let outros = [...numeros,5,6,7,8]

console.log(outros)
*/

/*Com Objetos  

let info = {
    Nome:'bruno',
    SobreNome:'souza lima',
    Idade:'27 anos',
    estadoCivil:'casado'
}

let maisinfo = {
    ...info,
    cidade:"Luziânia",
    Estado:"Go" 

}
*/
/*mais usado*/
function adicionar(info){
    let novasinfo = {
        ...info,
        status:'0',
        senha:'dgads'
        
    }
    return novasinfo
}

console.log(adicionar({nome:'bruno',idade:'27'}))