var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img1')
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if (hora >= 0 && hora < 12) {
        img.src = "imagens.img/manhã.jpg"
        document.body.style.background = '#e2cd9f'

    }else if(hora >= 12 && hora < 18){
        img.src = "imagens.img/tarde.jpg"
        document.body.style.background = '#b9846f'

    }else if (hora > 18 && hora < 24) {
        img.src = "imagens.img/noite.jpg"
        document.body.style.background = '#515154'
    }
    else{
        window.alert("Formato de hora incorrespondente!")
        return data.getHours() 
    }
}
function mudar() {
    var mudar = window.confirm("Deseja alterar somente a hora para mudar o estilo da página?")
    if (mudar == true) {
        var alterar = window.prompt("Hora desejada:")
        hora = parseInt(alterar)
        if (hora < 0 || hora > 24) {
            window.alert("Erro: A hora deve estar entre 0 a 24.")
        } else {
            carregar()
        }
    }
}
