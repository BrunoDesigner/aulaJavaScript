
function carregar(){
    let foto = window.document.getElementById('imagem')
    let txt = window.document.getElementById('titulo')
    let data = new Date()
    let dia = data.getDate()
    hora = data.getHours()
    txt.innerHTML = `Agora são ${hora} horas do Dia ${dia}`
    //condicionais
    
    if (hora >= 0 && hora < 12){
        //Bom Dia
        foto.src='imagens/amanhecer.png'
        document.body.style.background = '#F7B32B'
    }else if (hora >= 12 && hora <18){
        //Boa Tarde
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#FE9920'
    }else{
        //Bao Noite
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#000000'
    }


}
