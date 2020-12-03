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
    num.value = ''
    num.focus()
}

function calcular(){
    if(valor.length == 0 ){
        window.alert('Adicione Valores a Tabela')
    }else{
   
    let tot = valor.length    
    let maior = valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0
   for (let pos in valor){
        soma += valor[pos]
        media += soma/tot
        if(maior < valor[pos]){
            maior = valor[pos]
        }
        if(valor[pos]< menor){
            menor = valor[pos]
        }
        if(soma + valor[pos]){

        }
        res.innerHTML = ''
        res.innerHTML += `<p>A Soma dos numeros cadastrados  é ${soma}</p>`
        res.innerHTML += `<p>O total de Numeros Cadastrasdos é ${tot}</p>`
        res.innerHTML += `<p>A Media dos Valores é ${media}</p>`
        res.innerHTML += `<p> O menor Valor é ${menor} </p>`
        res.innerHTML += `<p> O maior Valor é ${maior} </p>`
    }
   }
    
}
