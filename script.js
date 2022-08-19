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
    //var gênero = ''
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fsex[0].checked) {
        gênero = "Homem"
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`,'img/bebe-h.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute(`src`,'img/jovem-h.jpg')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute(`src`, 'img/adulto-h.jpg')
        } else {
            //Idoso
            img.setAttribute(`src`, 'img/idoso.jpg')
        }
    } else if (fsex[1].checked) {
        gênero = "Mulher"
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, 'img/bebe-m.jpg')
        } else if (idade < 21) {
            //Jovem - Mulher
            img.setAttribute(`src`, 'img/jovem-m.jpg')
        } else if (idade < 50) {
            //Adulto - Mulher
            img.setAttribute(`src`, 'img/adulto-m.jpg')
        } else
            //idosa
            img.setAttribute(`src`, 'img/idosa.jpg')
    }
}
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)

        }



