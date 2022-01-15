function verificar() {
var data = new Date()
// data atual
var ano = data.getFullYear()
// ano com 4 digitos "full year"
var fano = document.getElementById('txtano')
//id caixa de ano
var res = document.querySelector('div#res')
if ( fano.value.length == 0 || Number (fano.value) > ano) {
  
    window.alert('[ERRO] veriique os dados e tente novamente!')

  } else {

  
        var fsex = document.getElementsByName('radsex')
        //busca o sexo pelo radio
        var idade = ano - Number (fano.value)
        // faz a conta do ano atual subtraido pelo nascimento 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
          // no fsex "0" significa que é o primeiro componente
          gênero = 'Homem'
          if (idade >=0 && idade < 10) {
            //criança
            
          } else if (idade < 21) {
          // jovem
             img.setAttribute('src', 'foto-adolescente-m.png')
          } else if (idade < 50) {
            //Adulto
            img.setAttribute('src' , 'foto-homem.png') 
          } else {
             //idoso
            img.setAttribute('src' , 'foto-idoso.png')
          } 

        } else if (fsex[1].checked) {
           // no fsex "1" significa que é o segundo componente
            gênero = 'Mulher'
          if (idade >=0 && idade < 10) {
              //criança
              img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21) {
            // jovem
            img.setAttribute('src' , 'foto-adolf.png')
            } else if (idade < 50) {
              //Adulto
              img.setAttribute('src' , 'foto-mulher.png')
            } else {
            //idoso
            img.setAttribute('src','foto-idosa.png')
          }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        //comando de adição de imagem ao resultado
    } 
  
  }