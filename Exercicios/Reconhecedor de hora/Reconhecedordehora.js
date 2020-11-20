
function carregar(){
    let imagem = window.document.getElementById('foto')
    let titulo = window.document.getElementById('titulo')
    let data = new Data()
    let hora = data.getHours()
    titulo.innerHTML = `Agora é ${hora} do Dia`
}


