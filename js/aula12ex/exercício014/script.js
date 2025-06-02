function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    function atualizarHorario() { //ACRESCENTADO FORA DA AULA

        var data = new Date()
        var hora = data.getHours()
        var minutos = data.getMinutes() // ACRESCENTADO FORA DA AULA
    
        msg.innerHTML = `Agora são <strong> ${hora} </strong> horas e <strong> ${minutos} </strong> minutos.`
    
        if (hora >= 0 && hora < 12) {
            // BOM DIA
            img.src = 'imagens/manha.png'
            document.body.style.background = 'orange'
        } else if (hora >= 12 && hora < 18) {
            //BOA TARDE
            img.src = 'imagens/tarde.png'
            document.body.style.background = 'tomato'
        } else {
            //BOA NOITE
            img.src = 'imagens/noite.png'
            document.body.style.background = 'darkblue'
        }
    }

    atualizarHorario()
    setInterval(atualizarHorario, 1000) //ATUALIZA HORARIO A CADA SEGUNDO

    }
