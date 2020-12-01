let num = window.document.getElementById('number')
let tab = window.document.querySelector('select#tabela')
let res = window.document.querySelector( 'div#resultado' )
var valor = []


function numero(n){
    if(n >=1 && n <=100 ){
        return true
    }else {
        return false
    }
}

function lista(n,l){
  if (l.indexOf(Number(n)) != -1 ){
      return true
  }else {
      return false
  }
}

function add(){

    if (numero(Number(num.value)) && !lista(Number(num.value), valor)){
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Você adicionou :${num.value}`
        tab.appendChild(item)
    }else{
        window.alert('Já contem ou o Numero é invalido')
    }
    
}

function calcular(){
    let menor = 0
    let maior = Math.max.apply(valor)
    if(menor < maior ){
        console.log(maior)




         
    }
    res.innerHTML = valor.length
    
}
