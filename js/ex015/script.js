function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        
        //mesmo resultado se colocar uma subtag img dentro da tag div com id res
        var img = document.createElement('img') 
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                //crianca
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src','imagens/adulto-m.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //bebe
            } else if (idade >= 10 && idade < 21) {
                //crianca
            } else if (idade >= 21 && idade < 50) {
                //adulto
            }
            else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}