function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("textano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fsex[0].checked) {
        gênero = "Homem"
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, 'img/bebe-h.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute(`src`, 'img/')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute(`src`, 'img/')
        } else {
            //Idoso
            img.setAttribute(`src`, 'img')
        }
    } else if (fsex[1].checked) {
        gênero = "Mulher"
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, 'img/bebe-h.jpg')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute(`src`, 'img/bebe-h.jpg')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute(`src`, 'img/bebe-h.jpg')
        } else
            //idoso
            img.setAttribute(`src`, 'img/bebe-h.jpg')
    }
}
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)

        }



