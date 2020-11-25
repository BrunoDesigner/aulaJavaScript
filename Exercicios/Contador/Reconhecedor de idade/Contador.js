

function start(){
    let iniciar = window.document.getElementById('inicio')
    let finalizar = window.document.getElementById('fim')
    let cont = window.document.getElementById('passo')
    let res = window.document.getElementById('resposta')

    if (iniciar.value.length == 0 || finalizar.value.length == 0 || cont.value.length == 0){
        window.alert('Valor não definido')
    }else {

        res.innerHTML = `Contando:`
        let i = Number(iniciar.value)
        let f = Number(finalizar.value)
        let p = Number(cont.value)

        for(let r = i; r <= f ; r += p){
            res.innerHTML += `👍${r}`
            if(r==f){
                res.innerHTML += `🏴‍☠️`
            }
        }
        
    }
}
