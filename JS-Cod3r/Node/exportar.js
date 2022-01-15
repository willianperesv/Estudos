//this e exports são só duas referencias para um objeto que module.exports aponta!

console.log(module.exports)
console.log(module.exports === this) //true
console.log(module.exports === exports)//true

this.a = 1
exports.b = 2
module.exports.c = 3
//acima todos deixam os objs visiveis para fora

exports = null
console.log(module.exports)

exports = {
    nome:'teste'
}
console.log(module.exports)

module.exports = {publico: true}