function bhaskara(ax2, bx, c) {
    let b = ax2
    let a = bx
    let C = c
    let delta = (b * b) - 4 * a * C
    let raizDelta = Math.sqrt(delta) //resolve a raiz de delta
    let xbaskhara1 = (-b - raizDelta) / (2 * a)
    let xbaskhara2 = (-b + raizDelta) / (2 * a)
    console.log(delta)
    console.log(xbaskhara1)
    console.log(xbaskhara2)

}

bhaskara(3, -5, 12)