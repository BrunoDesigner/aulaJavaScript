

function gerar(){
    let number = window.document.getElementById('escolha')
    let table = window.document.getElementById('tabela')
    
    if(number.value.length  == 0 ){
        window.alert('Nenhum Número Foi Digitado')
    }else {
        let cont = 0       
        let n = Number(number.value)
        for (let tb = n ; cont == 0 ; cont++ * tb ){
            var opcao = document.createElement('option')
            opcao.innerHTML = `${cont}`
        }
    }
}