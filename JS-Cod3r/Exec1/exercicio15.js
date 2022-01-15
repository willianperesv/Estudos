function carros(car){
    switch(car){
        case "hatch":
            console.log("Parabéns Baita mal gosto!")
        break
        case "Sedan": case "Motocicleta":  case "camioneta":
            console.log("MAS TEM CERTEZA QUE NÃO PREFERE AQUELE MODELO DE MERDA?")
            break
        default:
            console.log("AQui não tem Cherry VTF")
    }
}
carros("Sedan")
carros("Motocicleta")
carros("camioneta")
carros("hatch")
carros("QQ")