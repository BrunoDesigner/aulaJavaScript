

function gerar(){
    let number = window.document.getElementById('escolha')
    let table = window.document.getElementById('tabuada')
    
    if(number.value.length == 0 ){
        window.alert('Nenhum Número Foi Digitado')
    }else {
       table.innerHTML = ''
       let cont = Number(number.value)
       for(var c = 1; c <= 10; c++){
           let item = document.createElement('option')
           item.text= `${cont}x${c}=${cont*c}` 
           table.appendChild(item) 
        }
    }
    
}